export const cartReducer = (state, action) => {
	switch (action.type) {
		case "ADD_TO_CART":
			return {
				...state,
				cartItemsList: [...state.cartItemsList, { ...action.payload, qty: 1 }],
			};
		case "REMOVE_FROM_CART":
			return {
				...state,

				cartItemsList: state.cartItemsList.filter(
					(each) => each.id !== action.payload.id
				),
			};
		default:
			return state;
	}
};
