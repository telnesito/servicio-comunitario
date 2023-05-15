import { useContext } from 'react'
import { LoginContext } from '../hooks/ContextLoginProvider'
import { Navigate } from 'react-router-dom'

export const ProtectedLogin = ({ children, redirectTo }) => {
  const { uid, } = useContext(LoginContext)
  if (!uid) {
    console.log(uid)
    return <Navigate to={`${redirectTo}`} replace></Navigate>
  }

  return children
}
export const RedirectToAdmin = ({ children, redirectTo = '/administracion/main/noticias' }) => {
  const { uid, } = useContext(LoginContext)

  if (uid) {
    return <Navigate to={`${redirectTo}`} replace></Navigate>
  }
  return children
}