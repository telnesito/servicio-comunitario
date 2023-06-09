import {
	collection,
	doc,
	getDoc,
	onSnapshot,
	setDoc,
	updateDoc,
	deleteDoc
} from "firebase/firestore";
import { db, uploadFiles } from "./config";

export const createArticle = async (article, articleType, selectedFile) => {
	const articleRef = collection(db, articleType);
	const articleDoc = doc(articleRef);
	await setDoc(articleDoc, article);

	if (articleType == "eventos") {
		const img = await uploadFiles(articleDoc.id, selectedFile);
		console.log(img);
	}
};

export const updateArticle = async (fields, articleType, articleId) => {
	try {
		const articleRef = doc(db, articleType, articleId);
		await updateDoc(articleRef, fields);
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
		console.log(articles);
		callback(articles);
	});
};

export const getArticleById = async (articleId, articleType) => {
	try {
		const articleRef = doc(db, articleType, articleId);
		const articleDoc = await getDoc(articleRef);

		if (!articleDoc.exists()) {
			return null;
		}
		const article = { ...articleDoc.data(), articleId };
		return article;
	} catch (error) {
		return null;
	}
};

export const deleteArticle = async (articleId, articleType) => {
	await deleteDoc(doc(db, articleType, articleId));
};
