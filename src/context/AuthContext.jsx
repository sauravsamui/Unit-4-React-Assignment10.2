import {useState, createContext } from "react";
import axios from "axios"
import { useRef } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({children})=>{
 
    const [isAuthorized,setIsAuthorized] = useState(false)
    
    
    let toggleAuth =()=>{
        axios.post("https://reqres.in/api/login",{
            email:"eve.holt@reqres.in",
            password:"cityslicka"
        }).then((res)=>{
        setIsAuthorized(!isAuthorized)
     })
       
    }


    let login =(details)=>{
      
    }

    return (
        <AuthContext.Provider value={{isAuthorized,toggleAuth}}>{children}</AuthContext.Provider>
    )
    
}