import React, { useState } from "react";
import styled from 'styled-components';

const Label = styled.label`
  font-family: 'Bebas Neue', cursive;
  color: #000;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 2.4rem;
  margin-top:2rem;
  display: block;
`

const Selc =  styled.select`
  width: 100%;
  display: block;
  padding: 1rem;
  --webkit-appearance: none;
  border-radius: 10px;
  border: none;
  font-size: 1.2rem;
`

const useCrypto = (label, initialState, options) => {
  
  const [state, setState] = useState(initialState);

  const SelectCrypto = () => (
    <div>
      <Label>{label}</Label>
      <Selc
        onChange={e => setState(e.target.value)}
        value={state}
      >
        <option value="">--Seleccione--</option>
        {/* {options.map(option =>(
          <option key={option.code} value={option.code}>{option.name}</option>
          ))} */}
      </Selc>
    </div>
  );

  return [state, SelectCrypto, setState];
};

export default useCrypto;
