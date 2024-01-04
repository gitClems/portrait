import { Route, Routes } from "react-router-dom";
import AppBar from "./components/appBar/appBar";
import "./App.scss"
import Home from "./components/home/home";
function App() {
  return (
    <>
      <AppBar></AppBar>
      <Routes>
        <Route>
          <Route path='/' index element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
