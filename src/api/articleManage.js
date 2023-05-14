import {
	collection,
	doc,
	onSnapshot,
	setDoc,
	updateDoc,
} from "firebase/firestore";
import { db } from "./config";

export const createArticle = async (article, articleType) => {
	const articleRef = collection(db, articleType);
	const articleDoc = doc(articleRef);

	await setDoc(articleDoc, article);
};

export const updateArticle = async (article, articleType) => {
	try {
		const articleRef = doc(db, articleType, article.id);
		await updateDoc(articleRef, article);
	} catch (error) {
		return error;
	}
};

export const getArticles = (callback, articleType) => {
	const articleRef = collection(db, articleType);

	return onSnapshot(articleRef, (snapshot) => {
		const articles = [];
		snapshot.docs.forEach((doc) => {
			const article = doc.data();
			article.id = doc.id;
			articles.push(article);
		});

		callback(articles);
	});
};
