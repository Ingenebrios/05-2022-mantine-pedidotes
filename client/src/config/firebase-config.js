import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore';
const firebaseConfig = {
	apiKey: "AIzaSyAnIiPySnVjK2sBjOLCy0uuNKMd3uNVO2U",
	authDomain: "ingenieria-software-database.firebaseapp.com",
	projectId: "ingenieria-software-database",
	storageBucket: "ingenieria-software-database.appspot.com",
	messagingSenderId: "852361996813",
	appId: "1:852361996813:web:2e58de8e40014e934f8344"
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);