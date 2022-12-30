// frontend/src/components/Modal.js
import React, { Component, useContext, useState, createContext, useEffect} from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Input,
  Label
} from "reactstrap";

import {LoginStatusContext} from '../pages/_app';
//import '../styles/style.css';
//import '../styles/App.css';
//import '../styles/index.css';
//import 'bootstrap/dist/css/bootstrap.css';



export default function Act(props){

const {inputt,setInputt} = useContext(LoginStatusContext);
const {textareaa,setTextareaa} = useContext(LoginStatusContext);

const aalert = () => {
  //alert.success('your message is already sent!! i reply in 5 days bussine daysss');
    setInputt([]);
    setTextareaa([]);
  };

  return (
     <div id="overlay">
         <div id="modal" className="modall">
      <div>
        <form className="formtext" onSubmit={()=>{handleSubmit()}} >
          <p>E-mail</p>
          <input className="input" name="email" value={inputt} onChange={(e) => setInputt(e.target.value)}/>
          <p>Message</p>
          <textarea className="textarea" name="email" value={textareaa} onChange={(e) => setTextareaa(e.target.value)}/>
          <p>I am available at this moment!</p>
        <button onClick={props.onClick}>Close</button>
        <button type="button" onClick={aalert }>
          Submit
        </button>

        </form>

      </div>
    </div>
     </div>

  );

}
