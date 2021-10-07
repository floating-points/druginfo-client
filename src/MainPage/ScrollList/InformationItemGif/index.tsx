import React from "react";
import styled from "styled-components"

export const Container = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	scroll-snap-align: start;
	background-color: white;
`

export const Gif = styled.div`
	width: 25vw;
	float: left;
	text-align: center;
	margin: auto;
	img {
		width: 100%;
		height: 100%;
	}
`

export const Information = styled.div`
	width: 25vw;
	float: right;
	text-align: center;
	margin: auto;
	font-weight: 900;
`

const InformationItemGif = () => {
	return (

		<Container>
			<Gif></Gif>
			<Information>
				<h3>원하는 정보를 찾을 수 있습니다</h3>
			</Information>
		</Container>
	)
}

export default InformationItemGif;