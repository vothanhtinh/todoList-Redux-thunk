import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

interface Today {
  id: string;
  description: string;
  title: string;
  status: number;
}

interface TodayState {
  todays: Today[];
}

const initialState: TodayState = {
  todays: [],
};

export const todaySlice = createSlice({
  name: "today",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getTodays.fulfilled, (state, action) => {
        state.todays = action.payload;
      })
      .addCase(addToday.fulfilled, (state, action) => {
        state.todays.push(action.payload);
      });
  },
});

export const getTodays = createAsyncThunk("getToday", async () => {
  const res = await fetch(
    "https://64aeb9cac85640541d4d9a77.mockapi.io/api/todos/todo"
  );
  const data = await res.json();
  console.log(data);
  return data;
});

export const addToday = createAsyncThunk(
  "addToday",
  async (newToday: Today) => {
    const res = await fetch(
      "https://64aeb9cac85640541d4d9a77.mockapi.io/api/todos/todo",
      {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(newToday),
      }
    );
    const data = await res.json();
    return data;
  }
);
