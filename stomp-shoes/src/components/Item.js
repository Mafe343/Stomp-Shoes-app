import React from 'react'

function Item(){
    const zapatos = [
        {
            title: "Fashion",
            reference: "Blanco y negro",
            price: "55.000 COP",
            id: 1,
        },

        {
            title: "Alexander",
            reference: "Blanco, negro y multicolor",
            price: "55.000 COP",
            id: 2,
        },

        {
            title: "Skechers",
            reference: "Multicolor",
            price: "55.000 COP",
            id: 3,
        },

        {
            title: "Raptor Vaquita",
            reference: "Blancon con negro",
            price: "60.000 COP",
            id: 4,
        }
    ];

    return (
        <div>
            {
                zapatos.map((zapato, index)=>{ return <p id={index}>{zapato.title},  {zapato.reference}, {zapato.price}</p>})
            }
        </div>
    )
}

export default Item