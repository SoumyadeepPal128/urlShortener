// store/authThunks.js
import { login, setUrls } from "./authSlice";
import appwriteService from "../appwrite/config";

export const loginAndFetchUrls = (userData) => {
  return async (dispatch) => {
    // Step 1: store user
    dispatch(login(userData));

    // Step 2: fetch URLs
    try {
      const res = await appwriteService.getUrls();
      dispatch(setUrls(res.documents || []));
    } catch (err) {
      console.error("Error fetching URLs after login:", err);
    }
  };
};

export const refreshUrls=()=>{
    return async (dispatch)=>{
        try {
            const res=await appwriteService.getUrls();
            dispatch(setUrls(res.documents || []));
        } catch (error) {
            console.log(error.message);
            
        }
    }
}
