import React from "react";
import styled from "styled-components";
import useCoin from "../hooks/useCoin";
import useCrypto from "../hooks/useCrypto";

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

const Form = () => {
  const COINS = [ 
    {code: 'USD', name: 'USD Dolar'},
    {code: 'ARG', name: 'Peso Argentino'},
    {code: 'MXN', name: 'Peso Mexicano'},
    {code: 'EUR', name: 'Euro'}
  ]

  const [coin, SelectCoin] = useCoin('Elige tu moneda', '', COINS );
  
  const [crypto, SelectCrypto] = useCrypto('Elige tu Criptomoneda', '');

  return (
    <form>
      <SelectCoin />
      <SelectCrypto />
      <Button type="submit" value="Calcular" />
    </form>
  );
};

export default Form;
