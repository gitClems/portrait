import { Route, Routes } from "react-router-dom";
import AppBar from "./components/appBar";
import "./App.scss"
import Home from "./pages/index/home";
import Works from "./pages/index/works";
import About from "./pages/index/about";
import Error from "./pages/index/error";
import Footer from "./components/footer";
import { person } from "./data/dataSet";
function App() {
  return (
    <>
      <AppBar />
      <Routes>
        <Route path='/' index element={<Home />} />
        <Route path='/work' element={<Works />} />
        <Route path='/about' element={<About />} />
        <Route path='/error' element={<Error />} />
      </Routes>
      <Footer
        name={person.name}
        year={person.year}
        tel={person.tel}
        linkedIn={person.linkedIn}
        gitHub={person.gitHub}
        adress={person.adress} />
    </>
  );
}

export default App;
