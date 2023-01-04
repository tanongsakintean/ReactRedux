import { configureStore } from "@reduxjs/toolkit";
import mangePosts from "./mangePosts.jsx";

export const store = configureStore({
  reducer: {
    posts: mangePosts,
  },
});
