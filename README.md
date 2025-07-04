## Redux Photo Gallery

A React application that showcases a photo gallery powered by Redux Toolkit. It features asynchronous data fetching, middleware logging, and integration with Redux DevTools for efficient state management and debugging.

## Features

- Asynchronous data fetching using `createAsyncThunk`
- State management with Redux Toolkit's `createSlice`
- Middleware integration with `redux-logger` for action and state change logging
- Redux DevTools support for enhanced debugging
- Responsive UI displaying photos in a grid layout

## Installation

1. **Clone the repository:**

   ```bash
   git clone git@github.com:prashankulathunga/REDUX-PHOTO-GALLERY.git
   cd REDUX-PHOTO-GALLERY
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

## Usage

1. **Start the development server:**

   ```bash
   npm run dev
   ```

2. Open your browser and navigate to `http://localhost:3000` to view the application.

## Project Structure

```
├── public/
├── src/
│   ├── components/
│   ├── redux/
│   │   ├── Store.jsx
│   │   └── feature/
│   │       ├── gallery/
│   │       │   └── GallerySlice.jsx
│   │       └── theme/
│   │           └── ThemeSlice.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── index.html
├── vite.config.js
├── eslint.config.js
├── package.json
├── package-lock.json
└── README.md"""
```

## Key Technologies

- **React**: Front-end library for building user interfaces.
- **Redux Toolkit**: Simplifies Redux state management with less boilerplate.
- **createAsyncThunk**: Handles asynchronous operations like API calls.
- **redux-logger**: Middleware for logging dispatched actions and state changes.
- **Redux DevTools**: Browser extension for inspecting Redux state and actions.

## API Integration

The application fetches photos from the [Picsum Photos API]([https://jsonplaceholder.typicode.com/photos](https://picsum.photos/v2/list?page=2&limit=100)).

**Example API call using `createAsyncThunk`:**

```javascript
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchImages = createAsyncThunk('gallery/fetchImages', async(page = 1)=>{
    const result = await axios.get(`https://picsum.photos/v2/list?limit=12&page=${page}`);
    return result.data
})
```

## Store Configuration

The Redux store is configured with `redux-logger` middleware and Redux DevTools extension:

```javascript
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
```

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License.
