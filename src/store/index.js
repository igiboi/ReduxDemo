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

/// Log In, Log out slice

const initialAuthState = {
    isAuthenticated: false
};

const authSlice = createSlice({
    name:'authentication',
    initialState: initialAuthState,
    reducers: {
        login(state) {
            state.isAuthenticated = true;
        },
        logout(state) {
            state.isAuthenticated = false;
        }, 
    }
})

const store = configureStore({
    reducer: { counter: counterSlice.reducer, auth: authSlice.reducer},
});

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

export default store;