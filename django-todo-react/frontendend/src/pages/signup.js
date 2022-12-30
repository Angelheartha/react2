import { useNavigate } from "react-router-dom";
import axios from 'axios';
import React , {useContext, useState, createContext, useEffect} from 'react';
import App from "../components/navbar";
import Link from 'next/link';
import { useRouter } from 'next/router'
import {LoginStatusContext} from '../pages/_app';
//import {local} from "../components/navbar";
import {username,setUsername } from '../pages/_app';
import {password, setPassword } from '../pages/_app';
import {email, setEmail }  from '../pages/_app';
//import local from  "../components/navbar";
//import Image from "../components/Image";
//import Calendar from 'react-calendar'
import { Component } from "react";
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import Select from 'react-select'


const Signup = (props) => {


    const {username,setUsername } = useContext(LoginStatusContext);
    const {password, setPassword } = useContext(LoginStatusContext);
    const {email, setEmail } = useContext(LoginStatusContext);
     const {loggedInStatus, setLoggedInStatus } = useContext(LoginStatusContext);
     const router = useRouter();
     const {selectedFile, setSelectedFile} = useContext(LoginStatusContext);
	const {isFilePicked, setIsFilePicked} = useContext(LoginStatusContext);
//	const {username,setUsername } = useContext(LoginStatusContext);
   // const {password, setPassword } = useContext(LoginStatusContext);
   // const {email, setEmail } = useContext(LoginStatusContext);
   // const {loggedInStatus, setLoggedInStatus } = useContext(LoginStatusContext);
    //const router = useRouter();


    const items = ['男性', '女性'];
    const item = ['同意する'];
    const [vals, setVals] = React.useState('性別');
    const [val, setVal] = React.useState('同意');





const handleSuccessfulAuthentication = () =>{
        router.replace("/Dashboard");

   }


const handleChangee = (e) => {
    setVal(e.target.value);
  };

    const handleChangeee = (e) => {
    setVals(e.target.value);
  };




  const initialDate = new Date()
  const [startDate, setStartDate] = useState(initialDate)
  const handleChange = (date) => {
    setStartDate(date)
  }




const local = () => {


var array = []

var crazy =  []

var obj = {
  'username': username,
  'email': email,
  'password':password
};


array.push(obj);
var setjson = JSON.stringify(obj);
localStorage.setItem('キー', setjson);


}



const changeHandler = (event) => {
		setSelectedFile(event.target.files[0]);
		setIsFilePicked(true);
	};


const handleSubmission = () => {

}


     const handleLogin = () =>{
     setLoggedInStatus("ログインなう");
  }



   const handleSubmit = (event) => {
         axios.post('http://52.196.20.77:8000/cores/user/create/',
             {
                            username: username,
                            email: email,
                            password:password,
                            startDate:startDate,
                            vals:vals,
                            val:val,
                            setSelectedFile:setSelectedFile,
            },
            {withCredentials:true}
            ).then(response=>{
              setLoggedInStatus(username+"さん")
               if(response.statusText === 'Created'){
               handleSuccessfulAuthentication(response);
               local()
               }
            }).catch (error =>{
              console.log("registration error")
            })
            event.preventDefault()
            }



        return (
            <div>
            <form className="form" onSubmit={handleSubmit}>

        <div className="ke-tai">
            <div className="divdivdiv">
            <p>名前：</p>
            <input
                       type="username"
                       name="username"
                       placeholder="Username"
                       value={username}
                       onChange={event => setUsername(event.target.value)}
                    />
            </div>
            <div className="divdivdiv3">
            <p>メールアドレス:</p>
             <input
                       type="email"
                       name="email"
                       placeholder="E-mail"
                       value={email}
                       onChange={event => setEmail(event.target.value)}
                    />
            </div>
            <div className="divdivdiv3">
            <p>パスワード:</p>
            <input
                       type="password"
                       name="password"
                       placeholder="Password"
                       value={password}
                       onChange={event => setPassword(event.target.value)}
                    />
            </div>
            <div className="divdivdiv3">
            <p>アイコン写真:</p>
           <input  type="file" name="file" onChange={changeHandler} />
            </div>
            <div className="divdivdiv3">
            <p>誕生日:</p>
             <DatePicker
                        selected={startDate}
                        onChange={handleChange}
                       />
            </div>
            <div className="divdivdiv3">
            <p>性別:</p>
           {items.map((items) => {
          return (
            <div key={items}>
              <input
                id={items}
                type="radio"
                value={items}
                onChange={handleChangeee}
                checked={items === vals}
              />
              <label htmlFor={items}>{items}</label>
            </div>
          );
        })}
            </div>
            <div className="divdivdiv3">
            <p>同意:</p>
            <a　className="doui" href="https://menherasenpai.notion.site/457df49475494671807673a0a3346451">利用規約への同意</a>
        {item.map((item) => {
          return (
            <div key={item}>
              <input
                id={item}
                type="radio"
                value={item}
                onChange={handleChangee}
                checked={item === val}
              />
              <label htmlFor={item}>{item}</label>
            </div>
          );
        })}
            </div>
        </div>





                <table className="tableform" border="1">
                <tbody>
                <tr><td>名前:</td>
                <td><input
                       type="username"
                       name="username"
                       placeholder="Username"
                       value={username}
                       onChange={event => setUsername(event.target.value)}
                    /></td>
                </tr>
                <tr>
                <td>メールアドレス:</td><td><input
                       type="email"
                       name="email"
                       placeholder="E-mail"
                       value={email}
                       onChange={event => setEmail(event.target.value)}
                    /></td>
                </tr>
                <tr>
                <td>パスワード:</td><td><input
                       type="password"
                       name="password"
                       placeholder="Password"
                       value={password}
                       onChange={event => setPassword(event.target.value)}
                    /></td>
                </tr>

                <tr>
                  <td>アイコン写真:</td><td><input  type="file" name="file" onChange={changeHandler} /></td>
                </tr>
                <tr>
                  <td>誕生日:</td><td> <DatePicker
                        selected={startDate}
                        onChange={handleChange}
                       /></td>
                </tr>

                <tr>
                  <td>性別:</td><td>{items.map((items) => {
          return (
            <div key={items}>
              <input
                id={items}
                type="radio"
                value={items}
                onChange={handleChangeee}
                checked={items === vals}
              />
              <label htmlFor={items}>{items}</label>
            </div>
          );
        })}</td>
                </tr>
                <tr>
                  <td>同意:</td><td>
                  <a　className="doui" href="https://menherasenpai.notion.site/457df49475494671807673a0a3346451">利用規約への同意</a>
        {item.map((item) => {
          return (
            <div key={item}>
              <input
                id={item}
                type="radio"
                value={item}
                onChange={handleChangee}
                checked={item === val}
              />
              <label htmlFor={item}>{item}</label>
            </div>
          );
        })}
</td>
                </tr>

               </tbody>
               </table>

                   <button className="button" type="submit">Signup</button>
                </form>

		</div>
        )

}

export default Signup;