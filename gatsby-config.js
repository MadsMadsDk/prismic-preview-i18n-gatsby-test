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
        passContextKeys: ["isProduction"],
        pages: [
          {
            type: "Index",
            match: "/",
            langs: ["da-dk"],
            component: require.resolve("./src/templates/home.jsx"),
          },
          {
            type: "Index",
            match: "/en",
            langs: ["en-gb"],
            component: require.resolve("./src/templates/home.jsx"),
          },
          {
            type: "Page",
            match: "/:lang?/:uid",
            langs: ["da-dk", "en-gb"],
            component: require.resolve("./src/templates/page.jsx"),
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
