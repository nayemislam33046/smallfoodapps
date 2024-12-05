export const reducer = (state,action)=>{
    switch (action.type) {
        case "ADDCART":
            return {
                ...state,
                cart:[...state.cart,{...action.payload}]
            }
        case "REMOVECART":
            return {
                ...state,
                cart:state.cart.filter((c)=>c.id!==action.payload)
            }      
        default:
            return state;
    }
}