import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    items:[],
}

const basketSlice = createSlice({
    name: "basket",
    initialState,
    reducers: {
        removeFromBasket:(state,action)=>{
            const index = state.items.findIndex((basketItem)=>basketItem.id == action.payload.id)
            let newBasket = [...state.items]
            if (index >= 0 ){
                newBasket.splice(index,1)
            }else{
                console.warn("not in basket")
            }
            state.items = newBasket;
        },
        addToBasket:(state,action)=>{
            state.items = [...state.items,action.payload];
        },
    }
});

export const {addToBasket,removeFromBasket} = basketSlice.actions
export const selectItems = (state) => state.basket.items
export const selectTotal = (state) => state.basket.items.reduce((total,item))
export default basketSlice.reducer