import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  post: [],
};

export const mangePosts = createSlice({
  name: "mangePost",
  initialState,
  reducers: {
    addPost: (state, action) => {
      return {
        ...state,
        post: [
          ...state.post,
          { title: action.payload.Title, content: action.payload.Content },
        ],
      };
    },
  },
});

export const { addPost } = mangePosts.actions;
export default mangePosts.reducer;
