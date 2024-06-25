import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./redux/features/counterSlice";

function App() {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="flex items-center border border-gray-400 rounded-md bg-slate-50 p-5 ">
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
