import React, { useState } from 'react'
import axios from 'axios'
import axiosInstance from "../axiosApi";
import { useNavigate } from "react-router-dom";
import App from "./App";

// Login関数コンポーネントへ書き換え
export default function Login(props) {
    // password_confirmationフィールドを削除
     const [email, setEmail] = useState("")
     const [password, setPassword] = useState("")
     const [username, setUsername] = useState("")
     const navigate = useNavigate()




const handleSuccessfulAuthentication = (data) =>{
        navigate("/Dashboard");
        props.handleLogin()
  }


    const handleSubmit = (event) => {
        // 通信先のURLを/loginに書き換え
                axiosInstance.post("/token/obtain/",
            {
                // ここのpassword_confirmationフィールドも削除
                    username: username,
                    email: email,
                    password: password,

            },
            { withCredentials: true }
        ).then(response => {
            //props.handleLogin()//
            //console.log(response)//
            console.log(response)
            if (response.statusText === "OK") {
                 handleSuccessfulAuthentication(response.data)
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

                <button className="button" type="submit">Login</button>
            </form>
        </div>
    )
}

