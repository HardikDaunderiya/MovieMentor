import { createSlice } from "@reduxjs/toolkit";

const MovieSlice = createSlice({
    name: "movies",
    initialState:{
        playMovie:null,
        trailerVideo:null,
        popularMovie:null,
        topRatedMovie:null,
        upcomingMovie:null,
    },
    reducers:{
        addPlayMovie:(state,action)=>{
            state.playMovie= action.payload;
        },
        addTrailerVideo:(state,action)=>{
            state.trailerVideo=action.payload;
        },
        addPopularMovie:(state,action)=>{
            state.popularMovie=action.payload;
        },
        addTopRatedMovie:(state,action)=>{
            state.topRatedMovie=action.payload;
        },
        addUpcomingMovie:(state,action)=>{
            state.upcomingMovie=action.payload;
        },

    },
})

export const {addPlayMovie,addTrailerVideo, addPopularMovie,addTopRatedMovie, addUpcomingMovie} =MovieSlice.actions;
export default MovieSlice.reducer;