import "./App.css";
import { ForwardRef } from "./Chapters";
import Introduction from "./Chapters/Introduction/Introduction";
import Sidebar from "./Sidebar/Sidebar";

function App() {
  return (
    <div className="container">
      <div className="App">
        <div className="sidebar-container">
          <Sidebar />
        </div>
        <div className="chapters-container">
          <Introduction></Introduction>
          <ForwardRef />
        </div>
      </div>
    </div>
  );
}

export default App;
