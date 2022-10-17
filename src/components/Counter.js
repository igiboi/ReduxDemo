import { useSelector, useDispatch } from 'react-redux';

import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch();
 const counter =  useSelector(state => state.counter);

 const incrementHandler = () => {
  dispatch({ type: 'increment'})
 }

 const increaseHanlder = () => {
  dispatch({ type: 'increase', amount: 10})
 }

 const decrementHandler = () => {
  dispatch({ type: 'decrement'})
 }
 
 const clearHandler = () => {
  dispatch({ type: 'clear'});
 }
  
  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHanlder}>Increase by 10</button>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={clearHandler}>Clear</button>

      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
