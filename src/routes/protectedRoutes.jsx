import { useContext } from 'react'
import { LoginContext } from '../hooks/ContextLoginProvider'
import { Navigate } from 'react-router-dom'

export const ProtectedLogin = ({ children, redirectTo = '/administracion' }) => {
  const { uid, } = useContext(LoginContext)
  if (!uid) {

    return <Navigate to={`${redirectTo}`} replace></Navigate>
  }

  return children
}
