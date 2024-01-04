import { Route, Routes } from "react-router-dom";
import AppBar from "./components/appBar/appBar";
import "./App.scss"
import Home from "./components/home/index";
import About from "./components/about/index";
import Works from "./components/work/index";
import Error from "./components/error";
import Layout from "./components/layout/layout";
function App() {
  return (
    <>
      {/* <AppBar></AppBar> */}
      <Routes>
        <Route path='/' index element={<Layout />} />
        {/* <Route path='/' index element={<Home />} />
        <Route path='/work' element={<Works />} />
        <Route path='/about' element={<About />} />
        <Route path='/error' element={<Error />} /> */}
      </Routes>
    </>
  );
}

export default App;
