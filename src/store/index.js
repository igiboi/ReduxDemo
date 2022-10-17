import { configureStore, createSlice} from "@reduxjs/toolkit";

const initialState = { counter: 0, showCounter: true}

const counterSlice = createSlice({
    name: 'counter', 
    initialState,
    reducers: {
        clear(state) {
            state.counter = 0;
        },
        toggle(state){
            state.showCounter = !state.showCounter;
        },
        increase(state, action) {
            state.counter = state.counter + action.payload;
        },
        increment(state) {
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },        

    }
}); 

const store = configureStore({
    reducer: counterSlice.reducer
});

export const counterActions = counterSlice.actions;

export default store;