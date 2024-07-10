/**
 * @type {import('./types').Project[]}
 */
const favourites = [
    {
        title: 'Social Interaction Lab',
        heroURL: './Social-Interaction.png',
        demoURL: 'https://socialinteractionlab.psychology.barnard.edu/',
        isFavourite: true,
        date: '2022-12-25',
        content: `
        Our research focuses on understanding human social interactions. We explore how individuals think, feel, and behave in social contexts and how their experiences are influenced by their interaction partners. 
        
        Our studies investigate changes in experiences and behaviors within single interactions and across repeated interactions with the same partner. 
        
        We use diverse methodologies, including experiments, behavioral observation, psychophysiology, and experience sampling, to study social interactions both in the lab and in naturalistic settings. 
        
        Additionally, we examine physiological synchrony in interactions, investigating its relationship with behaviors, subjective experiences, and interpersonal accuracy.
        `,
    },
    {
        title: 'Butter',
        heroURL: './hero-butter.png',
        demoURL: 'https://butter.sonnet.io',
        isFavourite: true,
        date: '2023-05-05',
        content: `Butter is a browser extension that skips sponsored content in YouTube videos by watching them before you do. Because you deserve butter.`,
    },
    {
        title: 'Ensō',
        heroURL: './hero-enso.png',
        demoURL: 'https://enso.sonnet.io',
        isFavourite: true,
        date: '2018-12-06',
        content: `
        Ensō is a writing tool that helps you enter a state of flow.

        It does this by separating writing from editing and thus making it harder for you to edit yourself.

        Although the app is 100% private and we offer feature-parity between paid and free versions, we have a regular stream of new, paying users.

        The user base is small and diverse, including neurodivergent individuals, budding writers, those using Ensō to process and understand their emotions, and people trying to improve their language fluency.
        
        Personally, I'm just really happy that 1,000,000 written words later, I still come back to it every single morning.
`,
    },
]

/**
 * @type {import('./types').RemainingProject[]}
 */
const remainingProjects = [
    {
        title: 'Peng Lab',
        date: '2023-08-03',
        demoURL: 'https://www.thepenglab.org/',
        content: `
        Using OpenCV, Matlab to created CNNs, our team developed an audio based convultion neural network; 

        A predictive model to identify if rats were in REM, Awake, and Light Sleep. 

        I also worked on developing efficent piplines in projects Reactivation of Cells in the Mice with Engram-specific Deletion of the de novo DNA Methyltransferase Dnmt3a
        `,
        links: [{ type: 'article', url: 'https://drive.google.com/file/d/1XKiDd2PmV56sKWp85uzfitRkDVXQcwRo/view?usp=sharing' }],
    },
    {
        title: 'Columbia Analytica',
        date: '2024-07-03',
        demoURL: 'https://www.columbiapolicyinstitute.org/',
        content: `Aim to improve transparency of data between the students and the administration of Columbia University.
        
        We are still in the workss of developing the [website](https://www.columbiapolicyinstitute.org/); this is our progress so far
        `,
        links: [
            { type: 'source', url: 'https://github.com/Columbia-Policy-Institute/Columbia-Analytica' },
        ],
    },
    {
        title: 'Soul Scribe',
        date: '2024-01-20',
        demoURL: 'https://devpost.com/software/soul-scribe',
        content: `
        Aimed at reducing people's feelings of isolation and the stigma surrounding mental health. Often, individuals may feel compelled to hide their emotions, leading to increased loneliness and difficulty in seeking support. 
        
        SoulScribe is a platform where users can anonymously share their feelings with their community.`,
        links: [
            { type: 'source', url: 'https://github.com/hegstadjosh/devfest-24' },
        ],
    },
    {
        title: 'Medical Instruments Sterilization',
        date: '2022-06-16',
        demoURL: 'https://www.thepenglab.org/',
        content: `
        Sterization

        Awarded the [Engineering Award](https://www.archer.org/rise-scholars)
        `,
        links: [{ type: 'article', url: 'https://drive.google.com/file/d/1XKiDd2PmV56sKWp85uzfitRkDVXQcwRo/view?usp=sharing' }],
    },
    {
        title: 'Façade',
        date: '2016-04-24',
        demoURL: 'https://facade.photo',
        content: `
        Façade makes it easy to create studio lighting using your phone, computer or tablet. Launched in Spring 2016, also used in the Rainbotron™ (an art installation/im promptu photo studio made of furniture salvaged in Brick Lane). 


        Check out the [post launch article](https://goo.gl/JxpJQY) as well as the [gallery](https://500px.com/p/rafalpast/galleries/facade).
        `,
    },
    {
        title: 'Haiku',
        date: '2013-10-09',
        content: `
        A minimalist, collaborative presentation tool:
        
        1. Drag and drop a bunch of pictures or text into your browser
        2. Share a link
        3. Control the presentation from your phone.
        `,
        demoURL: 'https://github.com/paprikka/haiku',
    },
]

// TODO projects:
// - sulik
// - rainbotron
// - tommy
// - spiritual Volleyball
// - All Hands Meeting Simulator

// write a function to:
// - given a multiline string,
// - return the string without indentation:

const formatted = (str) =>
    str
        .split('\n')
        .map((line) => line.trim())
        .join('\n')
        .trim()

const formatProject = (project) => ({
    ...project,
    content: formatted(project.content),
    date: Array.isArray(project.date)
        ? project.date.map((d) => new Date(d))
        : new Date(project.date),
})

module.exports = {
    foo: 'bar',
    favourites: favourites.map(formatProject),
    remaining: [
        ...remainingProjects.sort((a, b) => {
            const dateA = new Date(Array.isArray(a.date) ? a.date[0] : a.date)
            const dateB = new Date(Array.isArray(b.date) ? b.date[0] : b.date)

            return dateB - dateA
        }),
    ].map(formatProject),
}
