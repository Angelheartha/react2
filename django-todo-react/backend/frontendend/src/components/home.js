import React from 'react';
import Signup from "./signup";


const Home = (props) =>{


  const handleLogin = (data) =>{
     props.setLoggedInStatus("ログインなう")
     props.setUser(data.user)
     console.log("miss")
  }




const handleSuccessfulAuthentication = (data) =>{
        navigate("/Dashboard");
        props.handleLogin(data);


   }



  return(
  <div>
    <h1>Home</h1>
    <h2>ログイン状態:{props.loggedInStatus}</h2>
    <Signup handleSuccessfulAuthentication={handleSuccessfulAuthentication} handleLogin={handleLogin}/>
  </div>
  )
}

export default Home;