import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { themeReducer } from "./feature/theme/ThemeSlice";
import { galleryReducer } from "./feature/gallery/GallerySlice";

const store = configureStore({
    reducer:{
        theme: themeReducer, 
        gallery: galleryReducer
    },
    middleware: (getDefaultMiddleware)=>{
        return [...getDefaultMiddleware(), logger]
    }
})

export default store;