import { initializeApp} from "firebase/app";

import {getAuth,signInWithPopup,signInWithRedirect,GoogleAuthProvider,createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut
,onAuthStateChanged} from "firebase/auth"
import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCB8fk_PrLmS6CKzTS87gzhsP1142McL_Q",
    authDomain: "facere-5960b.firebaseapp.com",
    projectId: "facere-5960b",
    storageBucket: "facere-5960b.appspot.com",
    messagingSenderId: "514592920672",
    appId: "1:514592920672:web:0bddaef89b2d0402245f05"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();

  provider.setCustomParameters({

    prompt:"select_account"

  });

  export const auth =getAuth()
  export const signwithGooglePopup = () =>signInWithPopup(auth,provider)
  export const signwithGoogleRedirect = () =>signInWithRedirect(auth,provider)

  export const db =getFirestore();

  export const createUserDocumentFromAuth = async (userAuth,additionalInformation = {displayName:'Dont know '}) =>{
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
                displayName,email,createdAt,...additionalInformation
            })
        }

        catch(error){
            console.log('error creating the user',error.message)
        }
    }

    return userDocRef;
  };


export const createAuthUserWithEmailAndPassword= async(email,password)=>{
    if(!email || !password) return;

    return await createUserWithEmailAndPassword(auth,email,password)

}

export const signInAuthUserWithEmailAndPassword=async(email,password) =>{
    if(!email || !password) return;

    return await signInWithEmailAndPassword(auth,email,password)
}

export const SignOutUser = async () => await signOut(auth)

export const onAuthStateChangedListener = (callback) =>{

    return onAuthStateChanged(auth,callback)

}