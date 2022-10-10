import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc, addDoc } from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDyJlzuyY5JIT-wNNXjExNU7HAhgnca9QU",
  authDomain: "crown-commerce-b5f4a.firebaseapp.com",
  projectId: "crown-commerce-b5f4a",
  storageBucket: "crown-commerce-b5f4a.appspot.com",
  messagingSenderId: "444648061507",
  appId: "1:444648061507:web:565ca89a35625bd56572f6",
  measurementId: "G-9NY0E5W948",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  // firebase 9

  const userRef = doc(db, `users/${userAuth.uid}`);
  const snapShot = await getDoc(userRef);

  if (!snapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userRef, {
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

const firebaseApp = initializeApp(firebaseConfig);

export const db = getFirestore(firebaseApp);

export const auth = getAuth(firebaseApp);
