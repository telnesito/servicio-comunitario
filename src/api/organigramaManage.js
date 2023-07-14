import { db, uploadWorkerImage } from "./config";
import {
  collection,
  doc,
  getDoc,
  onSnapshot,
  setDoc,
  updateDoc,
  deleteDoc
} from "firebase/firestore";
export const addWorker = async (workerData, selectedImage, especilidad) => {

  try {
    const workerRef = collection(db, especilidad,)
    const workerDoc = doc(workerRef)
    await setDoc(workerDoc, workerData)
    const img = await uploadWorkerImage(workerDoc.id, selectedImage, especilidad)
    console.log(img)
  } catch (error) {
    console.log(error)
  }

}

// export const updateWorker = async (newData, workerId, especilidad) => {
//   try {
//     const workerRef = doc(db, especilidad, workerId)
//     await updateDoc(workerRef, newData)
//   } catch (error) {

//     console.log(error)

//   }
// }

export const updateWorker = async (newData, workerId, especilidad, selectedImage) => {
  try {
    const workerRef = doc(db, especilidad, workerId);
    if (selectedImage) {
      // Actualizar la imagen
      const newImageUrl = await uploadWorkerImage(workerId, selectedImage, especilidad);
      newData.imageUrl = newImageUrl;
      // Borrar la imagen anterior

    }
    // Actualizar los datos del trabajador
    await updateDoc(workerRef, newData);
  } catch (error) {
    console.log(error);
  }
}

export const deleteWorker = async (workerId, especilidad) => {
  await deleteDoc(doc(db, especilidad, workerId))
}



export const getWorkers = (callback, especialidad) => {

  const workerRef = collection(db, especialidad)

  onSnapshot(workerRef, (snapshot) => {
    const workers = []

    snapshot.docs.forEach(doc => {
      const workerData = doc.data()
      workerData.id = doc.id
      workers.push(workerData)
    });
    callback(workers)
  })


}
