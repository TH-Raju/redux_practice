import {
  decrement,
  increment,
  incrementbyamount,
} from "./redux/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hook";

function App() {
  const { count } = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();

  return (
    <div className="ml-3 ">
      <div className="flex items-center gap-5 mt-3">
        <button
          className="p-2 border border-sky-300"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <button
          className="p-2 border border-sky-300"
          onClick={() => dispatch(incrementbyamount(5))}
        >
          Increment 5
        </button>
        <div> {count}</div>
        <button
          className="p-2 border border-red-300"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

export default App;
