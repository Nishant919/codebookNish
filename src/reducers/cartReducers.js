export const cartReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {

        case "ADDED_TO_CART":
            return { ...state, cartList: payload.updatedCartList, total: payload.newTotal }

        case "REMOVE_FROM_CART":
            return { ...state, cartList: payload.updatedCartList, total: payload.newTotal }

        case "CLEAR_CART":
            return { ...state, cartList: payload.cartList, total: payload.total }

        default:
            throw new Error("No Cae Found!");
    }
}