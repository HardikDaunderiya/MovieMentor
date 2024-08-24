import { createSlice } from "@reduxjs/toolkit";

const MovieSlice = createSlice({
    name: "movies",
    initialState:{
        playMovie:null,
        trailerVideo:null,
    },
    reducers:{
        addPlayMovie:(state,action)=>{
            state.playMovie= action.payload;
        },
        addTrailerVideo:(state,action)=>{
            state.trailerVideo=action.payload;
        },
    },
})

export const {addPlayMovie,addTrailerVideo} =MovieSlice.actions;
export default MovieSlice.reducer;