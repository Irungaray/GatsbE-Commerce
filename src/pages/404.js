import React from 'react';
import { Link } from 'gatsby';

import SEO from '../components/seo';

import { Button, Purchase } from '../styles/components';

const NotFoundPage = () => (
	<>
		<SEO title="404: Not found" />
		<Purchase>
			<h2>NOT FOUND</h2>

			<img src="https://i.postimg.cc/d08Hz1wF/icon.png" alt="Thanks Logo"/>

			<p>You just hit a route that doesn&#39;t exist... the sadness.</p>

			<p>But you can...</p>

			<Link to="/">
				<Button>GO BACK AND START BUYIN'!!</Button>
			</Link>

		</Purchase>
	</>
);

export default NotFoundPage;
