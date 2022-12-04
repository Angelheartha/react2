import {user} from 'react'
//import { useState,} from "react";
import React , {useContext, useState, createContext, useEffect} from 'react';
import axios from 'axios'
//import axiosInstance from "/utils/axiosApi";
//import { useNavigate } from "react-router-dom";
import App from "../components/navbar";
import Link from 'next/link';
import {LoginStatusContext} from '../pages/_app';


// Login関数コンポーネントへ書き換え
export default function Login() {
    // password_confirmationフィールドを削除
     //const [email, setEmail] = useState("")
     //const [password, setPassword] = useState("")
     //const [username, setUsername] = useState("")
     //const navigate = useNavigate()



     const {handleSuccessfulAuthentication} = useContext(LoginStatusContext);
     //const handleLogin = props.handleLogin;
     //const local = props.local;
     const {username,setUsername } = useContext(LoginStatusContext);
     const {password, setPassword } = useContext(LoginStatusContext);
     const {email, setEmail } = useContext(LoginStatusContext);
     const {loggedInStatus, setLoggedInStatus } = useContext(LoginStatusContext);
  //useEffect(()=>{
  //checkLoginStatus();

  //},[])

  const handleLogin = () =>{
  setLoggedInStatus("ログインなう");
  }



//const handleSuccessfulAuthentication = (data) =>{
//        navigate("/Dashboard");
//        props.handleLogin()
  //}


const errr = (data) =>{
   props.err(event.target.value);
}


const emmm = (data) =>{
   props.emm(event.target.value);
}

const psss = (data) =>{
   props.pss(event.target.value);
}


    const handleSubmit = (event) => {
                axios.post("http://52.194.229.247:8000/cores/token/obtain/",
            {
                    username: username,
                    email: email,
                    password: password

            },
            { withCredentials: true }
        ).then(response => {
            handleLogin()//
            //console.log(response)//
            console.log(response)
            if (response.statusText === "OK") {
                 handleSuccessfulAuthentication(response.data)
                 local()
                 console.log(response)
            }
        }).catch(error => {
            console.log("registration error", error)
        })
        event.preventDefault()
    }



    return (
        <div>
            {/* ログインに変更 */}
            <p>Login</p>

            {/* フォーム内のpassword_confrmation入力フィールド削除 */}
            <form className="form" onSubmit={handleSubmit}>
                <input
                    type="email"
                    name="email"
                    placeholder="E-mail"
                    value={email}
                    onChange={event=>setEmail(event.target.value)}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={password}
                    onChange={event=>setPassword(event.target.value)}
                />
                <input
                    type="username"
                    name="username"
                    placeholder="Username"
                    value={username}
                    onChange={event=>setUsername(event.target.value)}
                />

                <button className="button" type="submit">Login</button>
            </form>
        </div>
    )
}