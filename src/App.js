import Blog from "./Components/Blog"
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"
import { useContext, useEffect } from "react"
import { Appcontext } from "./context/Appcontext"
import "./App.css"

export default function App() {
  const { fetchblogpost}=useContext(Appcontext);

  useEffect(()=>{
    fetchblogpost();
  },[]);

  return(
    <div className="flex justify-center items-center w-full h-full gap-y-1 flex-col ">
      <Navbar/>
      <Blog/>
      <Footer/>
    </div>
  )
}
