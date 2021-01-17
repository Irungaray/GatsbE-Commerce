import React from 'react';
import { Link } from 'gatsby';

import { SEO } from '../components';
import { Button, Purchase } from '../styles/components';

export default function thanks() {
	return (
		<div>
			<SEO title="Great purchase!" />

			<Purchase>
				<h2>SUCCESSFULL PURCHASE!!1!!</h2>
				<p>THANKS FOR TRUSTING US.</p>
				<p>HOPE YOU ENJOY YOUR ELEPHANT VIDEOCARD!1!!!</p>
				<span role="img" aria-label="emoji">
          😎
				</span>

				<Link to="/">
					<Button>GO BACK</Button>
				</Link>
				<img src="https://i.postimg.cc/d08Hz1wF/icon.png" alt="Thanks Logo"/>
			</Purchase>
		</div>
	);
}
