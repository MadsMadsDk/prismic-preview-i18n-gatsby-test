const path = require("path");
const fs = require("fs");

exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions

  if (typeof page.context.isProduction === 'undefined') {
    const newPage = {
      ...page,
      context: {
        ...page.context,
        isProduction: process.env.GATSBY_ACTIVE_ENV === "production", // allows for reviews
      },
    }

    deletePage(page)
    createPage(newPage)
  }
}

/* Toggle module resolution */
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, "src"), "node_modules"],
    },
  });
};


/* Create .cache dir if none found | to prevent annoying prismic bug */
const dir = "./.cache/caches/gatsby-source-prismic-graphql"
exports.onPreBootstrap = () => {
  if (!fs.existsSync(dir)){
      fs.mkdirSync(dir)
  }
}
