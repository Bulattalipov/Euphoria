import {
  createApp
} from 'vue'
import './assets/main.css'
import App from './App.vue'
import router from './router'
import {
  initializeApp
} from "firebase/app";
import { getDatabase } from 'firebase/database';
import { createPinia } from 'pinia';

const firebaseConfig = {
  apiKey: "AIzaSyDOFWKvd1QN8lFE2tzRW6cIbQZ2N4AJSCc",
  authDomain: "euphoria-b21f2.firebaseapp.com",
  databaseURL: "https://euphoria-b21f2-default-rtdb.firebaseio.com",
  projectId: "euphoria-b21f2",
  storageBucket: "euphoria-b21f2.appspot.com",
  messagingSenderId: "759089338503",
  appId: "1:759089338503:web:70b221e7461ce2a6ea0022"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
export const database = getDatabase(appFirebase);

const pinia = createPinia();

createApp(App).use(router).use(pinia).use(appFirebase).mount('#app');