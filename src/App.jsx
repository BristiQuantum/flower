import "./App.css";
import { Outlet } from "react-router-dom";
import NavBar from "./page/component/NavBar/NavBar";
import Footer from "./page/component/Footer/Footer";

function App() {
  return (
    <div className="">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
