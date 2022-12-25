import '/src/styles/globals.css';
import 'bootstrap/dist/css/bootstrap.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
} from "react-router-dom";
import Navbar from "../components/navbar";
import React , {useContext, useState, createContext, useEffect} from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router'
import axios from 'axios';
import { Nav }  from '../components/Nav';
import { Alert } from '../components/Alert';
import Head from 'next/head';



export const LoginStatusContext = createContext();


export function MyApp ({ Component, pageProps }) {
 const [loggedInStatus, setLoggedInStatus]=useState("未ログイン");
 const [viewCompleted, setViewCompleted] = useState(false);
 const [todoList, setTodoList] = useState([]);
 const [modal, setModal] = useState(false);
 const [how, setHow] = useState("");
 const [what, setWhat] = useState("");
 const [activeItem, setActiveItem] = useState({title: "", description: "", completed: false });
 const [isModalOpen, setIsModalOpen] = useState(false);
 const [description,setDescription] = useState("");
 // const alert = useAlert()//
 const[email, setEmail] = useState("")
 const[password, setPassword] = useState("")
 const[username, setUsername] = useState("")
 const [inputt, setInputt]=useState("");
 const [textareaa, setTextareaa]=useState("");

     const router = useRouter();
 //const [loggedInStatus, setLoggedInStatus]=useState("未ログイン");


const handleSuccessfulAuthentication = () =>{
        router.replace("/login");

   }


 const handleLogout = () => {
    setLoggedInStatus("未ログイン")
    handleSuccessfulAuthentication()
    //setUser({})
  }





  return (


    <div id="root">

        <Head>
                <title>Next.js - Alert (Toaster) Notifications</title>
                <link href="//netdna.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet" />
        </Head>

     <Navbar />
     <div className="golinks">
          <h1 className="message">ようこそ!!</h1>

      <LoginStatusContext.Provider
       value={{loggedInStatus,setLoggedInStatus,email,setEmail,username,setUsername,password,setPassword,handleLogout,inputt,setInputt,textareaa,setTextareaa}}>          <Alert />
          <Component {...pageProps} />
      </LoginStatusContext.Provider>
     </div>

    </div>
  )
}

export default MyApp


//