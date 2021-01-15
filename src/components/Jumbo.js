import React from 'react';

import { StyledJumbo } from '../styles/components';

import { Image } from './';

export default function Jumbo({ description }) {
	return (
		<StyledJumbo>
			<div>
				<h2>JUMBO STORE</h2>
				<small>{description}</small>
			</div>

			<img src="https://i.postimg.cc/R0RtVFz9/icon.png" alt="ELEPHANTs"/>
			{/* <Image name="icon" /> */}
		</StyledJumbo>
	);
}
