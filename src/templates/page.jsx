import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import get from "lodash-es/get"
import Content from "components/Content"
import Layout from "components/Layout"

function Page({ data: { prismic }, ...props }) {
  const sharpImage = get(prismic, "page.imageSharp.childImageSharp.desktop")
  return (
    <Layout>
      <Content content={prismic.page.page_title} />
      <Content content={prismic.page.content} />
      {sharpImage ? (
        <Img fixed={sharpImage} />
      ) : (
        <img src={get(prismic, "page.image.url")} alt="" />
      )}
    </Layout>
  )
}

export default Page

Page.defaultProps = {}

Page.propTypes = {}

export const query = graphql`
  query PageQuery($lang: String!, $uid: String!) {
    prismic {
      page(lang: $lang, uid: $uid) {
        content
        page_title
        image
        imageSharp {
          childImageSharp {
            id
            desktop: fixed(width: 1920) {
              ...GatsbyImageSharpFixed
            }
            mobile: fixed(width: 900) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
`
