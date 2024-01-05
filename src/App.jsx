import { Route, Routes } from "react-router-dom";
import AppBar from "./components/appBar";
import "./App.scss"
import Home from "./pages/index/home";
import Works from "./pages/index/works";
import About from "./pages/index/about";
import Error from "./pages/index/error";
import Footer from "./components/footer";
import { person } from "./data/dataSet";
import Detail from "./pages/index/detail";
function App() {
  return (
    <>
      <AppBar />
      <Routes>
        <Route path='/' index element={<Home />} />
        <Route path='/work' element={<Works />} />
        <Route path='/about' element={<About profile = {person.profile[1]}/>} />
        <Route path='/error' element={<Error />} />
        <Route path='/work/detail' element={<Detail profile = {person.profile[1]}/>} />
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
