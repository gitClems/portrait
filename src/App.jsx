import { Route, Routes } from "react-router-dom";
import AppBar from "./components/appBar";
import "./App.scss"
import Home from "./pages/index/home";
import Works from "./pages/index/works";
import About from "./pages/index/about";
import Footer from "./components/footer";
import Detail from "./pages/index/detail";
import Contact from "./pages/index/contact";
import Page404 from "./pages/index/page404";


function App() {
  return (
    <div id="app" data-theme = 'dark'>
      <AppBar />
      <Routes>
        <Route path='/' index element={<Home />} />
        <Route path='/work' element={<Works />} />
        <Route path='/about' element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='/work/:id' element={<Detail />} />
        <Route path='/*' element={<Page404 />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App