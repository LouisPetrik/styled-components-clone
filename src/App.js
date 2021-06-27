import React from 'react';
import styled from "./styled"


const Headline = styled.h1`
  font-family: Arial; 
  color: #eb4034;
  font-size: 24px;
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
      <Headline>Let's change it up</Headline>
    </div>
  )
}

// todos:
// für jedes aufgerufene object automatisch eines erstellen ? 

export default App;
