
import './App.css'
import {Routes , Route} from "react-router-dom"
import Signup from './components/Signup'
import Signin from './components/Signin'
import Dashboard from './components/Dashboard'
import { useState } from 'react'
function App() {
  const [userData, setUserData] = useState(null);
  const handleSignUp = (data) => {
    setUserData(data);
  };
  return (
    <>
    <Routes>
      <Route path="/" element={ <Signin onSignUp={handleSignUp}/>}/>
      <Route path="/signup" element={<Signup onSignUp={handleSignUp}/>}/>
      <Route path="/dashboard" element={<Dashboard userData={userData}/>}/>
    </Routes>   
    </>
  )
}

export default App
