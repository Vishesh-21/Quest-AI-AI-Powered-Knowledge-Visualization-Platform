import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

// Define a type for the slice state
interface UserState {
  id: string;
  name: string;
  email: string;
  imageURL?: string;
  credits?: number;
  isCreditAvailable?: boolean;
  notes?: string[];
  createdAt?: string;
  updatedAt?: string;
}

interface UserSliceState {
  userData: UserState | null;
  loading: boolean;
  error: string | null;
}

// Define the initial state using that type
const initialState: UserSliceState = {
  userData: null,
  loading: true,
  error: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserData(state, action: PayloadAction<UserState>) {
      state.userData = action.payload;
      state.loading = false;
      state.error = null;
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
    setError(state, action: PayloadAction<string | null>) {
      state.error = action.payload;
    },
    resetUserData(state) {
      state.userData = null;
      state.loading = false;
      state.error = null;
    },
  },
});

export const { setUserData, setLoading, setError, resetUserData } =
  userSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectUserData = (state: RootState) => state.user.userData;

export default userSlice.reducer;
