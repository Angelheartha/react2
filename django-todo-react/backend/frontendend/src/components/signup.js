import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../axiosApi";


const Signup = (props) => {


   const[email, setEmail] = useState("")
   const[password, setPassword] = useState("")
   const[username, setUsername] = useState("")
   const navigate = useNavigate()




const handleSuccessfulAuthentication = (data) =>{
        navigate("/Dashboard");
        //props.handleLogin()//


   }



   const handleSubmit = (event) => {
         axiosInstance.post('/user/create/',
             {
                            username: username,
                            email: email,
                            password: password

            },
            {withCredentials:true}
            ).then(response=>{
               props.handleLogin()
               if(response.statusText === 'Created'){
               handleSuccessfulAuthentication(response.data)
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

                   <button type="submit">Signup</button>
                </form>
            </div>
        )

}

export default Signup;