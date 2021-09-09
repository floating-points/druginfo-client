import React from 'react';
import { Item, ItemImage, ItemName } from './styles';
import { IDrug } from '../../SearchPage';


const DrugItem = ( drug : IDrug) => {
	return (
		<Item>
			<ItemImage src={drug.img}></ItemImage>
			<ItemName>{drug.name}</ItemName>
		</Item>
	)
}

export default DrugItem;
