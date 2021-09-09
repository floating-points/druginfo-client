import React from 'react';
import { Container, Title } from './styles';
import DrugItem from './DrugItem';
import { IDrug } from "../SearchPage";

const drugs:Array<IDrug>= [
	{
		name: '약이름',
		img:'/drugs/drug.jpg',
	},
	{
		name: '약이름',
		img:'/drugs/drug.jpg',
	},
	{
		name: '약이름',
		img:'/drugs/drug.jpg',
	},
	{
		name: '약이름',
		img:'/drugs/drug.jpg',
	},
	{
		name: '약이름',
		img:'/drugs/drug.jpg',
	},
	{
		name: '약이름',
		img:'/drugs/drug.jpg',
	},
	{
		name: '약이름',
		img:'/drugs/drug.jpg',
	},
	{
		name: '약이름',
		img:'/drugs/drug.jpg',
	},
	{
		name: '약이름',
		img:'/drugs/drug.jpg',
	},
];

//drugs: Array<IDrug>
const DrugList = () => {
	return (
		<Container>
			<Title>현재 복용하는 약은 무엇인가요?</Title>
			{drugs.map(drug => {
				return (
					<DrugItem
					name={drug.name}
					img={drug.img}
					/>
				)
			})}
		</Container>
	)
}

export default DrugList;
