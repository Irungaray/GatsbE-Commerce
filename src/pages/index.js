import React from "react"
import { graphql } from "gatsby"

import { SEO, Jumbo, Product } from "../components"

export const query = graphql`
  query GET_DATA {
    allSite {
      edges {
        node {
          siteMetadata {
            description
          }
        }
      }
    }
    allStripePrice {
      edges {
        node {
          id
          unit_amount
          product {
            name
            images
            description
            metadata {
              wear
            }
          }
        }
      }
    }
  }
`

const IndexPage = ({ data }) => {
  // console.log(data);

  return (
    <>
      <Jumbo
        description={data.allSite.edges[0].node.siteMetadata.description}
      />
      <SEO title="Home" />
      <Product products={data.allStripePrice.edges} />
    </>
  )
}

export default IndexPage
