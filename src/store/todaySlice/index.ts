import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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

const todaySlice = createSlice({
  name: "today",
  initialState,
  reducers: {
    addToday: (state, action: PayloadAction<Today>) => {
      state.todays.push(action.payload);
    },
    updateToday: (state, action: PayloadAction<Today>) => {
      const { id, title, description, status } = action.payload;
      const index = state.todays.findIndex((today) => today.id === id);
      if (index !== -1) {
        state.todays[index] = { id, title, description, status };
      }
    },
    deleteToday: (state, action: PayloadAction<Today>) => {
      const { id } = action.payload;
      state.todays = state.todays.filter((today) => today.id !== id);
    },
  },
});

export const { addToday, updateToday, deleteToday } = todaySlice.actions;
export default todaySlice.reducer;
