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
```


