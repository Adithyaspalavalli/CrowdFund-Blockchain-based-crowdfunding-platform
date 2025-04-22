// src/contexts/AuthContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword as firebaseSignInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  updateProfile
} from 'firebase/auth';
import app, { auth } from '../config/firebase-config';

const googleAuthProvider = new GoogleAuthProvider();

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [currentUserCredentials, setCurrentUserCredentials] = useState(null);
  const [loading, setLoading] = useState(true);

  async function signup(email, password, displayName) {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(userCredential.user, { displayName });
      setCurrentUserCredentials(userCredential);
      return userCredential;
    } catch (error) {
      console.error("Signup error:", error);
      throw error;
    }
  }

  function signInWithEmailAndPassword(email, password) {
    return firebaseSignInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setCurrentUserCredentials(userCredential);
        return userCredential;
      });
  }

  function signInWithGoogle() {
    return signInWithPopup(auth, googleAuthProvider)
      .then((result) => {
        setCurrentUserCredentials(result);
        return result;
      });
  }

  function signout() {
    setCurrentUserCredentials(null);
    return signOut(auth);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    currentUserCredentials,
    signup,
    signInWithEmailAndPassword,
    signInWithGoogle,
    signout,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
