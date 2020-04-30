/**
 * ES5 compatible Link Resolver for Prismic.
 * Docs: https://prismic.io/docs/reactjs/beyond-the-api/link-resolving
 */

const dict = {
  baseUrl: {
    "da-dk": "",
    "en-gb": "/en",
  },
}

const linkResolver = (doc) => {
  // The "doc" object contains three things: lang, type and uid
  // The "dict" is an object that enables us to look up parts of the url, based on the type.
  // The "baseUrl" is the i18n root url.

  const baseUrl = dict.baseUrl[doc.lang] // Is either empty string or 'en'

  let urlParts = ""

  switch (doc.type) {
    // Add a URL pattern for each doc.type that should result in a page.
    // E.g. if blog posts should be accessible on /blog
    case "page":
      urlParts = `${doc.uid}`
      break
    case "index":
      break
    default:
      urlParts = `${doc.uid}`
  }

  return `${baseUrl === "" ? "/" : `${baseUrl}/`}${urlParts}`
}

module.exports = { linkResolver }
