import { Route, Routes } from "react-router-dom";
import AppBar from "./components/appBar/appBar";
import "./App.scss"
import Home from "./components/home/index";
import Layout from "./components/layout/layout";
import About from "./components/about/index";
import Works from "./components/work/index";
import Error from "./components/error";
function App() {
  return (
    <>
      <AppBar></AppBar>
      <Routes>
          {/* <Route path='/' index element={<Layout />} /> */}
          <Route path='/' index element={<Home />} />
          <Route path='/work' index element={<Works />} />
          <Route path='/about' index element={<About />} />
          <Route path='/error' index element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
