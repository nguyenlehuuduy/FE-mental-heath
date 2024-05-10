import { MyselfForCard } from "@/service/accountService";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface CurrentUser {
  user?: MyselfForCard;
}

const initialState: CurrentUser = {};

const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    getCurrentUser: (state, action) => {},
    getCurrentUserSuccess: (state, action: PayloadAction<MyselfForCard>) => {
      state.user = action.payload;
    },
  },
});

export const { getCurrentUser, getCurrentUserSuccess } = auth.actions;
export default auth.reducer;
