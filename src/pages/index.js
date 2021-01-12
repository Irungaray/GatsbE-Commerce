import React from "react"
import { Link, graphql } from "gatsby"

import { SEO } from "../components"
import { Jumbo } from "../components"

export const query = graphql`
  query GET_DESCRIPTION {
    allSite {
      edges {
        node {
          siteMetadata {
            description
          }
        }
      }
    }
  }
`

const IndexPage = ({ data }) => {
  return (
    <>
      <Jumbo
        description={data.allSite.edges[0].node.siteMetadata.description}
      />
      <SEO title="Home" />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <Link to="/thanks/">Go to Thanks.</Link>
      <Link to="/sorry/">Go to Sorry .</Link>
    </>
  )
}

export default IndexPage
