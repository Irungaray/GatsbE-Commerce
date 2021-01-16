import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

export default function Image({ name }) {
  const data = useStaticQuery(
    graphql`
      query GET_IMAGE {
        icon: file(relativePath: { eq: "smoothIcon.png" }) {
          childImageSharp {
            fluid(maxWidth: 1500) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )

  return <Img fluid={data[name].childImageSharp.fluid} />
}
