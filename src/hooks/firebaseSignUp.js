import initializeAuthentication from '../fireshop/firebase.initialize'
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
  GithubAuthProvider
} from "firebase/auth";
import { useEffect, useState } from "react";

initializeAuthentication();

const useFirebase = () =>{
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const auth = getAuth();

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const signInusingGoogle = () =>{
        return signInWithPopup(auth, googleProvider)

        .catch(error => {
            setError(error.message)
        })
    }

    const signInusingGithub = () =>{
        return signInWithPopup(auth, githubProvider)
          
        .catch((error) => {
            setError(error.message);
        });
    }

    const logout = () =>{
        signOut(auth)
        .then(()=>{
            setUser({});
        })
    }

    useEffect( () =>{
        onAuthStateChanged(auth, user =>{
            if(user){
                setUser(user)
            }
        })
    } ,[])

    return {
      user,
      error,
      logout,
      signInusingGoogle,
      signInusingGithub
    };
}

export default useFirebase;