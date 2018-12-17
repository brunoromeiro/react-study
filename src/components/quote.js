import React from 'react'

const Quote = ({ quote, author}) => (
    <div>
        <h1>Frase do Dia</h1>
        {quote &&
            <div>
                <p>Autor: { author }</p>
                <p>Frase : { quote }</p>
            </div>

        }
    </div>
)

export default Quote