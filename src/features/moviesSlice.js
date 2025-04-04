//Redux Slice for movies 

import { createAsyncThunk } from "@reduxjs/toolkit";

export const getTrendingMovies=createAsyncThunk(
    "movies/trending",
    async()=>await fetchTrendingMovies()
);
export const searchMovies=createAsyncThunk(
    "movies/search",
    async(query)=>await fetchMovies(query)
);
const movieSlice=createSlice({
    name:"movies",
    initialState:{trending:[],searchResults:[],status:"idle"},
    extraReducers:(builder)=>{
        builder
        .addCase(getTrendingMovies.pending,(state)=>{
            state.status="loadiing";    
        })
        .addCase(getTrendingMovies.fulfilled,(state,action)=>{
            state.status="succeeded";
            state.trending=action.payload;
        })
        .addCase(searchMovies.rejected,(state)=>{
            state.searchResults=action.payload;
            state.status="failed";
        });
    },
});
export default movieSlice.reducer;