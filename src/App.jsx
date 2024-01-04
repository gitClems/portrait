import { Route, Routes } from "react-router-dom";
import "./App.scss"
import Home from "./components/home/index";
import Layout from "./components/layout/layout";
import AppBar from "./components/appBar/appBar";
function App() {
  return (
    <>
      <AppBar></AppBar>
      <Routes>
        <Route path='/' element={<Layout />} />
        <Route index element={<Home />} />
        {/* <Route path='/work' element={<Works />} />
        <Route path='/about' element={<About />} />
        <Route path='/error' element={<Error />} /> */}
      </Routes>
    </>
  );
}

export default App;
