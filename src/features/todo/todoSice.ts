import { createSlice } from '@reduxjs/toolkit';

export const todoSlice = createSlice({
  name: 'todo',
  initialState: {},
  reducers: {
    addTodo: (state, action) => {
      console.log(state, action.payload);
    },
    updateTodo: (state, action) => {
      console.log(state, action.payload);
    },
  },
});

export default todoSlice.reducer;
export const { addTodo, updateTodo } = todoSlice.actions;
