import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Inbox {
  id: string;
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

const inboxSlice = createSlice({
  name: "inbox",
  initialState,
  reducers: {
    addInbox: (state, action: PayloadAction<Inbox>) => {
      state.inboxs.push(action.payload);
    },
    updateInbox: (state, action: PayloadAction<Inbox>) => {
      const { id, title, description, status } = action.payload;
      const index = state.inboxs.findIndex((inbox) => inbox.id === id);
      if (index !== -1) {
        state.inboxs[index] = { id, title, description, status };
      }
    },

    changeStatusInbox: (state, action: PayloadAction<Inbox>) => {
      const { id, title, description } = action.payload;
      const index = state.inboxs.findIndex((inbox) => inbox.id === id);
      if (index !== -1) {
        state.inboxs[index] = { id, title, description, status: 1 };
      }
    },

    deleteInbox: (state, action: PayloadAction<Inbox>) => {
      const { id } = action.payload;
      state.inboxs = state.inboxs.filter((inbox) => inbox.id !== id);
    },
  },
});

export const { addInbox, updateInbox, deleteInbox, changeStatusInbox } =
  inboxSlice.actions;
export default inboxSlice.reducer;
