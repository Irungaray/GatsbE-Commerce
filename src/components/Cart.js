import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'gatsby';

import { CartContext } from '../context';
import priceFormat from '../utils/priceFormat';

import { Button, StyledCart } from '../styles/components';


export default function Cart() {
	const { cart } = useContext(CartContext);
	const [total, setTotal] = useState(0);

	// console.log(cart);

	const getTotal = () => {
		setTotal(
			cart.reduce((acc, current) => acc + current.unit_amount * current.quantity, 0)
		);
	};

	useEffect(() => {
		getTotal();
	}, []);

	return (
		<StyledCart>
			<h2>Cart</h2>
			<table>
				<tbody>
					<tr>
						<th>Products</th>
						<th>Price</th>
						<th>Quantity</th>
						<th>Subtotal</th>
					</tr>

					{cart.map(cards => (
						<tr key={cards.id}>
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
					<h3>Total:</h3>
					<small>USD {priceFormat(total)}</small>
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
