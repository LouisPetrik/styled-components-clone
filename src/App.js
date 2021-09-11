import React from 'react'
import styled from './styled'

const primaryColor = 'green'

const Headline = styled.h1`
	font-family: fantasy;
	color: red;
	text-decoration: underline;
`

function App() {
	const Title = styled.p`
		font-family: Arial;
		font-style: italic;
	`

	return (
		<div>
			<Headline>My headline</Headline>
			<Title>Hello world</Title>
		</div>
	)
}

export default App
