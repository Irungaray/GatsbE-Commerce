import React, { useState, useContext } from 'react';

import { SEO, Stars } from './';

import priceFormat from '../utils/priceFormat';
import { CartContext } from '../context';

import {
	Tag,
	SizeButton,
	QtyButton,
	QtySelect,
	SizeSelect,
	Button,
	StyledProductDetail,
} from '../styles/components';

export default function ProductDetail({ unit_amount, sku: id, product: {name, images, description, metadata} }) {
	const [size, setSize] = useState(3);
	const [qty, setQty] = useState(1);

	const formatedPrice = priceFormat(unit_amount * qty);
	const { cart, addToCart } = useContext(CartContext);

	const handleSubmit  = () => {
		addToCart({unit_amount, sku: id, name, images, metadata, quantity: qty});
	};

	// console.log(cart);

	return (
		<StyledProductDetail>
			<SEO title={name} />
			<img src={images} alt={name} />

			<div>
				<Tag>Popular</Tag>
				<h2>{name}</h2>
				<b>USD {formatedPrice}</b>

				<Stars />

				{metadata.wear && <h3>Color: Blue</h3>}

				<small>{description}</small>

				{metadata.wear && (
					<SizeSelect selected={size}>
						<SizeButton onClick={() => setSize(1)}>XS</SizeButton>
						<SizeButton onClick={() => setSize(2)}>S</SizeButton>
						<SizeButton onClick={() => setSize(3)}>M</SizeButton>
						<SizeButton onClick={() => setSize(4)}>L</SizeButton>
						<SizeButton onClick={() => setSize(5)}>XL</SizeButton>
					</SizeSelect>
				)}

				<p>Quantity:</p>
				<QtySelect>
					<button
						onClick={() => (qty > 1 ? setQty(qty-1) : null )}
					>
              -
					</button>

					<input type="text" disabled value={qty} />

					<button
						onClick={() => setQty(qty + 1)}
					>
              +
					</button>
				</QtySelect>

				<Button onClick={handleSubmit}>Add to Cart</Button>
			</div>
		</StyledProductDetail>
	);
}
