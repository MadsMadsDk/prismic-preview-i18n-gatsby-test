import React from "react"
import { graphql } from "gatsby"
import Content from "components/Content"
import Layout from "components/Layout"

function Page({ data: { prismic }, ...props }) {
  return (
    <Layout>
      <Content content={prismic.page.page_title} />
      <Content content={prismic.page.content} />
    </Layout>
  )
}

export default Page

Page.defaultProps = {}

Page.propTypes = {}

export const pageQuery = graphql`
  query PageQuery($lang: String!, $uid: String!) {
    prismic {
      page(lang: $lang, uid: $uid) {
        content
        page_title
      }
    }
  }
`
