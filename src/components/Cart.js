import React, { useContext } from 'react';
import { Link } from 'gatsby';

import { CartContext } from '../context';
import priceFormat from '../utils/priceFormat';

import { Button, StyledCart } from '../styles/components';

export default function Cart() {
	const { cart } = useContext(CartContext);

	console.log(cart);

	return (
		<StyledCart>
			<h2>Cart</h2>
			<table>
				<tbody>
					<tr>
						<th>Products</th>
						<th>Price</th>
						<th>Quantity</th>
						<th>Total</th>
					</tr>

					{cart.map(cards => (
						<tr key={cards.sku}>
							<td>
								<img src={cards.images} alt={cards.name} />
								{cards.name}
							</td>
							<td>USD {priceFormat(cards.unit_amount)}</td>
							<td>{cards.quantity}</td>
							<td>USD {priceFormat(cards.unit_amount * cards.quantity)}</td>
						</tr>
					))}
				</tbody>
			</table>

			<nav>
				<div>
					<h3>Subtotal:</h3>
					<small>Total</small>
				</div>

				<div>
					<Link to='/'>
						<Button type='outline'>Go Back</Button>
					</Link>

					<Button>Buy</Button>
				</div>
			</nav>
		</StyledCart>
	);
}
