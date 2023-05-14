import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../../api/config";



export const login = async (email, password) => {

  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password)
    const { user } = userCredential

    return user
  } catch (error) {
    return [error.message, error.code]
  }
}

export const logOut = async () => {
  try {
    signOut(auth)
    console.log('Sesion cerrada')
  } catch (error) {
    console.log(error)

  }

}