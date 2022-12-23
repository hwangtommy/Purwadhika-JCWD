// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, sendPasswordResetEmail, signOut } from "firebase/auth";

import { getDocs, addDoc , query, collection, where, getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCIldf8pNzldiRgmn481PXfH-nxmrIrEKY",
  authDomain: "olx-tommy.firebaseapp.com",
  projectId: "olx-tommy",
  storageBucket: "olx-tommy.appspot.com",
  messagingSenderId: "140016290289",
  appId: "1:140016290289:web:4f52ba8e130889d6019c50"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const googleProvider = new GoogleAuthProvider()
const signInWithGoogle = async () => {
    try {
        const res = await signInWithPopup(auth, googleProvider)
        const user = res.user;
        const q = query(collection(db, "users"), where("uid", "==", user.uid))
        const docs = await getDocs(q)
        if (docs.docs.length === 0){
            await addDoc(collection(db, "users"), {
                uid: user.uid,
                name: user.displayName,
                authProvider: "google",
                email: user.email,
            })
        }
    } catch(err){
        alert(err.message)
    }
}

const logInWithEmailAndPassword = async (email, password) => {
    try{
        await signInWithEmailAndPassword(auth, email, password);
    } catch(err){
        alert(err.message)
    }
}

const registerWithEmailAndPassword = async (email, name, password) => {
    try{
        const res = await createUserWithEmailAndPassword(auth, email, password)
        const user = res.user
        await addDoc(collection(db, "users"), {
            uid: user.uid,
            name,
            authProvider: 'local',
            email,
        })
    } catch(err){
        alert(err.message)
    }
}

const sendPasswordReset = async (email) => {
    try{
        await sendPasswordResetEmail(auth, email)
        alert ("Password reset link sent")
    } catch (err){
        alert(err.message)
    }
}

const logout = () => {
    signOut(auth)
}

export {auth, db, signInWithGoogle, logInWithEmailAndPassword, registerWithEmailAndPassword, sendPasswordReset, logout}