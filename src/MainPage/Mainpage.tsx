import React, { useState } from 'react';
import Header from './Header';
import ScrollList from './ScrollList';
import { Container } from './styles';

const MainPage = () => {
	return (
		<Container>
			<Header />
			<ScrollList />
		</Container>
	)
}

export default MainPage;


