import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Dropdown, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

import { CartState } from "../../context/Context";

import "./index.css";

const HeaderComponent = () => {
	const { state } = CartState();

	const { cartItemsList } = state;
	return (
		<div className="navbar-bg-container">
			<Link to="/">
				<img
					src="https://pngimg.com/uploads/amazon/amazon_PNG21.png"
					className="amazon-logo"
					alt="amazon logo"
				/>
			</Link>
			<div className="search-bar-container">
				<input type="text" className="search-bar" />
				<button type="button" className="search-button">
					<FontAwesomeIcon icon={faSearch} className="cart-icon" />
				</button>
			</div>
			<div className="cart-icons-container">
				<div className="cart-container">
					<Link to="/">
						<p>Home</p>
					</Link>
				</div>

				<Dropdown alignright>
					<Dropdown.Toggle variant="success">
						<Link to="/cart">
							<FaShoppingCart color="white" fontSize="25px" />
						</Link>
						<Badge style={{ margin: 5 }}>{cartItemsList.length}</Badge>
					</Dropdown.Toggle>

					<Dropdown.Menu style={{ minWidth: 370 }}>
						{cartItemsList.length !== 0 ? (
							<span style={{ padding: 10 }}>
								Cart has {cartItemsList.length} items
							</span>
						) : (
							<span style={{ padding: 10 }}>Cart is Empty!</span>
						)}
					</Dropdown.Menu>
				</Dropdown>
			</div>
		</div>
	);
};

export default HeaderComponent;
