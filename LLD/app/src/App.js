import About from "./Study_CMP/About";
import Body from "./Study_CMP/Body";
import { HashRouter, Route, Routes, Link } from "react-router-dom";
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

  return (
    <HashRouter>
      <div>
        <header className="text-2xl font-bold py-5 bg-black text-white text-center flex justify-between">
          <h1>Hello World</h1>
          <nav className="p-2 m-2 w-[80%] text-md flex justify-between">
            <Link to="/" className="p-2">Home</Link>
            <Link to="/about" className="p-2">About</Link>
            <Link to="/accordian" className="p-2">Accordian</Link>
            <Link to="/image-slider" className="p-2">ImageSlider</Link>
            <Link to="/team" className="p-2">Team</Link>
            <Link to="/comments" className="p-2">Nested Comments</Link>
            <Link to="/pagination" className="p-2">Pagination</Link>
            <Link to="/live-chat" className="p-2">Live Chat</Link>
            <Link to="/search-ui" className="p-2">SearchUI</Link>
            <Link to="/login" className="p-2">Login</Link>
            <select value={lang} onChange={(e) => setLang(e.target.value)} className="font-black">
              <option value="en">English</option>
              <option value="hi">Hindi</option>
              <option value="sp">Spanish</option>
              <option value="ru">Russian</option>
            </select>
          </nav>
        </header>
        
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/about" element={<About lang={lang} />} />
          <Route path="/accordian" element={<Accordion />} />
          <Route path="/image-slider" element={<ImageSlider />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/team" element={<Team />} />
          </Route>
          <Route path="/comments" element={<Comments />} />
          <Route path="/pagination" element={<Pagination />} />
          <Route path="/live-chat" element={<LiveChat />} />
          <Route path="/search-ui" element={<SearchUI />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
