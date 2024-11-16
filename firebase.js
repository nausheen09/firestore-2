
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import{getFirestore, collection, addDoc,doc, setDoc, updateDoc, arrayUnion, arrayRemove,query, where, getDocs} from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";

// import {where,limit,query,orderBy,serverTimestamp,onSnapshot ,getDoc , getDocs ,updateDoc,arrayUnion, arrayRemove  ,getFirestore,setDoc ,doc,collection, addDoc} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyDi6A4NlCPY-Y6RbDeNYQwVH6Jc4ywRatI",
    authDomain: "registration-fd1bb.firebaseapp.com",
    projectId: "registration-fd1bb",
    storageBucket: "registration-fd1bb.firebasestorage.app",
    messagingSenderId: "811827208554",
    appId: "1:811827208554:web:3117917a1e0d3ea22f0513"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export{collection, addDoc, db,doc, setDoc, updateDoc, arrayUnion, arrayRemove, query, where, getDocs,}






// export{
//   setDoc,
//     collection, addDoc,db
//     ,doc
//     ,getDocs ,
//     limit,
//     updateDoc ,
//     arrayUnion, arrayRemove ,serverTimestamp ,getDoc ,
//     onSnapshot,
//     query,orderBy,
//     where
 
// }