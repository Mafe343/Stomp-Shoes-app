// import logo from './logo.svg';
import './App.css';
import BarraNavegar from './components/BarraNavegar';
// import Children from './components/Children';
// import State from './components/State';
// import UseState from './components/UseState';
import ItemCount from './components/ItemCount';
import Item from './components/Item';

function App() {
  return (
    <div className="App">
      <BarraNavegar/>
      <ItemCount/>
      <Item/>
      {/* <header className="App-header">
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
      </header> */}
      {/* <Children>
        <h1>Hola React</h1>
      </Children>
      <State/>
      <UseState/> */}
      <ItemCount/>
    </div>
  );
}

export default App;
