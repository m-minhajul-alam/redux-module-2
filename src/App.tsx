import {
  decrement,
  increment,
  incrementByValue,
} from "./redux/features/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hook";

function App() {
  const { count } = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();

  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="flex items-center border border-gray-400 rounded-md bg-slate-50 p-5 ">
        <button
          onClick={() => dispatch(incrementByValue(5))}
          className="px-3 py-2 text-xl text-white font-semibold bg-green-500 rounded-md mr-3"
          aria-label="Increment value"
        >
          Increment 5
        </button>
        <button
          onClick={() => dispatch(increment())}
          className="px-3 py-2 text-xl text-white font-semibold bg-green-500 rounded-md"
          aria-label="Increment value"
        >
          Increment
        </button>
        <h1 className="text-3xl font-bold mx-5">{count}</h1>
        <button
          onClick={() => dispatch(decrement())}
          className="px-3 py-2 text-xl text-white font-semibold bg-red-500 rounded-md"
          aria-label="Decrement value"
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

export default App;
