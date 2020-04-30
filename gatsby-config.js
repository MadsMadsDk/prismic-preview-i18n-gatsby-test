require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Mostly Code`,
    description: `Websites that work wonders`,
    author: `Mads Sastakauskas Østergaard`,
    siteUrl: `https://www.mostlycode.dk`,
    lang: `da-dk`,
    logo: `/logo-square.svg`,
    facebook: `MostlyCode`,
    twitter: `CodeMostly`,
    metaTitlePrefix: ``,
    metaTitleAppendix: `Mostly Code`,
  },
  plugins: [
    {
      resolve: "gatsby-source-prismic-graphql",
      options: {
        repositoryName: "mostlypreview", // (required)
        accessToken: `${process.env.API_KEY}`, // (optional)
        defaultLang: "da-dk",
        langs: ["da-dk", "en-gb"],
        path: "/preview", // (optional, default: /preview)
        previews: true, // (optional, default: false)
        shortenUrlLangs: true,
        pages: [
          {
            type: "Index",
            match: "/:lang?",
            component: require.resolve("./src/templates/home.jsx"),
            langs: ["da-dk", "en-gb"],
          },
          {
            type: "Page",
            match: "/:lang/:uid",
            component: require.resolve("./src/templates/page.jsx"),
            langs: ["en-gb"],
          },
          {
            type: "Page",
            match: "/:uid",
            component: require.resolve("./src/templates/page.jsx"),
            langs: ["da-dk"],
          },
        ],
        sharpKeys: [
          /image|photo|picture/, // (default)
        ],
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-offline`,
  ],
}
