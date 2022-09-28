// const products = [...Array(20)].map(() => ({
//     id: faker.datatype.uuid(),
//     name: faker.commerce.product(),
//     price: faker.commerce.price(),
//     image: faker.image.fashion(),
//     inStock: faker.helpers.arrayElement([0, 3, 5, 6, 7]),
//     fastDelievery: faker.datatype.boolean(),
//     ratings: faker.helpers.arrayElement([1, 2, 3, 4, 5]),
// }));

import React from "react";

import { faker } from "@faker-js/faker";

import { createContext, useReducer, useContext } from "react";

import { cartReducer } from "./Reducers";

const Cart = createContext();
faker.seed(100);
const Context = ({ children }) => {
	const products = [...Array(20)].map(() => ({
		id: faker.datatype.uuid(),
		name: faker.commerce.product(),
		price: faker.commerce.price(),
		image: faker.image.fashion(),
		inStock: faker.helpers.arrayElement([0, 3, 5, 6, 7]),
		fastDelievery: faker.datatype.boolean(),
		ratings: faker.helpers.arrayElement([1, 2, 3, 4, 5]),
	}));

	const [state, dispatch] = useReducer(cartReducer, {
		products: products,
		cartItemsList: [],
	});

	return <Cart.Provider value={{ state, dispatch }}>{children}</Cart.Provider>;
};

export default Context;

export const CartState = () => {
	return useContext(Cart);
};
