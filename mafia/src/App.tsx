import React, { useState } from 'react';
import { Login } from './screens/login/login';
import { auth } from "./components/firebase/firebase";

function App() {
  const user = auth.currentUser;
  return (
    <>
      {user ? <Hello/> : <Login/>}
    </>
  );
}

const Hello = () => {
  return (
    <div>
      Hello
    </div>
  )
}


export default App;
