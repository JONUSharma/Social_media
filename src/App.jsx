import Header from "./assets/Header"
import Footer from "./assets/Footer"
import SideBar from "./assets/SideBar"
import PostComponent from "./assets/PostComponent"
import CreatePost from "./assets/CreatePost"
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import { useState } from "react"
import PostComponentProvider from "./assets/Store/PostContext"
import { Outlet } from "react-router-dom"
function App() {

  const [SelectedTap, setSelectedTap] = useState("Home")
  return (
    <>
      <PostComponentProvider>
        <div className="app-container">
          <Header ></Header>
          <SideBar setSelectedTap={setSelectedTap} SelectedTap={SelectedTap}></SideBar>
          {/* {
            SelectedTap === "Home" ? <PostComponent></PostComponent> : <CreatePost></CreatePost>
          } */}
          <Outlet />
          <Footer>  </Footer>
        </div>
      </PostComponentProvider>


    </>
  )
}

export default App
