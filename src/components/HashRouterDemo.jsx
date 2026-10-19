
import {
  HashRouter,
  Routes,
  Route,
} from "react-router-dom";

import Navbar from "./Navbar";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Contact from "../Pages/Contacts";


export default function HashRouterDemo() {
  return (
    <HashRouter>
      <div className="space-y-4">
        <div>
          <h3 className="text-xl font-bold text-indigo-700">
            HashRouter Demo
          </h3>
          <p className="mt-1 text-sm text-slate-600">
            Watch the URL change when you navigate.
          </p>
        </div>

        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </HashRouter>
  );
}
