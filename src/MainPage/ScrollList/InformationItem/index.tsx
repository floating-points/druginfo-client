import React from "react";
import { Container, InformationSite, Illustration } from "./styles";

const InformationItem = () => {
	return (
		<Container>
			<InformationSite>정보교류 사이트</InformationSite>
			<Illustration>
				<img src="/drugs/drug.jpg"></img>
			</Illustration>
		</Container>
	)
}

export default InformationItem;