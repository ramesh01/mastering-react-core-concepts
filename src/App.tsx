import "./App.css";
import useCounter from "./Chapters/CustomHook/useCounter";
import Sidebar from "./Sidebar/Sidebar";

function App() {
  const {increment, decrement, reset, count} = useCounter(0);
  return (
    
    <div className="container">
      <div className="App">
        <div className="sidebar-container">
          <Sidebar />
        </div>
        <div className="chapters-container">
          <p>Count: {count}</p>
          <button  type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" onClick={increment}>Increment</button>
          <button  type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" onClick={decrement}>decrement</button>
          <button  type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" onClick={reset}>reset</button>
        </div>
      </div>
    </div>
  );
}

export default App;
