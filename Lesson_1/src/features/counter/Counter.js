import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset, incrementByAmount } from './counterSlice';
import { useState } from 'react';

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  const [incrementAmout, setincrementAmount] = useState(0);
  const addValue = Number(incrementAmout) || 0;
  const resetAll = () => {
    setincrementAmount(0);
    dispatch(reset());
  };
  return (
    <section>
      <p>{count}</p>
      <div>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
        <button onClick={() => dispatch(reset())}>reset</button>

        <input
          type="text"
          value={incrementAmout}
          onChange={(e) => setincrementAmount(e.target.value)}
        />
        <div>
          <button onClick={() => dispatch(incrementByAmount(addValue))}>
            Add amount
          </button>
          <button onClick={resetAll}>ResetAll</button>
        </div>
      </div>
    </section>
  );
};

export default Counter;
