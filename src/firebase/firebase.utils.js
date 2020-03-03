import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCpva0QplLD1eEiWJ8oE4_vOTizP6GWYms",
  authDomain: "zoo-db-db97c.firebaseapp.com",
  databaseURL: "https://zoo-db-db97c.firebaseio.com",
  projectId: "zoo-db-db97c",
  storageBucket: "zoo-db-db97c.appspot.com",
  messagingSenderId: "1092352035077",
  appId: "1:1092352035077:web:6e65fa96964f0c2df44f6c",
  measurementId: "G-BER5SY8B1N"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth)return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();//borrow snapShot to check whether userRef exist or not. 
    
    if (!snapShot.exists){
        const {displayName, email}  = userAuth;
        const createdAt = new Date();

        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
            

        }catch(error){
            console.log('error creating user',error.message);
        }
    }

    return userRef;

}

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);
    const batch = firestore.batch();
    objectsToAdd.forEach(obj => {
        const newDocRef = collectionRef.doc();//doc() bracket is empty means that let firestore set id for us
        batch.set(newDocRef, obj);
    });
    return await batch.commit()
}

export const convertCollectionsSnapshotToMap = (collections) => {
    const transformedCollection = collections.docs.map(doc => {
        // const {title, items} = doc.data();
        const item = doc.data();
        
        return {
            routeName : encodeURI(item.title.toLowerCase()),
            id: doc.id,
            ...item
        }
    });
    return transformedCollection.reduce((accumulator, collection) => {
        accumulator[collection.title] = collection;//convert to object type
        return accumulator;
    }, {});
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
