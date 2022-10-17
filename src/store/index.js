import { configureStore } from "@reduxjs/toolkit";

const initialState = { counter: 0, showCounter: true}
 
const counterReducer = (state = initialState, action) => {
        switch(action.type) {
            case "increment":
                return {
                    counter: state.counter + 1,
                    showCounter: state.showCounter
                };
            case "increase": 
                return {
                    counter: state.counter + action.amount,
                    showCounter: state.showCounter
                };
            case "decrement":
                return {
                    counter: state.counter - 1,
                    showCounter: state.showCounter
                }
            case "clear": 
                return {
                    counter: 0,
                }
            default:
           return state; 
        }

};
 
const store = configureStore({ reducer: counterReducer });
 
export default store;