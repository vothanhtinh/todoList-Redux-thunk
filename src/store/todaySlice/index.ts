import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

interface Today {
  todayId: string;
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
  reducers: {
    createToday: (state, action) => {
      state.todays.push(action.payload);
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getTodays.fulfilled, (state, action) => {
        console.log(action.payload);
        state.todays = action.payload;
      })
      .addCase(addToday.fulfilled, (state, action) => {
        state.todays.push(action.payload);
      })
      .addCase(updatedToday.fulfilled, (state, action) => {
        const updatedToday = action.payload;
        const index = state.todays.findIndex(
          (today) => today.todayId === updatedToday.todayId
        );
        if (index !== -1) {
          state.todays[index] = updatedToday;
        }
      })
      .addCase(deleteToday.fulfilled, (state, action) => {
        const { todayId } = action.payload;
        state.todays = state.todays.filter(
          (today) => today.todayId !== todayId
        );
      })
      .addCase(changeStatusToday.fulfilled, (state, action) => {
        const { todayId, title, description } = action.payload;
        const index = state.todays.findIndex(
          (today) => today.todayId === todayId
        );
        if (index !== -1) {
          state.todays[index] = { todayId, title, description, status: 1 };
        }
      });
  },
});

export const getTodays = createAsyncThunk("getToday", async () => {
  const res = await fetch(
    "https://64aeb9cac85640541d4d9a77.mockapi.io/api/todos/todo",
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const data = await res.json();
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

export const updatedToday = createAsyncThunk(
  "addToday/updateToday",
  async (updateToday: Today) => {
    let getData = await getTodayByTodayId(updateToday.todayId);
    const id = getData[0].id;
    const res = await fetch(
      `https://64aeb9cac85640541d4d9a77.mockapi.io/api/todos/todo/${id}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
        method: "PUT",
        body: JSON.stringify(updateToday),
      }
    );
    const data = await res.json();

    return data;
  }
);

export const deleteToday = createAsyncThunk(
  "today/deleteToday",
  async (deleteToday: Today) => {
    let getData = await getTodayByTodayId(deleteToday.todayId);
    const id = getData[0].id;
    const res = await fetch(
      `https://64aeb9cac85640541d4d9a77.mockapi.io/api/todos/todo/${id}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
        method: "DELETE",
      }
    );
    const data = await res.json();

    return data;
  }
);

export const changeStatusToday = createAsyncThunk(
  "today/changeStatusToday",
  async (updateToday: Today) => {
    let getData = await getTodayByTodayId(updateToday.todayId);
    const id = getData[0].id;
    const res = await fetch(
      `https://64aeb9cac85640541d4d9a77.mockapi.io/api/todos/todo/${id}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
        method: "PUT",
        body: JSON.stringify(updateToday),
      }
    );
    const data = await res.json();
    console.log(data, "dataupdateToday");

    return data;
  }
);
const getTodayByTodayId = async (todayId: string) => {
  const res = await fetch(
    `https://64aeb9cac85640541d4d9a77.mockapi.io/api/todos/todo/?todayId=${todayId}`,
    {
      headers: {
        "Content-Type": "application/json",
      },
      method: "GET",
    }
  );
  const data = await res.json();

  return data;
};

export default todaySlice.reducer;
