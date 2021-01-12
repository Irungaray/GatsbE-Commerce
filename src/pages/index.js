import React from 'react';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';

import { SEO } from '../components';
import { Jumbo } from '../components';

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
`;

const Button = styled.button`
  width: 8rem;
  background-color: #98ca3f;
  border: none;
  border-radius: 10px;
  color: ${props => props.color};
  &:hover {
    transform: scale(1.4);
  }
`;

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

			<Button color="gray">Buy</Button>
		</>
	);
};

export default IndexPage;
