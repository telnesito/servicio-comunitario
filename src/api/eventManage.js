import {
	collection,
	doc,
	onSnapshot,
	setDoc,
	updateDoc,
} from "firebase/firestore";
import { db } from "./config";

export const createEvent = async (evento) => {
	const eventRef = collection(db, "eventos");
	const eventDoc = doc(eventRef);

	await setDoc(eventDoc, evento);
};

export const updateEvent = async (evento) => {
	try {
		const eventoRef = doc(db, "eventos", evento.id);
		await updateDoc(eventoRef, evento);
	} catch (error) {
		return error;
	}
};

export const getEventRef = (callback) => {
	const eventRef = collection(db, "eventos");

	return onSnapshot(eventRef, (snapshot) => {
		const eventos = [];
		snapshot.docs.forEach((doc) => {
			const evento = doc.data();
			evento.id = doc.id;
			eventos.push(evento);
		});

		callback(eventos);
	});
};
