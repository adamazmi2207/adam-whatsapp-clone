import './App.css';
import Sidebar from './components/Sidebar';
import Chat from './components/Chat'

function App() {
  return (
    <div className="app">
      {/* <h1>Whatsapp Clone App</h1> */}
      <div className="app__body">
        {/* Sidebar */}
        <Sidebar />
        {/* Chat */}
        <Chat />
      </div>
    </div>
  );
}

export default App;
