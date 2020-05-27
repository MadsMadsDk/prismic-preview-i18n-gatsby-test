import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Content from "components/Content"
import Layout from "components/Layout"

function Page({
  data: {
    prismic: { page },
  },
  ...props
}) {
  if (!page) return null
  return (
    <Layout>
      <Content content={page.page_title} />
      <Content content={page.content} />
      {page.imageSharp ? (
        <Img fixed={page.imageSharp.childImageSharp.main} />
      ) : (
        <img src={page.image.url} alt={page.image.alt} />
      )}
    </Layout>
  )
}

export default Page

Page.defaultProps = {}

Page.propTypes = {}

export const query = graphql`
  query PageQuery($lang: String!, $uid: String!, $isProduction: Boolean!) {
    prismic {
      page(lang: $lang, uid: $uid) {
        content
        page_title
        image
        imageSharp @include(if: $isProduction) {
          childImageSharp {
            id
            main: fixed(width: 1200) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
`
