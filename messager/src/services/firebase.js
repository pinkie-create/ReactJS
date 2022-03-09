// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getDatabase, ref } from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAz6KnVweJwXhq95eNFoeqLlmUJFncKxaA",
  authDomain: "gb-react-a0ba7.firebaseapp.com",
  projectId: "gb-react-a0ba7",
  storageBucket: "gb-react-a0ba7.appspot.com",
  messagingSenderId: "216866147660",
  appId: "1:216866147660:web:cb7c0f8df1d27c861393e9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const authorization = getAuth(app);

export const signUp = (email, pass) =>
  createUserWithEmailAndPassword(authorization, email, pass);
export const login = (email, pass) =>
  signInWithEmailAndPassword(authorization, email, pass);
export const logout = () => signOut(authorization);

export const database = getDatabase(app);
export const chatsRef = ref(database, 'chats');
export const chatsIdRef = (chatId) => ref(database, `chats/${chatId}`);

export const messagesRef = ref(database, 'messages');
export const messagesChatIdRef = (chatId) => ref(database, `messages/${chatId}`);
export const messageIdRef = (chatId, msgId) => ref(database, `messages/${chatId}/${msgId}`);