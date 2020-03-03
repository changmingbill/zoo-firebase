import {createSelector} from 'reselect';

const selectAnimals = state => state.animal;

export const selectCollections = createSelector(
    [selectAnimals],
    animalData => animalData.collections
);

export const selectAnimalArray = createSelector(
    [selectCollections],
    animalArray => animalArray ?  Object.values(animalArray) : []
)

export const selectAnimal = collectionUrlParm => 
    createSelector(
        [selectCollections],
        collections => collections ? collections[collectionUrlParm] : null
);

export const selectArea = collectionUrlParm => 
    createSelector(
        [selectAnimalArray],
        collections => collections ? collections.filter(item => item.location === collectionUrlParm) : null
);

export const selectSearch = createSelector(
    [selectAnimals],
    searchField => searchField.searchField
);

export const selectIsCollectionFetching = createSelector(
    [selectAnimals],
    animal => animal.isFetching
);
export const selectIsCollectionLoaded = createSelector(
    [selectAnimals],
    animals => !animals.collections
);


