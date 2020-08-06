import React from 'react'


const Quote = ({result}) => {

    if(Object.keys(result).length === 0) return null;

    console.log(result);

    return(
        <div>
            <p>El precio es: <span>{result.PRICE}</span></p>
            <p>Precio más alto del día: <span>{result.HIGHDAY}</span></p>
            <p>Precio más bajo del día: <span>{result.LOWDAY}</span></p>
            <p>Variación de las ultimas 24 horas: <span>{result.CHANGEPCT24HOUR}</span></p>
            <p>Última actualización: <span>{result.LASTUPDATE}</span></p>
        </div>

    );
}

export default Quote;