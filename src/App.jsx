import { Route, Routes } from "react-router-dom";
import AppBar from "./components/appBar";
import "./App.scss"
import Home from "./pages/index/home";
import Works from "./pages/index/works";
import About from "./pages/index/about";
import Footer from "./components/footer";
import Detail from "./pages/index/detail";
import Contact from "./pages/index/contact";
import Page404 from "./pages/index/error404";

// import { initializeApp } from "firebase/app";
// import { collection, getDocs, getFirestore } from "firebase/firestore/lite"

// const firebaseConfig = {
//   apiKey: "AIzaSyD5Y0L98Xne-8Qj2mVwFE2gUp-jFkbTDQI",
//   authDomain: "portrait-b960b.firebaseapp.com",
//   projectId: "portrait-b960b",
//   storageBucket: "portrait-b960b.appspot.com",
//   messagingSenderId: "197836500715",
//   appId: "1:197836500715:web:bfcd8715c13618fe4158ae",
//   measurementId: "G-C49YCVBB1G"
// };
// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);


// export const FetchUsers = async () => {
//   const users = []
//   try {
//     const usersRef = collection(db, "users");
//     const userSnapshot = await getDocs(usersRef);
//     userSnapshot.forEach((doc) => {
//       // console.log(`${doc.id} ==> ${JSON.stringify(doc.data())}`);
//       users.push(doc.data())
//     });

//   } catch (error) {
//     console.log(error.message);
//   }
//   return users
// }

function App() {
  return (
    <>
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
    </>
  );
}

export default App