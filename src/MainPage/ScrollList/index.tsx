import React from "react";
import InformationItem from "./InformationItem";
import InformationItemGif from "./InformationItemGif";
import IllustrationItem from "./IllustrationItem";
import { ScrollContainer } from "./styles";

const ScrollList = () => {
	return (
		<ScrollContainer>
			<InformationItem></InformationItem>
			<InformationItemGif></InformationItemGif>
			<IllustrationItem></IllustrationItem>
		</ScrollContainer>
	)
}

export default ScrollList;