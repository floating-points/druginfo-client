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