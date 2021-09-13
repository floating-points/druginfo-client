import React from "react";
import { Container, Illustration, Button, Footer} from "./styles";

const IllustrationItem = () => {
	return (
		<Container>
			<Illustration>
				<img src="/drugs/drug.jpg"></img>
				<Button>지금 당장 체험하기</Button>
			</Illustration>
			<Footer />
		</Container>
	)
}

export default IllustrationItem;