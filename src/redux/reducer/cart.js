import { createSlice} from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name:"cart",
    initialState:{
        list:[],
    },
    reducers: {
        addItem:(state,{ payload }) => {
            state.list = [...state.list,{...payload,count : 1}];
        },
        removeItem:(state,{payload})=>{
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
        modifyItem:(state,{payload})=>{
            //Finding Index of the Product
            const index = state.list.findIndex(
                (product) => product.id === payload.id
            );
            //Updating the state
            state.list= [
                ...state.list.slice(0,index),
            { ...state.list[index],count:payload.count },
                ...state.list.slice(index + 1),
            ]

    },
},
});

export const { addItem,removeItem,modifyItem}= cartSlice.actions;
export default cartSlice.reducer;