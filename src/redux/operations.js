import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://644828e350c25337443a0705.mockapi.io/contacts";

// used
// axios.defaults.baseURL = "https://6431cc53d4518cfb0e694cf2.mockapi.io/contacts";

export const fetchTweets = createAsyncThunk(
  "users/fetchTweets",
  async (page = 1, thunkAPI) => {
    try {
      const { data } = await axios.get("/users", {
        params: {
          page,
          limit: 3,
        },
      });

      return data;
    } catch (e) {
      thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const editTweet = createAsyncThunk(
  "users/editUser",
  async ({ id, followers, isFollowed }, { rejectWithValue }) => {
    try {
      const { data } = await axios.put(`/users/${id}`, {
        followers,
        isFollowed,
      });

      return data;
    } catch (e) {
      rejectWithValue(e.message);
    }
  }
);
