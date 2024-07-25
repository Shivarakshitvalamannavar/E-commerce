import { initializeApp} from "firebase/app";

import {getAuth,signInWithPopup,signInWithRedirect,GoogleAuthProvider,createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut
,onAuthStateChanged} from "firebase/auth"
import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
    collection,
    writeBatch,
    query,
    getDocs,
} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCB8fk_PrLmS6CKzTS87gzhsP1142McL_Q",
    authDomain: "facere-5960b.firebaseapp.com",
    projectId: "facere-5960b",
    storageBucket: "facere-5960b.appspot.com",
    messagingSenderId: "",
    appId: ""

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

  export const addCollectionAndDocuments= async(collectionKey,ObjectsToAdd) =>{
    const collectionRef = collection(db,collectionKey);
    const batch =writeBatch(db);

    ObjectsToAdd.forEach((object) =>{
        const docRef = doc(collectionRef,object.title.toLowerCase());
        batch.set(docRef,object);
    })

    await batch.commit()
    console.log("DONEE")
}

export const getCateAndDocuments = async () =>{
    const collectionRef = collection(db,'products');
    const q =query(collectionRef);

    const querySnapshot =await getDocs(q);
    // return querySnapshot.docs.map((docSnapshot) =>docSnapshot.data());//This for some reason doesnt work Idk why
    const categoryMap =querySnapshot.docs.reduce((acc,docSnapshot) =>{
        const {title,items} = docSnapshot.data();
        acc[title.toLowerCase()]=items;
        return acc;
    }, {})//We commented this part in order to send the most basic form of the data to our reducer so we can write the logic over there that we want on this data

return categoryMap;

}

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

    // return userDocRef; COmmenting since in redux saga we just use the userSnapshot
    return userSnapshot;
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

// Added this function since we need a aynsc
//method of fecthing user for saga to work
export const getCurrentUser = () =>{
    return new Promise((resolve,reject) =>{
        const unsubscribe=onAuthStateChanged(
            auth,
            (userAuth) =>{
                unsubscribe();
                resolve(userAuth);
            },
            reject
        )
    })
}