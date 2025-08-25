import Header from './component/layout/Header/Header'
import Footer from "./component/layout/Footer/Footer"
import { Outlet } from "react-router"
import { getAccountUserAPI } from './service/api.service'
import { useContext, useEffect } from 'react'
import { AuthContext } from './component/context/auth.context'

const App = () => {
  useEffect(() => {
    fetchUserInfo();
  }, []);

  const { setUserLoging } = useContext(AuthContext);


  const fetchUserInfo = async () => {
    try {
      const res = await getAccountUserAPI();
      if (res.data) {
        console.log("User Info:", res.data);
        setUserLoging(res.data.user);
      }
    } catch (error) {
      console.error("Error fetching user info:", error);
    }
  }

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}
export default App
