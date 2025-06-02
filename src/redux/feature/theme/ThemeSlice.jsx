import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
    name: "theme",
    initialState:{
        darkMode: (localStorage.getItem("theme") === 'dark') ? false : true
    },
    reducers:{
        themeChange: (state, action)=>{
            state.darkMode = !state.darkMode,
            localStorage.setItem("theme", state.darkMode ? "light" : "dark");
        }
    }
})


export const themeReducer = themeSlice.reducer;
export const {themeChange} = themeSlice.actions;