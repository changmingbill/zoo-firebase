import AnimalActionType from './animal.type';
import {firestore, convertCollectionsSnapshotToMap} from '../../firebase/firebase.utils';
export const setSearchfield = (text) => ({
    type: AnimalActionType.CHANGE_SEARCH_FIELD,
    payload: text
});

export const fetchAnimalsStart = () => ({
    type: AnimalActionType.FETCH_ANIMALS_START
})
export const fetchAnimalsSuccess = (AnimalMap) => ({
    type: AnimalActionType.FETCH_ANIMALS_SUCCESS,
    payload: AnimalMap
});

export const fetchAnimalsFailure = (errorMessage) => ({
    type: AnimalActionType.FETCH_ANIMALS_FAILURE,
    payload: errorMessage
});

export const fetchAnimalsStartAsync = () => (dispatch)=>{
        const collectionRef = firestore.collection('animals');
        dispatch(fetchAnimalsStart());
        collectionRef
        .get()
        .then(snapshop => {
            console.log('fetch success');
            const collectionsMap = convertCollectionsSnapshotToMap(snapshop);
            dispatch(fetchAnimalsSuccess(collectionsMap));
        })
        .catch(error => fetchAnimalsFailure(error.message));
    
};
