import React from 'react';
import { Link } from 'gatsby';

import { SEO } from '../components';
import { Jumbo } from '../components';

const IndexPage = () => (
	<>
		<Jumbo />
		<SEO title="Home" />
		<h1>Hi people</h1>
		<p>Welcome to your new Gatsby site.</p>
		<p>Now go build something great.</p>
		<Link to="/thanks/">Go to Thanks.</Link>
		<Link to="/sorry/">Go to Sorry .</Link>
	</>
);

export default IndexPage;
