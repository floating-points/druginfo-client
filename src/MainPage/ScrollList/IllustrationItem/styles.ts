import styled from "styled-components"

export const Container = styled.div`
	width: 100vw;
	height: 100vh;
	scroll-snap-align: start;
	background-color: #EFF1FF;
	display: flex;
    align-items: center;
	flex-direction: column;
`

export const Illustration = styled.div`
	width: 100vw;
	height: 80vh;
	position: relative;
	img {
		width: 100%;
		height: 100%;
	}
`

export const Button = styled.button`
	position: absolute;
	width: 25%;
	height: 10%;
	top: 80%;
	left: 50%;
	transform: translate(-35%,0);
	border: 0.1rem solid;
	border-radius: 1.25rem;
	background-color: #EFF1FF;
	font-size: 1.5rem;
	font-weight: 900;
	color: #3736D4;
`

export const Footer = styled.div`
	width: 100%;
	height: 100%;
	background-color: #000066;
`