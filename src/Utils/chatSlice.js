import { createSlice } from "@reduxjs/toolkit";
import { LIVE_CHAT_LIMIT } from "./constants";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    messages: [],
  },
  reducers: {
    addMessage: (state, action) => {
      if (state.messages?.length === LIVE_CHAT_LIMIT) {
        state.messages.splice(0, 1);
      }
      state.messages.push(action.payload);
    },
  },
});

export const { addMessage } = chatSlice.actions;
export default chatSlice.reducer;
