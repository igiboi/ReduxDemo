import { useSelector, useDispatch } from 'react-redux';

import { counterActions } from '../store/value';
import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch();
 const counter =  useSelector(state => state.counter.value);
 const show = useSelector(state => state.counter.showCounter);

 const incrementHandler = () => {
  dispatch(counterActions.increment())
 }

 const increaseHanlder = () => {
  dispatch(counterActions.increase(10))
 }

 const decrementHandler = () => {
  dispatch(counterActions.decrement())
 }
 
 const clearHandler = () => {
  dispatch(counterActions.clear());
 }
  
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
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
