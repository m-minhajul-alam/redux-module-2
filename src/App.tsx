function App() {
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="flex items-center border border-gray-400 rounded-md bg-slate-50 p-5 ">
        <button className="px-3 py-2 text-xl text-white font-semibold bg-green-500 rounded-md">
          Increment
        </button>
        <h1 className="text-3xl font-bold mx-5">0</h1>
        <button className="px-3 py-2 text-xl text-white font-semibold bg-red-500 rounded-md">
          Decrement
        </button>
      </div>
    </div>
  );
}

export default App;
