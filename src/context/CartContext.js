import { createContext, useContext, useReducer } from "react"
import { cartReducer } from "../reducers/cartReducers";

const cartInitialState = {
    cartList: [],
    total: 0
}

const CartContext = createContext(cartInitialState);

export const CartProvider = ({ children }) => {

    const [state, dispatch] = useReducer(cartReducer, cartInitialState);

    function handleAddtoCart(product) {
        const updatedCartList = [...state.cartList, product];
        const newTotal = state.total + product.price;
        dispatch({
            type: "ADDED_TO_CART",
            payload: {
                updatedCartList: updatedCartList,
                newTotal: newTotal
            }
        })
    }

    function handleRemoveFromCart(product) {
        const updatedCartList = state.cartList.filter(current => current.id !== product.id);
        const newTotal = state.total - product.price;
        dispatch({
            type: "REMOVE_FROM_CART",
            payload: {
                updatedCartList: updatedCartList,
                newTotal: newTotal
            }
        })
    }

    function handleClearCart() {
        dispatch({
            type: "CLEAR_CART",
            payload: {
                cartList: [],
                total: 0
            }
        })
    }

    const value = {
        cartList: state.cartList,
        total: state.total,
        handleAddtoCart,
        handleRemoveFromCart,
        handleClearCart
    }

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => {
    return useContext(CartContext);
}


