//import '../styles/globals.css';
import '../styles/style.css';
import '../styles/App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
} from "react-router-dom";


import Navbar from "../components/navbar";
//import { BrowserRouter} from 'react-router-dom';

function MyApp({ Component, pageProps }) {
  return (
    <div id="root">
      <Navbar />
      <div className="golinks">
        <h1 className="message">You are always welcome!</h1>
      <Component {...pageProps} />
      </div>

    </div>
  )
}

export default MyApp


//