import { createContext, useState } from "react"

const LoginContext = createContext(null)

const ContextLoginProvider = ({ children }) => {
  const [uid, setUid] = useState(() => localStorage.getItem('uid'))

  return (
    <LoginContext.Provider value={{ uid, setUid }}>
      {children}
    </LoginContext.Provider>
  )
}

export { ContextLoginProvider, LoginContext }