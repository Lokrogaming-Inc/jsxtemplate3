import { BrowserRouter, Routes, Route } from "react-router-dom";

import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
{/* import Contact from "./pages/Contact"; */}
import Team from "./pages/Team";

export default function App() {
  return (
    <BrowserRouter>
<div className="min-h-screen bg-gradient-to-t from-amber-500 to-yellow-300">

      

        <Nav />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<NotFound />} />
          <Route path="/team" element={<Team />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
<div className="mb-0">
        <Footer />
</div>
      </div>

    </BrowserRouter>
  );
}
