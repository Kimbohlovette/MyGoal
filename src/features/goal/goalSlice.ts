import { createSlice } from '@reduxjs/toolkit';

export const goalSlice = createSlice({
  name: 'goal',
  initialState: {},
  reducers: {
    addGoal: (state, action) => {
      console.log(state, action.payload);
    },
  },
});

export default goalSlice.reducer;
export const { addGoal } = goalSlice.actions;
