import React, {useState} from 'react';

function UseState() {
    const [Zapatilla, setZapatilla] = useState('Nike')
    function handlerShoes(){
        setZapatilla('Adidas')
    }
    return(
        <div>
            <button onClick={handlerShoes}></button>
            {console.log(Zapatilla)}
        </div>
    )
}

export default UseState;