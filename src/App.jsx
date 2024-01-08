import { Route, Routes } from "react-router-dom";
import AppBar from "./components/appBar";
import "./App.scss"
import Home from "./pages/index/home";
import Works from "./pages/index/works";
import About from "./pages/index/about";
import Error from "./pages/index/error";
import Footer from "./components/footer";
import Detail from "./pages/index/detail";
import Contact from "./pages/index/contact";

function App() {
  return (
    <>
      <AppBar />
      <Routes>
        <Route path='/' index element={<Home />} />
        <Route path='/work' element={<Works />} />
        <Route path='/about' element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='/error' element={<Error />} />
        <Route path='/work/:id' element={<Detail />} />
        <Route path='/error' element={<Error/>}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App