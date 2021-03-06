import React from 'react'
import { styled } from '@material-ui/core/styles'
import { Box } from '@material-ui/core'
import CovidMap from 'features/map/CovidMap'

const Wrapper = styled(Box)({
	height: '100vh',
})

function HomePage() {
	return (
		<Wrapper>
			<CovidMap />
		</Wrapper>
	)
}

export default HomePage
