// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

import {
  getFirestore,
  collection,
  getDocs,
  doc,
  setDoc,
  deleteDoc,
  getDoc,
} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBtVRklyVXpdSqIwHq0Fq8eqA8ofwWjyww",
  authDomain: "http-record-cards.firebaseapp.com",
  databaseURL:
    "https://http-record-cards-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "http-record-cards",
  storageBucket: "http-record-cards.appspot.com",
  messagingSenderId: "283712697647",
  appId: "1:283712697647:web:ba4517eafa3438bcc69dda",
  measurementId: "G-RCECE86WKL",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


export const getRecordCards = async (uid: string) => {
  const cardsRef = collection(db, "record-cards-" + uid)
  const cardsSnapshot = await getDocs(cardsRef);
  const cards = cardsSnapshot.docs.map((card) => {
    return card.data();
  });
  return cards;
};

export const createRecordCard = async (cardObject: any, uid: string) => {
  await setDoc(doc(db, "record-cards-" + uid, cardObject.id), cardObject);
};
//setDocs, when adding a element with a specific id or key --> three parameters --> also doc() not collection
//addDocs, for generating a elementing with key --> two parameters --> also collection() not doc()

export const deleteRecordCard = async (id: string, uid: string) => {
  await deleteDoc(doc(db, "record-cards-" + uid, id));
};

export const getCategories = async (uid: string) => {
  const categoriesRef = collection(db, "categories-" + uid)
  const categoriesSnapshot = await getDocs(categoriesRef);
  const categories = categoriesSnapshot.docs.map((category) => {
    return category.data();
  });
  return categories;
};

export const createCategory = async (categoryObject: any, uid: string) => {
  await setDoc(doc(db, "categories-" + uid, categoryObject.id), categoryObject);
};

export const deleteCategory = async (id: string, uid: string) => {
  await deleteDoc(doc(db, "categories-" + uid, id));
};

export const auth = getAuth();

export const createUserDocumentFromAuth = async (
  userAuth: any,
  additionalInformation = {}
) => {
  if (!userAuth) return;

  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error: any) {
      console.log("error creating the user", error.message);
    }
  }

  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (
  email: string,
  password: string
) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (
  email: string,
  password: string
) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => {
  return await signOut(auth);
};

export const onAuthStateChangedListener = (callback: any) => {
  return onAuthStateChanged(auth, callback);
};