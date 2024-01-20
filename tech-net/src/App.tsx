import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./redux/store";
import { decrement, increment, incrementbyamount } from "./redux/features/counter/counterSlice";

function App() {
  const { count } = useSelector((state: RootState) => state.counter);
  const dispatch = useDispatch();

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
