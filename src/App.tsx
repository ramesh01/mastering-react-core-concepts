import "./App.css";
import { ForwardRef } from "./Chapters";
import PersonOne from "./Chapters/Hoc/PersonOne";
import PersonTwo from "./Chapters/Hoc/PersonTwo";
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
          <PersonOne/>
          <PersonTwo />
        </div>
      </div>
    </div>
  );
}

export default App;
