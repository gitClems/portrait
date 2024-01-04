import { Route, Routes } from "react-router-dom";
import AppBar from "./components/appBar/appBar";
import "./App.scss"
import Home from "./components/home/index";
import About from "./components/about/index";
import Works from "./components/work/index";
function App() {
  return (
    <>
      <AppBar></AppBar>
      <Routes>
          <Route path='/' index element={<Home />} />
          <Route path='/work' index element={<Works />} />
          <Route path='/about' index element={<About />} />
      </Routes>
    </>
  );
}

export default App;
