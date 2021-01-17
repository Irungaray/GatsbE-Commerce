import React from 'react';
import { Link } from 'gatsby';

import { SEO } from '../components';
import { Button, Purchase } from '../styles/components';

export default function thanks() {
	return (
		<div>
			<SEO title="Not so great purchase!" />

			<Purchase>
				<h2>PURCHASE CANCELLED!!!.</h2>
				<p>We're sorry that you can't buy some of our AWESOME videocards.</p>
				<p>Anyway, hope to see you again!</p>
				<span rol="img" aria-label="emoji">
          😎
				</span>

				<Link to="/">
					<Button>GO BACK</Button>
				</Link>

				<img src="https://i.postimg.cc/d08Hz1wF/icon.png" alt="ELEPHANTs" />
			</Purchase>
		</div>
	);
}
