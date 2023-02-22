import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";



// Action

let jwtToken = localStorage.getItem('token');
export const fetchPost = createAsyncThunk('fetch', async () => {
  const res = await fetch("https://test-react.agiletech.vn/posts",{
    headers:{
          "Authorization":"Bearer " + jwtToken
        }
  });
  return res.json();
});



 const postSlice = createSlice({
  name:"post",
  initialState:{
    isLoading: false,
    data:null,
    isError: false,
    
  },
  extraReducers:(builder) => {
    builder.addCase(fetchPost.pending, (state,action) => {
      state.isLoading = true;

    });
    builder.addCase(fetchPost.fulfilled, (state,action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchPost.rejected, (state,action) => {
      console.log("Error", action.payload);
      state.isError = true;
    });
  },
});



export default postSlice.reducer;

 