// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
//import { updateUser } from "./auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyC5LHKOfIr8DdOG7kW1fUC_4GMIzLqvZNY",
	authDomain: "colegio-metropolitano-baea4.firebaseapp.com",
	projectId: "colegio-metropolitano-baea4",
	storageBucket: "colegio-metropolitano-baea4.appspot.com",
	messagingSenderId: "35919090243",
	appId: "1:35919090243:web:97321bae5587f817e23af6",
	measurementId: "G-DRJ7GNPK2G",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore(app);

const storage = getStorage(app);

// const uploadFiles = async (uid, files) => {
// 	try {
// 		const imageRef = ref(storage, `users/${uid}`);
// 		const resUpload = await uploadBytes(imageRef, files);
// 		const url = await getDownloadURL(resUpload.ref);
// 		await updateUser(uid, { image: url });

// 		return url;
// 	} catch (error) {
// 		console.log(error);
// 	}
// };

export { auth, db, storage };
