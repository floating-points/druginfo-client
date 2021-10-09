import React from "react";
import styled, { keyframes } from "styled-components"

const Container = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	scroll-snap-align: start;
	background-color: #EFF1FF;
`;

const boxFade = keyframes`
	from {
		opacity: 0;
	}
	to {
		opacity: 1;
	}
`;

const InformationSite = styled.div`
	width: 25vw;
	float: right;
	text-align: center;
	margin: auto;
	font-size: 1.5rem;
	font-weight: 600;
	animation: ${boxFade} 2s linear;
`;

const Illustration = styled.div`
	width: 25vw;
	float: left;
	text-align: center;
	margin: auto;
	img {
		width: 100%;
		height: 100%;
		border-radius: 1rem;
	}
`


const InformationItem = () => {
	return (
		<Container>
			<InformationSite>
				혹시 지금 복용하고 계시는 약<br /><br />
				과연 안전할까요?
			</InformationSite>
			<Illustration>
				<img src="/drugs/danilo-alvesd-a7OdG45prSM-unsplash.jpg"></img>
			</Illustration>
		</Container>
	)
}

export default InformationItem;