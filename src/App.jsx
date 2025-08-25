import Header from './component/layout/Header/Header'
import Footer from "./component/layout/Footer/Footer"
import { Outlet } from "react-router"
import { getAccountUserAPI } from './service/api.service'
import { useContext, useEffect } from 'react'
import { AuthContext } from './component/context/auth.context'
import { Spin } from 'antd'

const App = () => {
  useEffect(() => {
    fetchUserInfo();
  }, []);

  const { setUserLoging, isAppLoading, setIsAppLoading } = useContext(AuthContext);

  // const delay = () => {
  //   return new Promise((resolve) => setTimeout(resolve, 2000));
  // }

  const fetchUserInfo = async () => {
    try {
      // await delay();
      const res = await getAccountUserAPI();
      if (res.data) {
        console.log("User Info:", res.data);
        setUserLoging(res.data.user);
      }
    } catch (error) {
      console.error("Error fetching user info:", error);
    } finally {
      setIsAppLoading(false);
    }
  }

  return (
    <>
      {isAppLoading === true ?
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <Spin
            size="large"
            tip="Loading..."
          />
        </div>
        : (
          <>
            <Header />
            <Outlet />
            <Footer />
          </>
        )}
    </>
  )
}
export default App
