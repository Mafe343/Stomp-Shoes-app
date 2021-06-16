import { Component } from "react"

class state extends Component {
    constructor(props){
        super(props)
        this.state = {
            name : "Mafe",
            edad: "Mafe",
        }
    }

    handlerValue = (e) => {
        this.setState(
            {
                name: e.target.value,
                edad: '21'
            },
            () => {
                console.log(this.state.name);
            }
            );
    };

    render() {
        return (
            <div>
                {/* {this.state.name} */}
                <input placeholder="Ingresa tu nombre" onChange={this.handlerValue}/>
            </div>
        );
    }
}

export default state ;