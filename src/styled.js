import React, { useState } from 'react'

function BuildComponent(props) {
	let cssArray = props.css
	console.log('the array of css')
	console.log(cssArray)
	// the object we can use as working CSS-in-JS

	let cssObject = {}

	cssArray.map((item) => {
		// altering each item
		item = item
			// removing whitespace on the side
			.trim()
			// converting i. e. font-family to fontFamily
			.replace(/\-([a-z])/g, (v) => v[1].toUpperCase())

		// attribute of the CSS-line, i. e. color, font-family or width
		let attribute = item.split(':')[0]
		// value of the CSS-line, i. e. red, Arial or 200 px
		let value = item.split(':')[1]

		// merging att and value to a whole statement in the object
		cssObject[attribute] = value
	})

	// the final cssObject:
	console.log('the final css object')
	console.log(cssObject)

	return React.createElement(
		// creates an React element, "tag" is the HTML tag used for it
		props.tag,
		// inline CSS, based on our from array-to-object CSS in the ``
		{ style: cssObject },
		// just the children, so styled components can serve as a wrapper
		[props.children]
	)
}

// the basis, yet an empty object.
// hard-coded functions coming later
const target = {}

const handler = {
	// executed on every call of styled.<something>
	get: function (target, prop) {
		// the function, styled.h1`` is calling
		// cssString = what's inside the ``
		return function (cssString) {
			// splitting the CSS into an array of statements
			let cssLines = cssString[0].split(';')

			// removing the original line-breaks, and whitespace
			cssLines = cssLines.map((item) => {
				return item.replace('\n', '').replace('  ', '')
			})

			console.log('css lines', cssLines)

			// deleting the last element of the array, since it's empty
			cssLines.pop()

			// the function, executed when rendering the react component
			return function (props) {
				// returns the element, actually rendered for React.
				return (
					<BuildComponent css={cssLines} tag={prop}>
						{props.children}
					</BuildComponent>
				)
			}
		}
	},
}

// Why an proxy? Because it allows us to check which function on the object
// was called, without the need to define the function. Pretty cool.
const styled = new Proxy(target, handler)

export default styled
