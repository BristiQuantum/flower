
import './App.css'
import { Outlet } from 'react-router-dom'
import NavBar from './page/component/NavBar/NavBar'


function App() {
  (0)

  return (
    <div className="">
      <NavBar></NavBar>
      <Outlet></Outlet>
    </div>
  )
}

export default App
