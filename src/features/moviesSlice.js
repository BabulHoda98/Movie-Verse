//Redux Slice for movies 
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchTrendingMovies, fetchMovies } from "../api/tmdbApi";

export const getTrendingMovies=createAsyncThunk(
    "movies/trending",
    async(page=1)=>await fetchTrendingMovies(page)
);
export const searchMovies=createAsyncThunk(
    "movies/search",
    async(query)=>await fetchMovies(query)
);
const moviesSlice = createSlice({
    name:"movies",
    initialState:{trending:[],searchResults:[],totalPages:1,currentPage:1,query:"",status:"idle",},
     
    reducers:{
        setPage:(state,action)=>{
            state.query=action.payload;
        },
    },
    extraReducers:(builder)=>{
        builder

        .addCase(getTrendingMovies.pending,(state)=>{
            state.status="loadiing";    
        })
        .addCase(getTrendingMovies.fulfilled,(state,action)=>{
            state.trending=action.payload.results;
            state.status="succeeded";
            state.trending=action.payload;
        })
        .addCase(searchMovies.fulfilled,(state,action)=>{
            state.searchResults=action.payload;
        });
    },
});
export default moviesSlice.reducer;