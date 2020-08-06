import React from 'react'
import styled from 'styled-components';

const Result = styled.div`
    color: #fff;
    font-family: Arial, Helvetica, sans-serif;
`

const Info = styled.p`
    font-size: 18px;
    span{
        font-weight:bold;
    }
`

const Price = styled.p`
    font-size: 30px;
    span{
        font-weight:bold;
    }
`

const Quote = ({result}) => {

    if(Object.keys(result).length === 0) return null;

    console.log(result);

    return(
        <Result>
            <Price>El precio es: <span>{result.PRICE}</span></Price>
            <Info>Precio más alto del día: <span>{result.HIGHDAY}</span></Info>
            <Info>Precio más bajo del día: <span>{result.LOWDAY}</span></Info>
            <Info>Variación de las ultimas 24 horas: <span>{result.CHANGEPCT24HOUR}</span></Info>
            <Info>Última actualización: <span>{result.LASTUPDATE}</span></Info>
        </Result>

    );
}

export default Quote;