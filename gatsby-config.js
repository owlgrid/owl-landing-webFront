require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
    siteMetadata: {
        siteUrl: "https://owlgrid.com",
        title: "OwlGrid",
        titleTemplate: "OwlGrid – %s",
        description: "Create cloud applications in a minute.",
        url: "https://owlgrid.com",
        image: "/images/logo.png"
    },
    plugins: [
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/src/images`,
            },
        },
        {
            resolve: "gatsby-plugin-anchor-links",
            options: {
                offset: -80,
                duration: 500,
            }
        },
        "gatsby-plugin-image",
        "gatsby-plugin-netlify",
        {
            resolve: 'gatsby-plugin-robots-txt',
            options: {
                host: 'https://owlgrid.com',
                sitemap: 'https://owlgrid.com/sitemap.xml',
                policy: [{ userAgent: '*', allow: '/' }]
            }
        },
        "gatsby-plugin-react-helmet",
        "gatsby-plugin-sitemap",
        // {
        //     resolve: `gatsby-transformer-remark`,
        //     options: {
        //         plugins: [
        //             {
        //                 resolve: `gatsby-remark-images`,
        //                 options: {
        //                     maxWidth: 590,
        //                 },
        //             },
        //         ],
        //     },
        // },
        {
            resolve: "gatsby-plugin-manifest",
            options: {
                icon: "src/images/icon.png",
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: "OwlGrid",
                short_name: "OwlGrid",
                start_url: "/",
                background_color: "#111220",
                theme_color: "#111220",
                display: "standalone",
                icon: "static/images/icon.png",
                crossOrigin: `use-credentials`
            },
        },
    ],
};
