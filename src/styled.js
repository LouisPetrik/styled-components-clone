import React, { useState } from "react"

function BuildComponent(props) {

  let cssArray = props.css
  console.log("the array of css")
  console.log(cssArray)
  // the object we can use as working CSS-in-JS
  let cssObject = {}

  cssArray = cssArray.map((item) => {
    return item
      .trim()
      // converting font-family to fontFamily etc. 
      .replace(/\-([a-z])/g, v => v[1].toUpperCase())
      // splitting each CSS-statement into a value pair, for the object 
      .split(":")
  })

  // converting the cssArray to an object "cssObject"
  for (const key of cssArray) {
    cssObject[key[0]] = key[1];
  }

  // the final cssObject: 
  console.log("the final css object")
  console.log(cssObject)

  return React.createElement(
    // creates an React element
    props.tag, 
    // inline CSS, based on our from array-to-object CSS in the ``
    {style: cssObject }, 
    // just the children, so styled components can serve as a wrapper 
    [props.children]
  )
}

// the basis, yet an empty object. 
// hard-coded functions coming later 
const target = {}

const handler = {
  // executed on every call of styled.<something> 
  get: function(target, prop) {

    // the function, styled.h1`` is calling 
    // cssString = what's inside the `` 
    return function(cssString) {

      // splitting the CSS into an array of statements
      let cssLines = cssString[0].split(";")

      // removing the original line-breaks, and whitespace 

      cssLines = cssLines.map((item) => {
        return item
          .replace("\n", "")
          .replace("  ", "")
      })

      // deleting the last element of the array, since it's empty 
      cssLines.pop()

      // the function, executed when rendering the react component 
      return function(props) { 
        // returns the element, actually rendered for React. 
        return (
        <BuildComponent 
          css={cssLines} 
          tag={prop}>

          {props.children}

        </BuildComponent>
        )
      }
    }
  }
};

// Why an proxy? Because it allows us to check which function on the object 
// was called, without the need to define the function. Pretty cool. 
const styled = new Proxy(target, handler)


export default styled

