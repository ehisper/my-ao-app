import logo from './logo.svg';
import './App.css';
import Arweave from "arweave";
import {main} from './ao/demo/data_provider'


function App() {
  const handleClick = async () => {
    main()
  };
  return (
    <div className="App">
      <header className="App-header">
        <button style={{ width: "80px", height: '40px' }} onClick={handleClick }>Connect</button>
      </header> 
    </div>
  );
}

export default App;
