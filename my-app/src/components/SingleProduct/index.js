import React from "react";

import { CartState } from "../../context/Context";

import "./index.css";

const SingleProduct = (props) => {
	const { products } = props;
	const { fastDelievery, image, inStock, name, price, ratings, id } = products;

	const { state, dispatch } = CartState();

	const { cartItemsList } = state;

	const removeItems = {
		type: "REMOVE_FROM_CART",
		payload: products,
	};

	const removeFromButtonClicked = () => {
		dispatch(removeItems);
	};

	const addItems = {
		type: "ADD_TO_CART",
		payload: products,
	};

	const addToCartButtonClicked = () => {
		dispatch(addItems);
	};

	return (
		<div className="card-container">
			<img src={image} alt={name} className="item-img" />
			<h1>{name}</h1>
			<p>Rs.{price}/-</p>
			<h3>instock: {inStock}</h3>
			<p>fastDelievery: {fastDelievery}</p>
			<p>ratings: {ratings}</p>

			{cartItemsList.some((each) => each.id === id) ? (
				<button onClick={removeFromButtonClicked} className="remove-from-cart">
					Remove From Cart
				</button>
			) : (
				<button
					className={!inStock ? "out-of-stock " : "add-to-cart-button"}
					onClick={addToCartButtonClicked}
					disabled={!inStock}
				>
					{!inStock ? "Out Of Stock" : "Add to Cart"}
				</button>
			)}
		</div>
	);
};

export default SingleProduct;
