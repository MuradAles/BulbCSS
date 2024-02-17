import Home from "./views/Home_Page";
import About from "./views/About_Page";
import NavBar from "./router/NavBar";
import { Route, Routes } from "react-router-dom";
function App(){
  return(
    <div className="App">
      <NavBar />
      <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
      </Routes>
  </div>
  )
}
export default App;