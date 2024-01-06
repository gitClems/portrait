import { Route, Routes } from "react-router-dom";
import AppBar from "./components/appBar";
import "./App.scss"
import Home from "./pages/index/home";
import Works from "./pages/index/works";
import About from "./pages/index/about";
import Error from "./pages/index/error";
import Footer from "./components/footer";
import { person, projects } from "./data/dataSet";
import Detail from "./pages/index/detail";
import Contact from "./pages/index/contact";
function App() {
  return (
    <>
      <AppBar />
      <Routes>
        <Route path='/' index element={<Home />} />
        <Route path='/work' element={<Works />} />
        <Route path='/about' element={<About profile={person.profile[1]} />} />
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path='/error' element={<Error />} />
        <Route path='/work/:id' element={<Detail id={projects[0].id} title={projects[0].title} image={projects[0].image} />} />
      </Routes>
      <Footer
        name={person.name}
        year={person.year}
        tel={person.tel}
        linkedIn={person.linkedIn}
        gitHub={person.gitHub}
        adress={person.adress}
        email = {person.email}
        />
    </>
  );
}

export default App