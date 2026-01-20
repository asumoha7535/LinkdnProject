import React, { Children, createContext } from 'react'

export const authDataContext = createContext()

function AuthContext({children}) {
    const serverUrl = "https://linkdnproject.onrender.com"
    let value = {
        serverUrl
    }
  return (
    <>
   <authDataContext.Provider value={value}>
{children}
</authDataContext.Provider>
    </>
  )
}

export default AuthContext
