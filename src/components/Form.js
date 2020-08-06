import React, {useState, useEffect} from "react";
import styled from "styled-components";
import Error from './Error';
import useCoin from "../hooks/useCoin";
import useCrypto from "../hooks/useCrypto";
import axios from 'axios';

const Button = styled.input`
  margin-top: 20px;
  font-weight: bold;
  font-size: 20px;
  padding: 10px;
  background-color: #66a2fe;
  border: none;
  width: 100%;
  border-radius: 10px;
  color: #fff;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #326ac0;
    cursor: pointer;
  }
`;

const Form = ({setCurr, setCryptocurr}) => {

  const [listcript, setListcript] = useState([]);

  const [error, setError] = useState(false);

  const COINS = [ 
    {code: 'USD', name: 'USD Dolar'},
    {code: 'ARG', name: 'Peso Argentino'},
    {code: 'MXN', name: 'Peso Mexicano'},
    {code: 'EUR', name: 'Euro'}
  ]

  const [coin, SelectCoin] = useCoin('Elige tu moneda', '', COINS );
  
  const [crypto, SelectCrypto] = useCrypto('Elige tu Criptomoneda', '', listcript);

  useEffect(() => {
    const consultAPI = async () => {
      const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD'
      const result = await axios.get(url);

      setListcript(result.data.Data);
    }
    consultAPI();
  }, [])

  const quoteCurrency = e => {
    e.preventDefault();

    if(coin === '' || crypto === ''){
      setError(true);
      return;
    }

    setError(false);
    setCurr(coin);
    setCryptocurr(crypto);
  }

  return (
    <form onSubmit={quoteCurrency}>
      {error ?  <Error msg='Todos los campos son obligatorios' /> : null}
      <SelectCoin />
      <SelectCrypto />
      <Button type="submit" value="Calcular" />
    </form>
  );
};

export default Form;
