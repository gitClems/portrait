import { Route, Routes } from "react-router-dom";
import AppBar from "./components/appBar/appBar";
import "./App.scss"
import Home from "./components/home/index";
import About from "./components/about/index";
import Works from "./components/work/index";
import Error from "./components/error";
function App() {
  return (
    <>
      <AppBar></AppBar>
      <Routes>
        {/* <Route path='/' index element={<Layout />} /> */}
        <Route path='/portrait' index element={<Home />} />
        <Route path='/portrait/work' element={<Works />} />
        <Route path='/portrait/about' element={<About />} />
        <Route path='/portrait/error' element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
