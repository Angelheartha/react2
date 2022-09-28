import React, { Component} from "react";
import { BrowserRouter, Router, Route, Routes, Link, useLocation} from "react-router-dom";
import Login from "./login";
import Signup from "./signup";
import Home from "./home";
import Dashboard from "./Dashboard";
import { useState,useEffect} from "react";
import axiosInstance from "../axiosApi";
import Modal from "./Modal";
import axios from "axios";
import { useAlert } from 'react-alert'




const App = () => {
  const [viewCompleted, setViewCompleted] = useState(false);
  const [todoList, setTodoList] = useState([]);
  const [modal, setModal] = useState(false);
  const [how, setHow] = useState("");
  const [what, setWhat] = useState("");
  const [activeItem, setActiveItem] = useState({title: "", description: "", completed: false });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [description,setDescription] = useState("");
  const alert = useAlert()
  const [input, setInput]=useState("");
  const [textarea, setTextarea]=useState("");
  const [loggedInStatus, setLoggedInStatus]=useState("未ログイン");
  const [user, setUser]=useState({});






  const location = useLocation();

  useEffect(()=>{
  refreshList();


  },[])




  useEffect(() =>{
   const list = () => {
   if(localStorage.localJWT){
   todoList();

   }
   }
   console.log('hey')
   list();
  },[Login])





  const componentDidMount = (props) => {
    refreshList();
  };

  const refreshList = (props) => {
    axios
      .get("http://localhost:8000/api/todos/")
      .then((res) => setTodoList(res.data))
      .catch((err) => console.log(err));
  };



const Act = (props) => {
 const alert = useAlert()

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
        <button type="button" onClick={aalert}>
        Submit
        </button>

        </form>

      </div>
    </div>
     </div>

  )
}

  const aalert = () => {
  alert.success('your message is already sent!! i reply in 5 days bussine daysss');
  setInput([]);
  setTextarea([]);
  };



  const toggle = () => {
    setModal(!modal);
  };



  const handleSubmit = (item, props) => {
    setModal(!modal);

        if (item.id) {
       axios
         .put(`http://localhost:8000/api/todos/${item.id}/`, item)
         .then(() => refreshList());
       return;
     }
     axios
       .post("http://localhost:8000/api/todos/", item)
       .then(() => refreshList());

     alert.success('Well done!!!');

  };

   const handleDelete = (item,props) => {
    axios
      .delete(`http://localhost:8000/api/todos/${item.id}/`)
      .then((res) => refreshList());
    alert.success('Bye-Bye');
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










    const handleLogout = async () => {
        try {
            const response = await axiosInstance.post('/blacklist/', {
                "refresh_token": localStorage.getItem("refresh_token")
            });
            localStorage.removeItem('access_token');
            localStorage.removeItem('refresh_token');
            axiosInstance.defaults.headers['Authorization'] = null;
            return response;
        }
        catch (e) {
            console.log(e);
        }
    };


        return (


            <div className="site">

                 <nav className="bottonss">
                    <Link className={"nav-linkk"} to={"/"}>Home</Link>
                    <Link className={"nav-linkk"} to={"/login/"}>Login</Link>
                    <Link className={"nav-linkk"} to={"/signup/"}>Signup</Link>
                    <Link className={"nav-linkk"} to={"/Dashboard/"}>Dashboard</Link>
                    <button className={"nav-bot"} onClick={handleLogout}>Logout</button>
                 </nav>
                 <div className="golinks">
                    <h1 className="message">You are always welcome!</h1>

                     <Routes>
                        <Route exact path={"/login/"} element={<Login />}/>
                        <Route exact path={"/signup/"} element={<Signup />}/>
                        <Route
                          exact path={"/"}
                          element={
                          <Home loggedInStatus={loggedInStatus} />
                          }
                          />

                        <Route
                          exact path={"/Dashboard/"}
                          element={
                          <Dashboard loggedInStatus={loggedInStatus} />
                          }
                          />


                     </Routes>

                 </div>
            </div>

        );
}
export default App;