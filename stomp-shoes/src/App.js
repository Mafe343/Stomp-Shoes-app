import React, {Component, Fragment} from 'react';
import './App.css';
import BarraNavegar from './components/BarraNavegar';
import ItemListContainer from './components/ItemListContainer';

let name = "Bienvenido a Stomp Shoes"
  class App extends Component {
    render() {
      return(
        <Fragment>
          <BarraNavegar/>
          <ItemListContainer/>
          <h2 className="App">Hola <span>{name}</span></h2>
          {/* <Children>           
            <h1>Hola React</h1>        
          </Children> */}
        </Fragment>
      )
    }
  }

export default App;