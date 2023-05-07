import './App.css';
import { ForwardRef } from './Chapters';
import Introduction from './Chapters/Introduction/Introduction';

function App() {
  return (
    <div className="container mx-auto m-4">
      <div className="App">
        <Introduction></Introduction>
        <ForwardRef />
      </div>
    </div>
  );
}

export default App;
