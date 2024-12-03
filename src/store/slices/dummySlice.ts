import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface DummyState {
  value: string;
}

const initialState: DummyState = {
  value: "",
};

const dummySlice = createSlice({
  name: "dummy",
  initialState,
  reducers: {
    setValue(state, action: PayloadAction<string>) {
      state.value = action.payload;
    },
  },
});

export const { setValue } = dummySlice.actions;
export const dummyReducer = dummySlice.reducer;
