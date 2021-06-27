import React, { useState } from "react"
import { css } from "styled-components";

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
  console.log("css props in buildcomponent")
  console.log(props.css)

  return React.createElement(
    props.tag, 
    {style: { color: "red", fontFamily: "Fantasy"}}, 
    [props.children]
  )
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

    // the function, styled.h1`` is calling 
    // cssString = what's inside the `` 
    return function(cssString) {
      console.log("styled.h1 params")
      console.log(arguments)
      
      // splitting the CSS into an array of statements
      let cssLines = cssString[0].split(";")
      console.log("css lines type")
      console.log(typeof(cssLines))
      for (let i = 0; i < cssLines.length; i++) {
        cssLines[i] = cssLines[i].replace("\n", "")
        cssLines[i] = cssLines[i].replace("  ", "")
      }
      cssLines.pop()

    
      return function(props) { 
        // returns the element, actually rendered 
        return <BuildComponent style={{color: "green"}} css={cssLines} tag={prop}>{props.children}</BuildComponent>
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