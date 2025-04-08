import { Outlet } from "react-router-dom"
import AppFooter from "./components/layout/app.footer"
import AppHeader from "./components/layout/App.header"

const Layout = () => {

  return (
    <>
      <AppHeader />
      <Outlet />
      <AppFooter />
    </>
  )
}

export default Layout
