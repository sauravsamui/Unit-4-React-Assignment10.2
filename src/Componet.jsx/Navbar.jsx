import React from 'react'
import { useContext } from 'react'
import { AuthContext} from '../context/AuthContext'
const Navbar = () => {
  const {isAuthorized,toggleAuth} = useContext(AuthContext)
  return (
    <div>
    <nav className="navbar navbar-dark bg-dark">
    <button type="button" className="btn btn-outline-success"
    onClick={toggleAuth}>{!isAuthorized?"LogIn":"LogOut"}</button>
  </nav></div>
  )
}

export default Navbar