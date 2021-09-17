import firebase from 'firebase';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyB_w39ZQY_nGOGYwkdGvfMI0e2CSGIsgqw",
    authDomain: "flyteam-3f138.firebaseapp.com",
    projectId: "flyteam-3f138",
    storageBucket: "flyteam-3f138.appspot.com",
    messagingSenderId: "859773126501",
    appId: "1:859773126501:web:3d6c9ef37f65e43dbf438c",
    measurementId: "G-95ZPHZWNXB"
  }
  
firebase.initializeApp(config);

export const descarga= firebase.firestore();


export async function loginUser(username:string, password:string){
    const email= `${username}@flyteam.com`
    try{const res = await firebase.auth().signInWithEmailAndPassword(email,password);
        console.log(res);
        return true
    }catch(error){
        console.log(error)
        return false;
    }   
  }