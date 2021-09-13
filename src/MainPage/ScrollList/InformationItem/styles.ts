import styled from "styled-components"

export const Container = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	scroll-snap-align: start;
	background-color: #EFF1FF;
`

export const InformationSite = styled.div`
	width: 50vw;
	float: left;
	text-align: center;
	margin: auto;
	font-weight: 900;
`

export const Illustration = styled.div`
	width: 50vw;
	float: right;
	text-align: center;
	margin: auto;
	img {
		width: 70%;
		height: 70%;
	}
`