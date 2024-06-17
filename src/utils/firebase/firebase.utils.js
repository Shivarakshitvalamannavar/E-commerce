import { initializeApp} from "firebase/app";
import {getAuth,signInWithPopup,signInWithRedirect,GoogleAuthProvider} from "firebase/auth"
import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "YOur Api Key",
    authDomain: "facere-5960b.firebaseapp.com",
    projectId: "facere-5960b",
    storageBucket: "facere-5960b.appspot.com",
    messagingSenderId: "",
    appId: ""
    Your config details that you can get fron firebase 
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();

  provider.setCustomParameters({

    prompt:"select_account"

  });

  export const auth =getAuth()
  export const signwithGooglePopup = () =>signInWithPopup(auth,provider)

  export const db =getFirestore();

  export const createUserDocumentFromAuth = async (userAuth) =>{
    const userDocRef=doc(db,'users',userAuth.uid);

    console.log(userDocRef)

    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot);
    console.log(userSnapshot.exists());

    if(!userSnapshot.exists()){
        const {displayName,email} = userAuth;
        const createdAt=new Date();

        try{
            await setDoc(userDocRef,{
                displayName,email,createdAt
            })
        }

        catch(error){
            console.log('error creating the user',error.message)
        }
    }

    return userDocRef;
  };
