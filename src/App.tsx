import NavBar from "./components/views/navbar";
import Footer from "./components/views/footer";
import { Routes_dom } from "./Routes";
import "./styles/_app.scss";
function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="content">
        <Routes_dom />
      </div>
      <Footer />
    </div>
  );
}
export default App;
