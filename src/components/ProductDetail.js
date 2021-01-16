import React, { useState, useContext } from "react"
import { Link } from "gatsby"

import { SEO, Stars } from "./"

import priceFormat from "../utils/priceFormat"
import { CartContext } from "../context"

import {
  Tag,
  SizeButton,
  QtySelect,
  SizeSelect,
  Button,
  StyledProductDetail,
} from "../styles/components"

export default function ProductDetail({
  id,
  product: { name, images, description, metadata },
  unit_amount,
}) {
  const [size, setSize] = useState(3)
  let [qty, setQty] = useState(1)

  const formatedPrice = priceFormat(unit_amount * qty)
  const { addToCart } = useContext(CartContext)

  const handleSubmit = () => {
    addToCart({ id, name, images, metadata, quantity: qty, unit_amount })
  }

  // fix this
  // const handleSubmit  = () => {
  // 	if (id.indexOf(cart[0])) {
  // 		console.log('Id in cart');
  // 		cart.quantity = qty++;
  // 	} else {
  // 		return;
  // 	}
  // };

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
          <button onClick={() => (qty > 1 ? setQty(qty - 1) : null)}>-</button>

          <input type="text" disabled value={qty} />

          <button onClick={() => setQty(qty + 1)}>+</button>
        </QtySelect>

        <Button onClick={handleSubmit}>ADD TO CART!</Button>
        <div> </div>
        <Link to="/">
          <Button>KEEP BUYIN'!</Button>
        </Link>
      </div>
    </StyledProductDetail>
  )
}
