import React from 'react';
import Signup from "./signup";


const Home = (props) =>{



//const handleSuccessfulAuthentication = (data) =>{
//        navigate("/Dashboard");
 //       props.handleLogin(data);


//   }



  return(
  <div>
    <h1>Home</h1>
    <h2>ログイン状態:{props.loggedInStatus}</h2>
  </div>
  )
}

export default Home;