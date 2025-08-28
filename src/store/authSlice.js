import {createSlice} from "@reduxjs/toolkit"
import appwriteService from "../appwrite/config"
const initialState={
    status:false,
    userData:null,
    documents:[],
}

const authSlice=createSlice({
    name:"auth",
    initialState,
    reducers:{
        login:(state,action)=>{
            state.status=true;
            state.userData=action.payload;
        },
        logout:(state)=>{
            state.status=false;
            state.userData=null;
            state.documents=[];
        },
        setUrls:(state,action)=>{
            state.documents=action.payload;
        }
    }
})

export const {login,logout,setUrls}=authSlice.actions

export default authSlice.reducer