import { configureStore, createSlice} from "@reduxjs/toolkit";


const initialCounterState = { value: 0, showCounter: true }

const counterSlice = createSlice({
    name: 'value', 
    initialState: initialCounterState,
    reducers: {
        clear(state) {
            state.value = 0;
        },
        toggle(state){
            state.showCounter = !state.showCounter;
        },
        increase(state, action) {
            state.value = state.value + action.payload;
        },
        increment(state) {
            state.value++;
        },
        decrement(state) {
            state.value--;
        },        

    }
}); 

export const counterActions = counterSlice.actions;

export default counterSlice.reducer;