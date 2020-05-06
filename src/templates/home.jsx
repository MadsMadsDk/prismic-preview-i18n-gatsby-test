import React from "react"
import { graphql } from "gatsby"
import Layout from "components/Layout"
import Content from "components/Content"

function Home({ data: { prismic }, ...props }) {
  return (
    <Layout>
      <Content content={prismic.index.page_title} />
      <Content content={prismic.index.content} />
    </Layout>
  )
}

export default Home

Home.defaultProps = {}

Home.propTypes = {}

export const query = graphql`
  query HomeQuery($lang: String!, $uid: String!) {
    prismic {
      index(lang: $lang, uid: $uid) {
        content
        page_title
      }
    }
  }
`
