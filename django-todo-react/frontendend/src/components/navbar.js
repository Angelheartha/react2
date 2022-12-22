import { Component} from "react";
import React, {useEffect, useReducer, useContext, createContext } from 'react'
import { BrowserRouter, Router, Route, Routes} from "react-router-dom";
import Link from 'next/link'
import { useNavigate } from "react-router-dom";
import Login from "../pages/login";
import Signup from "../pages/signup";
import Home from "../pages/index";
import Dashboard from "../pages/Dashboard";
import {useState} from "react";
import axios from 'axios';
//import axiosInstance from "/utils/axiosApi";
import Modal from "../components/Modal";
//import { useAlert } from 'react-alert'
import {LoginStatusContext} from '../pages/_app';

import { alertService } from '../components/alert.Service.js';


const Navbar = () => {
  const [viewCompleted, setViewCompleted] = useState(false);
  const [todoList, setTodoList] = useState([]);
  const [modal, setModal] = useState(false);
  const [how, setHow] = useState("");
  const [what, setWhat] = useState("");
  const [activeItem, setActiveItem] = useState({title: "", description: "", completed: false });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [description,setDescription] = useState("");
 // const alert = useAlert()//
  const [input, setInput]=useState("");
  const [textarea, setTextarea]=useState("");
  const [loggedInStatus, setLoggedInStatus]=useState("未ログイン");
//  const {handleLogout} = useContext(LoginStatusContext);



  useEffect(()=>{

  //console.log(local())


  },[])



const handleLogout = () => {
   setLoggedInStatus("未ログイン")
  //  setUser({})
  }




  const handleLogin = () =>{
     setLoggedInStatus("ログインなう")
     //setUser(data.user)//

  }


 // const err = () =>{
 //   setUsername("")
 //   }


 // const emm = () =>{
 //  setEmail("")
 // }

 // const pss =() =>{
 //  setPassword("")
 // }




  const handleSuccessfulAuthentication = () =>{
        navigate("/Dashboard");
        //handleLogin();

   }



  const componentDidMount = (props) => {
    refreshList();
  };

  const refreshList = (props) => {
    axios
      .get("http://52.196.20.77:8000/api/todos/")
      .then((res) => setTodoList(res.data))
      .catch((err) => console.log(err));
  };



const Act = (props) => {






    const [options, setOptions] = useState({
        autoClose: false,
        keepAfterRouteChange: false
    });

    const handleOptionChange = (e) => {
        const { name, checked } = e.target;
        setOptions(options => ({ ...options, [name]: checked }));
    }



  return (
     <div id="overlay">
         <div id="modal" className="modall">
      <div>
        <form onSubmit={()=>{this.handleSubmit()}} >
          <p>E-mail</p>
          <input />
          <p>Message</p>
          <textarea />
          <p>I am available at this moment!</p>
        <button onClick={props.onClick}>Close</button>
        <button className="btn btn-success m-1" type="button"
       onClick={() => alertService.success('Success!!', options)} >
        Submit
        </button>

        </form>

      </div>
    </div>
     </div>

  )
}

  var timerId;

  const showBox = () => {
  document.getElementById("temporaryBoX").style.display="block";
  timerId = setTimeout(closeBox, 5000);
  document.getElementById("btnShowBox").disabled=true;
  };



  const toggle = () => {
    setModal(!modal);
  };



  const handleSubmit = (item, props) => {
    setModal(!modal);

        if (item.id) {
       axios
         .put(`http://52.196.20.77:8000/api/todos/${item.id}/`, item)
         .then(() => refreshList());
       return;
     }
     axios
       .post("http://52.196.20.77:8000/api/todos/", item)
       .then(() => refreshList());

     alert('Well done!!!');

  };

   const handleDelete = (item,props) => {
    axios
      .delete(`http://52.196.20.77:8000/api/todos/${item.id}/`)
      .then((res) => refreshList());
    alert('Bye-Bye');
  };


  const createItem = (props) => {
    const item = { title: "", description: "", completed: false };
    setActiveItem(item);
    setModal(!modal);
  };

  const editItem = (item,props) => {
    setActiveItem(item);
    setModal(!modal);
  };


 const displayCompleted = (status) => {
    if (status) {
      return setViewCompleted(true);
    }else{
      return setViewCompleted(false);

  };
  };



  const renderTabList = (props) => {
    return (

      <div className="nav nav-tabs">
        <span
          onClick={() => displayCompleted(true)}
          className={viewCompleted ? "btn btn-danger active" : "btn btn-light"}
        >
          Complete
        </span>
        <span
          onClick={() => displayCompleted(false) }
          className={viewCompleted ? "btn btn-light" : "btn btn-danger active"}
        >
          Incomplete
        </span>
      </div>
    );
  };


  const renderItems = (props) => {

  const newItems = todoList.filter(
       (item) => item.completed === viewCompleted
     );




     return newItems.map((item, props) => (


       <li className="list-group-item d-flex justify-content-between align-items-center"
         key={item.id}

       >
         <span
           className={`todo-title mr-2 ${viewCompleted ? "completed-todo" : ""
             }`}
           title={item.description}
         >
           {item.title}
         </span>
         <span>
           <button
             className="btn btn-secondary mr-2"
             onClick={() => editItem(item)}
           >
             Edit
           </button>
           <button
             className="btn btn-danger"
             onClick={() => handleDelete(item)}
           >
             Delete
           </button>
         </span>
       </li>
     ));
  };


  const whattodo = () => {
      setDescription("You can write any recommendations for language studies on the Description. anything is ok");
  }


  const howtodo = () => {
    setDescription("You should write the day and to whom you write on the Title.⇒(ex).title:7/7 for Hamuster");
  }


  const closeModal = () => {
    setIsModalOpen(false)
  }


  const openModal = () => {
    setIsModalOpen(true)
  }



  const todolist = () => {
     return(
     <main className="container">
      <div className="nav-container">

<div className="button3">
        <button
          className="navi white How btn btn-primary"
          onClick={howtodo}
        >
          How to use
        </button>

        <button
          className="navi What btn btn-primary"
          onClick={whattodo}
        >
          What to write
        </button>


        <button
          className="navi contact btn btn-primary"
          onClick={() => { openModal() }}
        >
          Contact
        </button>
</div>

      {isModalOpen && <Act onClick={() => { closeModal() }} />}
      <p className="howtitle">{description}</p>
      <h1 className="text-uppercase text-center my-4">Memo</h1>
      <div className="row">
        <div className="col-md-6 col-sm-10 mx-auto p-0">
          <div className="card p-3">
            <div className="mb-4">
              <button
                className="btn btn-primary"
                onClick={createItem}
              >
                Add
              </button>
            </div>
            {renderTabList()}
            <ul className="list-group list-group-flush border-top-0">
              {renderItems()}
            </ul>
          </div>
        </div>
      </div>
      </div>
      {modal && (
        <Modal
          activeItem={activeItem}
          toggle={toggle}
          onSave={handleSubmit}
        />
      )}
    </main>


     )
  }










    //const handleLogout = async () => {
    //    try {
    //        const response = await axiosInstance.post('/blacklist/', {
    //            "refresh_token": localStorage.getItem("refresh_token")
    //        });
    //        localStorage.removeItem('access_token');
    //        localStorage.removeItem('refresh_token');
    //        axiosInstance.defaults.headers['Authorization'] = null;
    //        return response;
    //    }
    //    catch (e) {
    //        console.log(e);
    //    }
    //};


        return (


            <div className="site navbar navbar-expand-lg navbar-dark bg-blue">

           <div className="header">
             <button className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarToogleContent"
            aria-controls="navbarToogleContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
             <span className="navbar-toggler-icon"></span>
            </button>

            <input type="checkbox" className="drawer-btn" />

            <div className="header-nav">
             <ul className="header-menu">
              <li> <Link legacyBehavior href= "/"  >
                      <a className="nav-linkk">Home</a>
                    </Link></li>

               <li> <Link legacyBehavior href= "/login/" className="nav-linkk" >
                     <a className="nav-linkk">Login</a>
                    </Link></li>

                <li> <Link legacyBehavior href="/signup/" className="nav-linkk" >
                      <a className="nav-linkk">Signup</a>
                    </Link></li>

                 <li><Link legacyBehavior href="/Dashboard/" className="nav-linkk" >
                       <a className="nav-linkk">Dashboard</a>
                    </Link></li>

             </ul>
            </div>
            </div>

                 <nav className="bottonss">
                    <Link legacyBehavior href= "/" className="nav-linkk" >
                     <a className="nav-linkk">Home</a>
                    </Link>


                    <Link legacyBehavior href= "/login/" className="nav-linkk" >
                     <a className="nav-linkk">Login</a>
                    </Link>


                    <Link legacyBehavior href="/signup/" className="nav-linkk" >
                      <a className="nav-linkk">Signup</a>
                    </Link>


                    <Link legacyBehavior href="/Dashboard/" className="nav-linkk" >
                       <a className="nav-linkk">Dashboard</a>
                    </Link>

                 </nav>

            </div>

             // <button className={"nav-bot"} onClick={handleLogout}>Logout</button>
//<Login handleSuccessfulAuthentication={handleSuccessfulAuthentication} handleLogin={handleLogin} //err={err} emm={emm} pss={pss}
                      //  username={username} setUsername={setUsername} password={password} setPassword={setPassword} email={email} setEmail={setEmail} local={local}/>
              //   <Home handleLogin={handleLogin} handleLogout={handleLogout} loggedInStatus={loggedInStatus} />



                      //  <Link href="/signup/"
                      //  element={
                      //  <Signup handleSuccessfulAuthentication={handleSuccessfulAuthentication} handleLogin={handleLogin}
                      //  username={username} setUsername={setUsername} password={password} setPassword={setPassword} email={email} setEmail={setEmail} local={local}/>
                      //  }
                      //  />


                        //<link href="/Dashboard/"
                        //  element={
                        //  <Dashboard  loggedInStatus={loggedInStatus} />
                        //  }
                        //  />

        );
}

export default Navbar;