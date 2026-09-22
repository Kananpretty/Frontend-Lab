import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import FrontendMentor from "./pages/FrontendMentor/FrontendMentor";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="frontend-lab-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/frontend-mentor" element={<FrontendMentor />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
