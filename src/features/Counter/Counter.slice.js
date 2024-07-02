import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    count: 0,
};

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        decrement: (state) => {
            state.count -= 1;
        },
        increment: (state) => {
            state.count += 1;
        },
        incrementByAmount: (state, action) => {
            state.count += action.payload;
        },
        reset: (state) => {
            state.count = 0;
        },
    },
});

export const { decrement, increment, incrementByAmount, reset } = counterSlice.actions;

export default counterSlice.reducer;
