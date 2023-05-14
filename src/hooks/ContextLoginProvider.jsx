import { createContext, useState } from "react"

const LoginContext = createContext(null)

const ContextLoginProvider = ({ children }) => {
  const [uid, setUid] = useState(false)

  return (
    <LoginContext.Provider value={{ uid, setUid }}>
      {children}
    </LoginContext.Provider>
  )
}

export { ContextLoginProvider, LoginContext }