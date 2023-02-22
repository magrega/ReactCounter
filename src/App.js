import Counter from './components/Counter';
import './App.css';

function App() {
  return (
    <div className="App">
      <Counter counter={0}/>
      <Counter counter={10}/>
      <Counter counter={100}/>
    </div>
  );
}

export default App;
