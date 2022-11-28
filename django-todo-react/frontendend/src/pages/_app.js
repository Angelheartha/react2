import '../styles/globals.css'
import Navbar from "../components/navbar";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Navbar />
      <div className="golinks">
        <h1 className="message">You are always welcome!</h1>
        <Component {...pageProps} />
      </div>
    </div>
  )
}

export default MyApp