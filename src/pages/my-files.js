import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"

export default function MyFiles({ data }) {
  return (
    <Layout>
      <div>
        <h1>My Site's Files</h1>
        <table>
          <thead>
            <tr>
              <td>relativePath</td>
              <td>prettySize</td>
              <td>extension</td>
              <td>birthTime</td>
            </tr>
          </thead>
          <tbody>
            {data.allFile.edges
              .map(({ node }) => (
                <tr key={node.relativePath}>
                  <td>{node.relativePath}</td>
                  <td>{node.prettySize}</td>
                  <td>{node.extension}</td>
                  <td>{node.birthTime}</td>                  
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </Layout>
  )
}

export const query = graphql`
  {
    allFile {
      edges {
        node {
          relativePath
          birthTime(fromNow: true)
          prettySize
          extension
        }
      }
    }
  }
`