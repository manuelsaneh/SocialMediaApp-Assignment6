import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {PostsType} from '../../types';

interface PostsState {
  posts: PostsType[];
}

const initialState: PostsState = {
  posts: [],
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addPost(state, action: PayloadAction<PostsType>) {
      state.posts.push(action.payload);
    },
    editPost(
      state,
      action: PayloadAction<{id: string; title: string; body: string}>,
    ) {
      const postIndex = state.posts.findIndex(
        post => post.id === action.payload.id,
      );
      if (postIndex !== -1) {
        state.posts[postIndex].title = action.payload.title;
        state.posts[postIndex].body = action.payload.title;
      }
    },
    deletePost(state, action: PayloadAction<string>) {
      state.posts = state.posts.filter(post => post.id !== action.payload);
    },
  },
});

export const {addPost, editPost, deletePost} = postsSlice.actions;

export default postsSlice.reducer;
