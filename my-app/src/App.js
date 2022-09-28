import React from "react";

import { Route, Switch } from "react-router-dom";

import HeaderComponent from "./components/HeaderComponent";

import HomeComponent from "./components/HomeComponent";

import NotFoundComponent from "./components/NotFoundComponent";

import CartComponent from "./components/CartComponent";

import "./index.css";

function App() {
	return (
		<>
			<HeaderComponent />
			<Switch>
				<Route exact path="/" component={HomeComponent} />
				<Route exact path="/cart" component={CartComponent} />
				<Route component={NotFoundComponent} />
			</Switch>
		</>
	);
}

export default App;
