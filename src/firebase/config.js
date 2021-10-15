import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDrPsye8_EaAC-iuaVMt6Z7FcejtoscVMA",
  authDomain: "vue-fire-f8801.firebaseapp.com",
  projectId: "vue-fire-f8801",
  storageBucket: "vue-fire-f8801.appspot.com",
  messagingSenderId: "39058902856",
  appId: "1:39058902856:web:0a4645a288d15a76776d7d",
};

// firebase
firebase.initializeApp(firebaseConfig);

// firestore
const projectFirestore = firebase.firestore();
const timeStamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, timeStamp };
