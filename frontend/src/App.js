import './App.css';
import avocado from './avocado.png';

function App() {
  return (
    <div className="App">
      <img src={avocado} alt="" width="100px"/>
      <h1>Know your avocado!</h1>
      <input type="file" accept="image/*" capture="environment"></input>
    </div>
  );
}

export default App;
