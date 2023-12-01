import { useState } from 'react'
import { createContext } from 'react'
import './App.css'
import Form from './components/Form'
import Section1 from './components/Section1'
import Section2 from './components/Section2'
import Section3 from './components/Section3'

export const UserContext = createContext(null)

function App() {

  const [user, setUser]=useState()

  console.log(user, "app")
  return <UserContext.Provider value={{user, setUser}}>
    <Form />
    <Section1 />
    <Section2/>
    <Section3/>
  </UserContext.Provider>
}

export default App
