import React, {useState, useEffect} from "react";
import Form from "./components/Form";
import Quote from "./components/Quote";
import styled from "styled-components";
import img from "./cryptomonedas.png";
import axios from 'axios';

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`;

const Img = styled.img`
  max-width: 100%;
  margin-top: 5rem;
`;

const Heading = styled.h1`
  font-family: "Bebas Neue", cursive;
  color: #fff;
  text-align: left;
  font-weight: 700;
  font-size: 50px;
  margin-bottom: 50px;
  margin-top: 80px;

  &::after {
    content: "";
    width: 100px;
    height: 6px;
    background-color: #66a2fe;
    display: block;
  }
`;

function App() {

  const [curr, setCurr] = useState('');
  const [cryptocurr, setCryptocurr] = useState('');
  const [result, setResult] = useState({});

  useEffect(() => {
      const quoteCrypt = async () => {
        if(curr === '') return;
    
    //consult api to get quote

    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptocurr}&tsyms=${curr}`;

    const result = await axios.get(url);

    setResult(result.data.DISPLAY[cryptocurr][curr]);
    }

    quoteCrypt();

  }, [curr, cryptocurr]);

  return (
    <div className="App">
      <Container>
        <div>
          <Img src={img} alt="imagen cripto" />
        </div>
        <div>
          <Heading>Cotiza Criptomonedas al instante</Heading>
          <Form 
            setCurr={setCurr}
            setCryptocurr={setCryptocurr}
          />
          <Quote
            result={result}
          />
        </div>
      </Container>
    </div>
  );
}

export default App;
