import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

interface Inbox {
  inboxId: string;
  description: string;
  title: string;
  status: number;
}

interface InboxState {
  inboxs: Inbox[];
}

const initialState: InboxState = {
  inboxs: [],
};

export const InboxSlice = createSlice({
  name: "Inbox",
  initialState,
  reducers: {
    createInbox: (state, action) => {
      state.inboxs.push(action.payload);
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getInboxs.fulfilled, (state, action) => {
        console.log(action.payload);
        state.inboxs = action.payload;
      })
      .addCase(addInbox.fulfilled, (state, action) => {
        state.inboxs.push(action.payload);
      })
      .addCase(updatedInbox.fulfilled, (state, action) => {
        const updatedInbox = action.payload;
        const index = state.inboxs.findIndex(
          (inbox) => inbox.inboxId === updatedInbox.inboxId
        );
        if (index !== -1) {
          state.inboxs[index] = updatedInbox;
        }
      })
      .addCase(deleteInbox.fulfilled, (state, action) => {
        const { inboxId } = action.payload;
        state.inboxs = state.inboxs.filter(
          (inbox) => inbox.inboxId !== inboxId
        );
      })
      .addCase(changeStatusInbox.fulfilled, (state, action) => {
        const { inboxId, title, description } = action.payload;
        const index = state.inboxs.findIndex(
          (inbox) => inbox.inboxId === inboxId
        );
        if (index !== -1) {
          state.inboxs[index] = { inboxId, title, description, status: 1 };
        }
      });
  },
});

export const getInboxs = createAsyncThunk("getInbox", async () => {
  const res = await fetch(
    "https://64aeb9cac85640541d4d9a77.mockapi.io/api/todos/inbox",
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const data = await res.json();
  return data;
});

export const addInbox = createAsyncThunk(
  "addInbox",
  async (newInbox: Inbox) => {
    const res = await fetch(
      "https://64aeb9cac85640541d4d9a77.mockapi.io/api/todos/inbox",
      {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(newInbox),
      }
    );
    const data = await res.json();
    return data;
  }
);

export const updatedInbox = createAsyncThunk(
  "addInbox/updateInbox",
  async (updateInbox: Inbox) => {
    let getData = await getInboxByInboxId(updateInbox.inboxId);
    const id = getData[0].id;
    const res = await fetch(
      `https://64aeb9cac85640541d4d9a77.mockapi.io/api/todos/inbox/${id}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
        method: "PUT",
        body: JSON.stringify(updateInbox),
      }
    );
    const data = await res.json();

    return data;
  }
);

export const deleteInbox = createAsyncThunk(
  "Inbox/deleteInbox",
  async (deleteInbox: Inbox) => {
    let getData = await getInboxByInboxId(deleteInbox.inboxId);
    const id = getData[0].id;
    const res = await fetch(
      `https://64aeb9cac85640541d4d9a77.mockapi.io/api/todos/inbox/${id}`,
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

export const changeStatusInbox = createAsyncThunk(
  "Inbox/changeStatusInbox",
  async (updateInbox: Inbox) => {
    let getData = await getInboxByInboxId(updateInbox.inboxId);
    const id = getData[0].id;
    const res = await fetch(
      `https://64aeb9cac85640541d4d9a77.mockapi.io/api/todos/inbox/${id}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
        method: "PUT",
        body: JSON.stringify(updateInbox),
      }
    );
    const data = await res.json();
    console.log(data, "dataupdateInbox");

    return data;
  }
);
const getInboxByInboxId = async (InboxId: string) => {
  const res = await fetch(
    `https://64aeb9cac85640541d4d9a77.mockapi.io/api/todos/inbox/?inboxId=${InboxId}`,
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

export default InboxSlice.reducer;
