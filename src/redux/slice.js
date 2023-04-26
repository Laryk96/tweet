import { createSlice } from "@reduxjs/toolkit";
import { editTweet, fetchTweets } from "./operations";

const tweetsSlice = createSlice({
  name: "tweets",
  initialState: {
    users: [],
    page: 1,
    isLoading: false,
  },
  reducers: {
    changePage(state, action) {
      state.page = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTweets.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchTweets.fulfilled, (state, action) => {
        state.page === 1
          ? (state.users = action.payload)
          : (state.users = [...state.users, ...action.payload]);
        state.isLoading = false;
      })
      .addCase(editTweet.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(editTweet.fulfilled, (state, action) => {
        state.isLoading = false;
        state.users = state.users.map((user) => {
          if (user.id === action.payload.id) {
            return {
              ...user,
              followers: action.payload.followers,
              isFollowed: action.payload.isFollowed,
            };
          }

          return user;
        });
      });
  },
});

export const { changePage } = tweetsSlice.actions;
export const tweetsReducer = tweetsSlice.reducer;
