import React from 'react';
import styled from "./styled"


const Headline = styled.h1`
  font-family: fantasy; 
  color: red;
  text-decoration: underline;
`


//console.log(proxy.h1`some css`) // from the handler
//testing.h1``

// es muss vom type function sein, damit es im 
// DOM von react gerendert werden kann. 


// bug detected: css-attribute must be same depth in line as const-declaration 

function App() {

  const ItalicText = styled.i`
    color: white; 
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

// todos:
// für jedes aufgerufene object automatisch eines erstellen ? 

export default App;
