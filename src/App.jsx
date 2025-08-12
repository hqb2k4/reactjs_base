import Header from './component/layout/Header/Header'
import Footer from "./component/layout/Footer/Footer"
import { Outlet } from "react-router"

const App = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}
export default App
