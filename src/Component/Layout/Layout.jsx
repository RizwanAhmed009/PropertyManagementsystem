import { Router } from 'react-router-dom'
import Sidebar from '../Sidebar/sidebar'
import TopNav from '../TopNav/Top__Nav'
const Layout = () => {
  return (
    <div className="layout">
      <Sidebar/>
      <div className="main__layout">
        <TopNav/>
        <div className="content">
         <Router/>
        </div>
      </div>
    </div>
  )
}

export default Layout