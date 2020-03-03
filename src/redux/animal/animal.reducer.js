// import ANIMALS_DATA from './animal.data';
import AnimalActionType from './animal.type';

const INITIAL_STATE = {
    collections: null,
    isFetching: false,
    errorMessage: undefined,
    searchField: ''
};

const animalDataReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case AnimalActionType.FETCH_ANIMALS_START:
            return{
                ...state,
                isFetching: true
            };
        case AnimalActionType.FETCH_ANIMALS_SUCCESS:
            return{
                ...state,
                isFetching: false,
                collections: action.payload
            };
        case AnimalActionType.FETCH_ANIMALS_FAILURE:
            return{
                ...state,
                isFetching: false,
                errorMessage: action.payload
            };
        case AnimalActionType.CHANGE_SEARCH_FIELD:
            return {
                ...state,
                searchField: action.payload
            };
        default:
            return state;
    }
}

export default animalDataReducer;