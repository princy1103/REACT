import { increment, decrement, incrementByAmount } from "./counterSlice";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

const Counter = () => {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  const [amount, setAmount] = useState(0)
  return (
    <>
      <h1>Redux Toolkit counter</h1>
      <p>value:{count}</p>
      <button onClick={()=>dispatch(increment())}>Increment</button>
      <button onClick={()=>dispatch(decrement())}>Decrement</button>
      <input type="number" value={amount} onChange={(e)=>setAmount(Number(e.target.value))} />
      <button onClick={()=>dispatch(incrementByAmount(amount))}>Add Amount</button>
    </>
  )
}

export default Counter