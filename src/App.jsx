/* eslint-disable no-unused-vars */
import {Login,Home, Nav,Footer , SignUp, Contact, Products, Rent, Buy} from "./components/index.jsx";
import { BrowserRouter, Routes, Route, } from "react-router-dom";

function App() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <BrowserRouter>
        <Nav />
        <div className="flex-grow w-full"> {/* Adjusted padding for mobile */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<Products />} />
            {/* <Route path="/post/:postId" element={<Post />} /> */}
            {/* <Route path="/search/:search" element={<Search />} /> */}
            <Route path="/contact" element={<Contact />} />
            {/* <Route path="/profile" element={<Profile />} /> */}
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/rent/:productId" element={<Rent />} />
            <Route path="/buy/:productId" element={<Buy/>} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;