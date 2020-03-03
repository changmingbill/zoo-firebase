import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectAnimalArray,selectSearch} from '../../redux/animal/animal.selector';
import SearchItems from '../../components/search-items/search-items.component';
const SearchPage = ({searchField, animals}) => {
    
    const searchEnAnimals = animals.filter(animal => {
        return animal.name_En.toLowerCase().includes(searchField.toLowerCase())
    });
    const searchChAnimals = animals.filter(animal => {
        return animal.name_Ch.toLowerCase().includes(searchField.toLowerCase())
    });
    const searchLatinAnimals = animals.filter(animal => {
        return animal.name_Latin.toLowerCase().includes(searchField.toLowerCase())
    });
    let union = [...new Set([...searchEnAnimals, ...searchChAnimals, ...searchLatinAnimals])];

    
    
    return(
        <SearchItems collections={union}/>
    )
}

const mapStateToProps = createStructuredSelector({
    animals: selectAnimalArray,
    searchField: selectSearch
})

export default connect(mapStateToProps)(SearchPage);