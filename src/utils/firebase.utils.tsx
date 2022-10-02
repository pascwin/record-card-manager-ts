// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, setDoc, deleteDoc } from "firebase/firestore";

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

export const getRecordCards = async () => {
  const cardsRef = collection(db, "record-cards");
  const cardsSnapshot = await getDocs(cardsRef);
  const cards = cardsSnapshot.docs.map((card) => {
    return card.data();
  });
  return cards;
};

export const createRecordCard = async(cardObject: any) => {
  await setDoc(doc(db, "record-cards", cardObject.id), cardObject)
}
//setDocs, when adding a element with a specific id or key --> three parameters --> also doc() not collection
//addDocs, for generating a elementing with key --> two parameters --> also collection() not doc()

export const deleteRecordCard = async(id: string) => {
  await deleteDoc(doc(db, "record-cards", id))
}