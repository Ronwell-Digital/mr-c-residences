import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDhK2tI5pMB8QcMUUsqlpxbafcLBfG1AZs",
    authDomain: "mrcresidences-30566.firebaseapp.com",
    projectId: "mrcresidences-30566",
    storageBucket: "mrcresidences-30566.appspot.com",
    messagingSenderId: "1003381853129",
    appId: "1:1003381853129:web:fcdc7a350917369178b618"
};

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
export {db}