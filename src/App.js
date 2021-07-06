import React from 'react';
import styled from "./styled"


const Headline = styled.h1`
  font-family: fantasy; 
  color: red;
  text-decoration: underline;
`


function App() {
  const Title = styled.p`
    color: red; 
  `
  
  return (
    <div>
      <Headline>
        My headline
      </Headline>
      <Title>Hello world</Title>
    </div>
  )
}

export default App;
