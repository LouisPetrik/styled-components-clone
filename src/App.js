import React from 'react';
import styled from "./styled"


const Headline = styled.h1`
  font-family: fantasy; 
  color: #eb4034;
  font-size: 24px;
`

const ItalicText = styled.i`
  color: red; 
`

//console.log(proxy.h1`some css`) // from the handler
//testing.h1``

// es muss vom type function sein, damit es im 
// DOM von react gerendert werden kann. 

console.log("was headline ist")
console.log(Headline)


function App() {
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
