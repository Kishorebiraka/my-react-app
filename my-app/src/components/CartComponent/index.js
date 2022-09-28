import React from "react";

import "./index.css";

import { CartState } from "../../context/Context";

import { useState, useEffect } from "react";

import SingleProduct from "../SingleProduct";

const CartComponent = () => {
	const { state } = CartState();

	const { cartItemsList } = state;

	const [total, setTotal] = useState();

	useEffect(() => {
		setTotal(
			cartItemsList.reduce(
				(acc, curr) => acc + Number(curr.price) * curr.qty,
				0
			)
		);
	}, [cartItemsList]);

	return (
		<div className="cart-items-container">
			{cartItemsList.map((each) => (
				<SingleProduct key={each.id} products={each} />
			))}
			<div className="subtotal">
				<h1>SubTotal</h1>
				<span>{total}</span>
				<button
					type="button"
					className="add-to-cart-button"
					disabled={cartItemsList.length === 0}
				>
					Proceed to checkout
				</button>
			</div>
		</div>
	);
};

export default CartComponent;
