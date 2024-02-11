import { Header } from "../../Components"
import { Outlet } from "react-router-dom"

const MainMenu = () => {
  return (
    <>
    <Header/>
    <Outlet/>
    </>
  )
}

export default MainMenu