import React from 'react';
import styled from "./styled"


const Headline = styled.h1`
  font-family: fantasy; 
  color: red;
  text-decoration: underline;
`


function App() {

  const ItalicText = styled.i`
    color: green; 
  `
  return (
    <div>
      <Headline>
        My headline
      </Headline>
      <ItalicText>
        My italic
      </ItalicText>
    </div>
  )
}

export default App;
