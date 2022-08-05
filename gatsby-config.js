module.exports = {
    siteMetadata: {
        title: `Gatsby Typescript Tailwind`,
        description: `An example config of Gatsby + TypeScript + Tailwind CSS`,
        author: `@gatsbyjs`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        'gatsby-plugin-postcss',
        {
            resolve: 'gatsby-plugin-purgecss',
            options: {
                tailwind: true,
                purgeOnly: ['src/css/index.css'],
            },
        },
        {
            resolve: 'gatsby-plugin-anchor-links',
            options: {
                duration: 500,
            },
        },
        `gatsby-plugin-typescript`,
        `gatsby-plugin-image`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `src`,
                path: `${__dirname}/src`,
            },
        },
        {
            resolve: 'gatsby-plugin-eslint',
            options: {
                test: /\.ts$|\.tsx$/,
                exclude: /(node_modules|.cache|public)/,
                stages: ['develop', 'build-javascript'],
                options: {
                    emitWarning: true,
                    failOnError: false,
                },
            },
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
};
