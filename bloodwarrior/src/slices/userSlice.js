import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const userLogin=createAsyncThunk('loginuser',async(usercred,thunkApi)=>{

    let response=await axios.post('/user-api/login',usercred);
    let data=response.data;
    if(data.message==="login successful"){
           localStorage.setItem("token",data.payload)
    }
    if(data.message==="user doesn't exists" || data.message==="Invalid password"){
         return thunkApi.rejectWithValue(data)

    }
}) 
let userSlice=createSlice({
    name:"user",
    initialState:{},
    reducers:{},
    extraReducers:{}



})
//export action creators
export const {}=userSlice.actions;
//export reducer
export default userSlice.reducer;