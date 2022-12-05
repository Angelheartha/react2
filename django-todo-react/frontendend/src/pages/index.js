import React , {useContext, useState, createContext, useEffect} from 'react';
import Signup from "./signup";
import { useRouter } from 'next/router'
import Link from 'next/link';
import axios from 'axios';


import {LoginStatusContext} from '../pages/_app';



const Home = (props) =>{
      const router = useRouter()
      const {loggedInStatus, setLoggedInStatus } = useContext(LoginStatusContext);
      const {handleSuccessfulAuthentication} =  useContext(LoginStatusContext);
      const {handleLogout} =useContext(LoginStatusContext);



const handleLogin = () =>{
  setLoggedInStatus("ログインなう");
  }


const handleLogoutClick = () => {
        axios.get("http://127.0.0.1:8000/", { withCredentials: true })
            .then(response => {
                handleLogout()
                console.log("ll")
            }).catch(error => console.log("ログアウトエラー", error))
    };




  return(
  <div>
    <h1>Home</h1>
    <h2>ログイン状態:{loggedInStatus}</h2>

    <button onClick={handleLogoutClick}>ログアウト</button>

  </div>
  )
};



export default Home;