import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, reset } from './Redux/Action';
import './App.css'

function App() {
  const count = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <>
      <h2>React Redur Counter </h2>
      <p>{count}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </>
  )
}

export default App
