import './App.css';
import LoginScreen from './components/LoginScreen';
import NotesScreen from './components/NotesScreen';
import { initializeApp } from 'firebase/app';
import firebaseConfig from './config/firebase-config';
import { getAuth, onAuthStateChanged } from "firebase/auth"
import { useEffect, useState } from 'react';

initializeApp(firebaseConfig);

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, user => {
      if(user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    })
  }, [isLoggedIn])

  return (
    isLoggedIn ? <NotesScreen setIsLoggedIn={setIsLoggedIn} /> : <LoginScreen />
  );
}

export default App;