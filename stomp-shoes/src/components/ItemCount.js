import { Component } from "react"

class ItemCount extends Component {

    constructor(props) {
        super(props)
        this.state = {counter: 0}
    };

    restar() {
        this.setState({counter: this.state.counter - 1})
    }

    sumar() {
        this.setState({counter: this.state.counter + 1})
    }
    
    render() {
        return(
            <div>
                <h2>{this.state.counter}</h2>
                <button onClick={this.sumar.bind(this)}>+</button>
                <button onClick={this.restar.bind(this)}>-</button>
                {/* <button>Añadir al carrito</button> */}
            </div>
        )
    }
}

export default ItemCount;