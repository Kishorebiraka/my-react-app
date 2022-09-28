// import {Component} from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faStar } from '@fortawesome/free-solid-svg-icons'
// import './index.css'

// const itemsList = [
//     {
//         id: 1,
//         image: "https://m.media-amazon.com/images/I/81Ke5qtC6oL._AC_UL320_.jpg",
//         description: 'realme narzo 50A (Oxygen Blue , 4GB RAM + 64 GB Storage) Helio G85 Processor | 6000 mAh Battery',
//         rating: 5,
//         price: 9999,
//         alt_name: 'narzo50A'

//     },
//     {
//         id: 2,
//         image: "https://m.media-amazon.com/images/I/71edjA10hZL._AC_UL320_.jpg",
//         description: 'Mi Step Out 12 L Mini Backpack (Small Size, Black, Water Repellant)',
//         rating: 4,
//         price: 349,
//         alt_name: 'mi-bag'

//     },
//     {
//         id: 3,
//         image: "https://m.media-amazon.com/images/I/51HBom8xz7L._AC_UL320_.jpg",
//         description: 'boAt Airdopes 141 True Wireless Earbuds with 42H Playtime, Beast™ Mode(Low Latency Upto 80ms) for Gaming, ENx™ Tech, ASAP™ Charge, IWP™, IPX4 Water Resistance, Smooth Touch Controls(Bold Black)',
//         rating: 4,
//         price: 1499,
//         alt_name: 'boat-earpods'

//     },
//     {
//         id: 4,
//         image: "https://m.media-amazon.com/images/I/71fvR6NCIFL._AC_UL320_.jpg",
//         description: 'HP 15 11th Gen Intel Core i5 Processor 15.6 inches(39.6cm) FHD Laptop (8GB/512GB SSD +32GB Intel Optane/Windows 10 Home/MS Office/Jet Black/1.69 Kg), 15s-fq2071TU',
//         rating: 5,
//         price: 54999,
//         alt_name: 'hp-laptop'

//     },
//     {
//         id: 5,
//         image: "https://m.media-amazon.com/images/I/61w674PbGRL._AC_UL320_.jpg",
//         description: 'Samsung Galaxy Watch 3 45mm Bluetooth (Mystic Black),SM-R840NZKAINS',
//         rating: 4,
//         price: 16999,
//         alt_name: 'hp-laptop'

//     },
//     {
//         id: 6,
//         image: "https://m.media-amazon.com/images/I/719sr35E59L._AC_UL320_.jpg",
//         description: 'Centrino Mens 2105 Formal Shoes',
//         rating: 3,
//         price: 519,
//         alt_name: 'centrino-shoe'

//     },
//     {
//         id: 7,
//         image: "https://m.media-amazon.com/images/I/51baYUd2F2L._AC_UL320_.jpg",
//         description: 'Parker Vector Standard Fountain Pen Chrome Trim Fine Nib with 3 Free Ink Cart | Body Color - Orange | Ink Color - Blue',
//         rating: 4,
//         price: 309,
//         alt_name: 'parker-pen'

//     },
//     {
//         id: 8,
//         image: "https://m.media-amazon.com/images/I/51SICavnBKL._AC_UL320_.jpg",
//         description: 'India Today English Jan 03 , 2022 (Anniversary Special) Paperback Bunko – 25 January 2021',
//         rating: 4,
//         price: 75,
//         alt_name: 'india-book'

//     },
//     {
//         id: 9,
//         image: "https://images-eu.ssl-images-amazon.com/images/I/51EC0iAzeCL._SY300_SX300_QL70_FMwebp_.jpg",
//         description: 'Amazon Basics 23.8 Inch IPS Monitor with Borderless Design (1920 x 1080 Pixels),16.7 M Colors, with inbuilt Speakers, HDMI and VGA connectivity',
//         rating: 4,
//         price: 9999,
//         alt_name: 'amazon-monitor'

//     },

// ]

import React from "react";

import SingleProduct from "../SingleProduct";

import { CartState } from "../../context/Context";

import "./index.css";

const HomeComponent = () => {
	// fastDelievery: true
	// id: "26e34381-0ada-48ed-b8fa-8e04d8684734"
	// image:
	// "https://loremflickr.com/640/480/fashion"
	// inStock: 6
	// name: "Towels"
	// price: "266.00"
	// ratings:3

	const { state } = CartState();

	const { products } = state;

	return (
		<div className="items-container">
			{products.map((each) => (
				<SingleProduct key={each.id} products={each} />
			))}
		</div>
	);
};

export default HomeComponent;
