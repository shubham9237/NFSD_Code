import About from "./Study_CMP/About";
import Body from "./Study_CMP/Body";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Team from "./Study_CMP/Team";
import Login from "./Study_CMP/Login";
import ProtectedRoute from "./Study_CMP/ProtectedRoute";
import { useState } from "react";
import Comments from "./Study_CMP/comments/Comments";
import ImageSlider from "./Study_CMP/Image-slider/ImageSlider";
import Pagination from "./Study_CMP/Pagination/Pagination";
import LiveChat from "./Study_CMP/LiveChat/LiveChat";
import Accordion from "./Study_CMP/Accordion";
import SearchUI from "./Study_CMP/searchUI/SearchUI";

function App() {
  const [lang, setLang] = useState("en");
  return <div>
    <header className="text-2xl font-bold py-5 bg-black text-white text-center flex justify-between">
      <h1>Hello World</h1>
      <nav className="p-2 m-2 w-[80%] text-md flex justify-between">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/accordian">Accordian</a>
        <a href="/image-slider">ImageSlider</a>
        <a href="/team">Team</a>
        <a href="/comments">Nested Comments</a>
        <a href="/pagination">Pagination</a>
        <a href="/live-chat">Live Chat</a>
        <a href="/search-ui">SearchUI</a>
        <a href="/login">Login</a>
        <select value={lang} onChange={(e)=>setLang(e.target.value)} className="font-black">
          <option value="en">English</option>
          <option value="hi">Hindi</option>
          <option value="sp">Spanish</option>
          <option value="ru">Russian</option>
        </select>
      </nav>
    </header>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Body />}></Route>
        <Route path="/about" element={<About lang={lang} />}></Route>
        <Route path="/accordian" element={<Accordion />}></Route>
        <Route path="/image-slider" element={<ImageSlider />}></Route>
        <Route element={<ProtectedRoute />}>
          <Route path="/team" element={<Team />}></Route>
        </Route>
        <Route path="/comments" element={<Comments />}></Route>
        <Route path="/pagination" element={<Pagination />}></Route>
        <Route path="/live-chat" element={<LiveChat />}></Route>
        <Route path="/search-ui" element={<SearchUI />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  </div>;
}

export default App;
