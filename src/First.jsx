import Header from "./Header"
import { Outlet } from "react-router-dom"
import Home from "./Home"
function First() {
  return (
      <>
       <Header/>
       <Outlet/>
      </>
  )
}

export default First