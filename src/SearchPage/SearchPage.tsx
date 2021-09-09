import React, { useState } from 'react';
import { DrugContainer } from './styles';
import Header from './Header';
import DrugList from './DrugList';

export interface IDrug{
    name: string,
	img: string,
}


const SearchPage = () => {
    const [drugs, setDrugs] = useState([]);

    return (
        <div>
            <Header />
            <DrugContainer>
                <DrugList />
            </DrugContainer>
        </div>
    )
}
export default SearchPage;
