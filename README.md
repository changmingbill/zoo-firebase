# ZOO

## How To Use 🔧

```bash
# Clone this repository
$ git clone https://github.com/changmingbill/zoo-firebase

# Go into the repository
$ cd zoo-firebase

# Remove current origin repository
$ git remote remove origin

# Install dependencies
$ yarn

# Start development server
$ yarn start
```
## Instructions:

### Step 1 - ADD FIREBASE CONFIG

Go to `/src/firebase` create firebase.config and fill your own firebase information, they are as follows:
```javaScript
const config = {
  apiKey: xxx,
  authDomain: xxx,
  databaseURL: xxx,
  projectId: xxx,
  storageBucket: xxx,
  messagingSenderId: xxx,
  appId: xxx,
  measurementId: xxx
};
export default config
```
### Step 2 - REPLACE DATA
Go to `/src/redux/animal/animal.reducer.js` change the key collections' value from `null` to `ANIMALS_DATA` as follows. If you want to user local data instead of using firebase, please skip `next steps`. 
```javaScript
import ANIMALS_DATA from './animal.data';
import AnimalActionType from './animal.type';

const INITIAL_STATE = {
    collections: ANIMALS_DATA,
    isFetching: false,
    errorMessage: undefined,
    searchField: ''
};
```

### Step 3 - REMOVE `addCollectionAndDocuments` LINE COMMAND
Go to `/src/App.js` remove 'addCollectionAndDocuments` line command and import addCollectionAndDocuments from `/src/firebase/firebase.utils.js` as follows:
```javaScript
import {auth, createUserProfileDocument,addCollectionAndDocuments} from './firebase/firebase.utils';

...
}else{
        setCurrentUser(userAuth);
        addCollectionAndDocuments('animals', selectAnimalArray.map(({title, name_Ch,Pic01_URL,Pic02_URL, Pic03_URL, Pic04_URL, name_En,  name_Latin, Pic01_ALT, behavior, phylum, classis, order, family, feature, diet, habitat, distribution,crisis,interpretation,location_Ch,location}) => ({title, name_Ch,Pic01_URL,Pic02_URL, Pic03_URL, Pic04_URL, name_En, name_Latin, Pic01_ALT, behavior, phylum, classis, order, family, feature, diet, habitat, distribution,crisis,interpretation,location_Ch,location})));
      }
    });
```
### Step 4 - ADD `addCollectionAndDocuments` COMMAMD
You don't need it anymore.
## Authors

- **Cliff Chang** - [https://github.com/changmingbill](https://github.com/changmingbill)

## License 📄

### MIT

