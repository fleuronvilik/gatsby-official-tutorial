import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"


export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default function About({ data }) {
  return (
    <Layout>
      <h1>About {data.site.siteMetadata.title}</h1>
      <p>We are the only site running on your computer dedicated to showing the best photos and videos of pandas eating lots of foods.</p>
    </Layout>
  )
}
