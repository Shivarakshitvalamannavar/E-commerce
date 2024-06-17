import React from 'react';

import { Routes ,Route } from 'react-router-dom';
import Home from './routes/home/home.component';
import SignIn from './routes/Sign-in/Sign-in.component';

import Navigation from './routes/navigation/navigastion.component';

const Shop =() =>{
  return(
    <div>
      <h1>The Shop Page</h1>
    </div>
  )
}

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation/>}>
        <Route index element={<Home/>}/>
        <Route path ="shop" element={<Shop/>}/>
        <Route path ="signin" element={<SignIn/>}/>
      </Route>

    </Routes>
  );
};

export default App;
