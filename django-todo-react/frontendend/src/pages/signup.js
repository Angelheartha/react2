import { useNavigate } from "react-router-dom";
//import axiosInstance from "/utils/axiosApi";
import axios from 'axios';
//import { useState,} from "react";
import React , {useContext, useState, createContext, useEffect} from 'react';

import App from "../components/navbar";
import Link from 'next/link';
import {LoginStatusContext} from '../pages/_app';




const Signup = (props) => {


 //  const[email, setEmail] = useState("")
 //  const[password, setPassword] = useState("")
 //  const[username, setUsername] = useState("")
 //  const navigate = useNavigate()
     const {handleSuccessfulAuthentication} = useContext(LoginStatusContext);
     //const handleLogin = props.handleLogin;
     //const local = props.local;
     const {username,setUsername } = useContext(LoginStatusContext);
     const {password, setPassword } = useContext(LoginStatusContext);
     const {email, setEmail } = useContext(LoginStatusContext);
     const {loggedInStatus, setLoggedInStatus } = useContext(LoginStatusContext);



//const handleSuccessfulAuthentication = (data) =>{
//        navigate("/Dashboard");
       // props.handleLogin()
 //  }
     const handleLogin = () =>{
     setLoggedInStatus("ログインなう");
  }



   const handleSubmit = (event) => {
         axios.post('http://52.194.229.247:8000/cores/user/create/',
             {
                            username: username,
                            email: email,
                            password:password
            },
            {withCredentials:true}
            ).then(response=>{
               handleLogin()
               if(response.statusText === 'Created'){
               //console.log(response)
               handleSuccessfulAuthentication(response);
               local()
               console.log(response)
               }

            }).catch (error =>{
              console.log("registration error")
            })
            event.preventDefault()
            }




        return (
            <div>
                <p>Signup</p>

                <form className="form" onSubmit={handleSubmit}>
                    <input
                       type="email"
                       name="email"
                       placeholder="E-mail"
                       value={email}
                       onChange={event => setEmail(event.target.value)}
                    />
                    <input
                       type="password"
                       name="password"
                       placeholder="Password"
                       value={password}
                       onChange={event => setPassword(event.target.value)}
                    />
                    <input
                       type="username"
                       name="username"
                       placeholder="Username"
                       value={username}
                       onChange={event => setUsername(event.target.value)}
                    />

                   <button className="button" type="submit">Signup</button>
                </form>
            </div>
        )

}

export default Signup;