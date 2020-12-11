import Wishlist from "./Wishlist";

export const initialState = {
    basket: [],
    user : null,
    wishlist: []
};

export const getBasketTotal = (basket) => 
basket?.reduce((amount , item) => item.price + amount ,0)

export const actionTypes = {
    SET_USER: "SET_USER",
}

const reducer = (state ,action) => {
    console.log(action)
    switch (action.type) {
        case 'ADD_TO_BASKET':
            return{
                ...state,
                basket: [...state.basket ,action.item]
            };
            case 'ADD_TO_WISHLIST':
                const index2 =  state.basket.findIndex((basketItem) => basketItem.id === action.id);

                let newBasket2 =[...state.basket];

                if(index2 >= 0){
                    newBasket2.splice(index2,1)
                }else{
                    console.warn(`not possible removing ${action.id}`)
                }
                
            return{
                ...state,
                wishlist: [...state.wishlist ,action.item],
                basket: newBasket2
                
            };

            case 'ADD_TO_BASKET2':
                const index4 =  state.wishlist.findIndex((wishlistItem) => wishlistItem.id === action.id);
                let newWishList2 =[...state.wishlist];

                if(index4 >= 0){
                    newWishList2.splice(index4,1)
                }
            return{
                ...state,
                basket: [...state.basket ,action.item],
                wishlist: newWishList2
            };
            


                
            case 'REMOVE_FROM_WISHLIST':
                

              
                    
                const index3 =  state.wishlist.findIndex((wishlistItem) => wishlistItem.id === action.id);

                let newWishList =[...state.wishlist];

                if(index3 >= 0){
                    newWishList.splice(index3,1)
                }
                return{
                    ...state,
                    wishlist: newWishList
                }

                
            case 'REMOVE_FROM_BASKET':
                

              
                    
                    const index =  state.basket.findIndex((basketItem) => basketItem.id === action.id);

                    let newBasket =[...state.basket];

                    if(index >= 0){
                        newBasket.splice(index,1)
                    }else{
                        console.warn(`not possible removing ${action.id}`)
                    }
                    return{
                        ...state,
                        basket: newBasket
                    }

        case actionTypes.SET_USER:
            return{
                ...state,
                user: action.user,
            };
        default:
                return state;
    } 
}

export default reducer;