import {createSlice } from "@reduxjs/toolkit";


const userSlice=createSlice({
    name:'users',
    initialState:[],
    reducers:{
        addUser(state,action){
            state.push(action.payload)
            // console.log(action.payload)
        },
        removeUser(state,action){
            state.splice(action.payload,1)
        },
        deleteUsers(state,action){
            return []
        },
    },

    // //extrareducer in case we have multiple slices change  in  multiple action coming from Note:-(Learn After ward whent the redux is clear)
    // extraReducers(buider){
    //     buider.addCase(userSlice.actions.deleteUsers,()=>{
    //         return []
    //     })
    // }
});

// console.log(userSlice.actions);

export default userSlice.reducer;


export const {addUser,removeUser,deleteUsers} = userSlice.actions

