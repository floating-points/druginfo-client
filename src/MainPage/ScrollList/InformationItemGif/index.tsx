import React from "react";
import { Container, Gif, Information } from "./styles";

const InformationItemGif = () => {
	return (

		<Container>
			<Gif><img src="/drugs/drug.jpg"></img></Gif>
			<Information>
				<h3>원하는 정보를 찾을 수 있습니다</h3>
			</Information>
		</Container>
	)
}

export default InformationItemGif;