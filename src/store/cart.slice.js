const { createSlice } = require("@reduxjs/toolkit");


const cartSlice = createSlice({
    name:"cart",
    initialState:[],
    reducers :{
        add(state){
            state.push()
        },
        remove(state,action){
            
        }
    }
});


export const {add,remove} = cartSlice.actions;
export default createSlice.reducer;