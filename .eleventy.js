const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight')
const pluginRss = require('@11ty/eleventy-plugin-rss')

module.exports = function (config) {
    // A useful way to reference the context we are runing eleventy in
    let env = process.env.ELEVENTY_ENV

    // Layout aliases can make templates more portable
    config.addLayoutAlias('default', 'layouts/base.njk')

    // Add some utility filters
    config.addFilter('squash', require('./src/utils/filters/squash.js'))
    config.addFilter('dateDisplay', require('./src/utils/filters/date.js'))

    // add support for syntax highlighting
    config.addPlugin(syntaxHighlight)

    // minify the html output
    config.addTransform('htmlmin', require('./src/utils/minify-html.js'))

    // compress and combine js files
    config.addFilter('jsmin', function (code) {
        const UglifyJS = require('uglify-js')
        let minified = UglifyJS.minify(code)
        if (minified.error) {
            console.log('UglifyJS error: ', minified.error)
            return code
        }
        return minified.code
    })

    // pass some assets right through
    config.addPassthroughCopy('./src/site/images')
    config.addPassthroughCopy('./src/site/js')

    config.addPlugin(pluginRss)

    config.addPairedShortcode("figure", (content, src, alt) => {
        return `
        <figure class='post__figure'>
            <img src='${src}' alt='${alt}' loading='lazy'>
            <figcaption>${content}</figcaption>
        </figure>
        `.trim()        
    })

    config.addShortcode(
        "picture",
        (src, alt) => `<p><img loading='lazy' src='${src}' alt='${alt}'/></p>`.trim()
    )


    // make the seed target act like prod
    env = env == 'seed' ? 'prod' : env
    return {
        dir: {
            input: 'src/site',
            output: 'dist',
            data: `_data/${env}`,
        },
        templateFormats: ['njk', 'md', '11ty.js'],
        htmlTemplateEngine: 'njk',
        markdownTemplateEngine: 'njk',
        passthroughFileCopy: true,
    }
}
