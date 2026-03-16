import { Routes, Route } from "react-router-dom";
import AppLayout from "./layout/AppLayout";

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Articles from "./pages/Articles"
import Contact from "./pages/Contact"

function App() {
  return (
    <Routes>

      <Route element={<AppLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/contact" element={<Contact />} />
      </Route>

    </Routes>
  );
}

export default App;