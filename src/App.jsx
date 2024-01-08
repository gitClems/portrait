import { Route, Routes } from "react-router-dom";
import AppBar, { removeMenu } from "./components/appBar";
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
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path='/error' element={<Error />} />
        <Route path='/work/:id' element={<Detail />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App