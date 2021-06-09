import logo from './logo.svg';
import './App.css';
import CartWidget from './components/CartWidget';
import BarraNavegar from './components/BarraNavegar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
      <BarraNavegar/>
      <ItemListContainer/>
      <CartWidget/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>Hello World</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
