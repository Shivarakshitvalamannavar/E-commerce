// import React from 'react';
// import Shop from './routes/shop/shop.component';
// import { Routes ,Route } from 'react-router-dom';
// import Home from './routes/home/home.component';
// import Authentication from './routes/authentication/authentication.component';
// import Checkout from './routes/checkout/checkout.component';
// import Navigation from './routes/navigation/navigastion.component';
// import {  useEffect } from "react";
// import {useDispatch} from 'react-redux';

// import { onAuthStateChangedListener ,
// createUserDocumentFromAuth } from "./utils/firebase/firebase.utils";
// import { setCurrentUser } from './store/user/user.action';


// const App = () => {
//   const dispatch = useDispatch();

//   useEffect(() =>{
//     const unsubscribe = onAuthStateChangedListener((user) =>{
//         if(user)
//         {
//             createUserDocumentFromAuth(user);
//         }
//         dispatch(setCurrentUser(user));
//     })

//     return unsubscribe//This part is added here since when we are using reducer we need a way of sending the value to the componenets so that they can use them previulsy we used context for this
// }, [])

//   return (
//     <Routes>
//       <Route path="/" element={<Navigation/>}>
//         <Route index element={<Home/>}/>
//         <Route path ="shop/*" element={<Shop/>}/>
//         <Route path ="auth" element={<Authentication/>}/>
//         <Route path ="checkout" element={<Checkout/>}/>
//       </Route>

//     </Routes>
//   );
// };

// export default App;
//Commenting since now we use saga for user thigns

import React from 'react';
import Shop from './routes/shop/shop.component';
import { Routes ,Route } from 'react-router-dom';
import Home from './routes/home/home.component';
import Authentication from './routes/authentication/authentication.component';
import Checkout from './routes/checkout/checkout.component';
import Navigation from './routes/navigation/navigastion.component';
import {  useEffect } from "react";
import {useDispatch} from 'react-redux';

import { onAuthStateChangedListener ,
createUserDocumentFromAuth,
getCurrentUser} from "./utils/firebase/firebase.utils";
import { checkUserSession, setCurrentUser } from './store/user/user.action';


const App = () => {
  const dispatch = useDispatch();

  useEffect(() =>{
    // getCurrentUser().then((user) =>console.log(user))
      dispatch(checkUserSession())
}, [])

  return (
    <Routes>
      <Route path="/" element={<Navigation/>}>
        <Route index element={<Home/>}/>
        <Route path ="shop/*" element={<Shop/>}/>
        <Route path ="auth" element={<Authentication/>}/>
        <Route path ="checkout" element={<Checkout/>}/>
      </Route>

    </Routes>
  );
};

export default App;
