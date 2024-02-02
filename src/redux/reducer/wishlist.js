import { createSlice } from "@reduxjs/toolkit";

export const wishSlice = createSlice({
    name:'wishlist',
    initialState:{
        list:[],
    },
    reducers:{
        addItemWishList:(state,{payload})=>{
            state.list=[...state.list,payload]
        },
        removeItemWishList:(state,{payload})=>{
            //Finding Index of the product
            const index = state.list.findIndex(
                (product) => product.id === payload.id
            );
            //Remove Product From the list
            state.list= [
                ...state.list.slice(0,index),
                ...state.list.slice(index + 1),
            ]
        },
    }
});


export const {addItemWishList,removeItemWishList}=wishSlice.actions;

export default wishSlice.reducer;