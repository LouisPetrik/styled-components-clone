import React, { useState } from "react"

/*
const construct = (strings) => {
    console.log("fist element", strings[0])
    console.log("second element", strings[1])
}*/
//const styled = (tag) => (construct, tag)

/* klappt bisher 
const styled = (tag) => {
    console.log(tag)
    return (strings) => {
        console.log(strings[0])
    }
}
*/


// ideen: Vielleicht einen global <style> mit dangerouslySetInnerHTML
// und dort alle styles von gehashten klassen sammeln. 


// diese function baut unser component
function constructComponent (cssString, prop) {
  console.log("arguments constructComponent")
  console.log(arguments)
  
  console.log("constructComponent triggered")

  const styleSection = document.createElement("style");
  document.head.appendChild(styleSection);
  
  let tag = prop
  console.log(tag)

  return function() {
    // not a clean solution, global state would be better. 
    const [globalCSS, setGlobalCSS] = useState(``)
    styleSection.innerHTML = globalCSS;
    let elem = React.createElement(tag, [{ style: { color: "red" } }], [<p>Hello</p>])

    return elem
  }
}


function BuildComponent(props) {
  return React.createElement(props.tag, [], [props.children])
}

// more props coming later 
const target = {}

const handler = {
  get: function(target, prop) {
    console.log("handler arguments")
    console.log(arguments)

    console.log(target)
    console.log(prop) // h1 
    // das ist die function, die styled.h1`` aufruft
    return function(cssString) {
      console.log("styled.h1 params")
      console.log(arguments)

      return function(props) {
        return <BuildComponent css={cssString} tag={prop}>{props.children}</BuildComponent>
      }
      // eigentlich war das der Aufruf, 
      //return constructComponent(cssString, prop)
    }
    /*
    return function(cssString) {
      console.log("styled.h1 params")
      console.log(arguments)
      return constructComponent(cssString, prop)
    }
    */
  }
};

// why an proxy? Because it allows us to check which function on the object 
// was called, without the need to define the function. Pretty cool. 
const styled = new Proxy(target, handler)


export default styled



// https://stackoverflow.com/questions/44825443/passing-further-arguments-with-tagged-template-literals