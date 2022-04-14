import "./index.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Homepage from "./pages/Homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MacPage from "./pages/MacPage";
import Iphone from "./pages/Iphone";
import Ipad from "./pages/Ipad";

export default function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/macpage" element={<MacPage />} />
          <Route path="/ipad" element={<Ipad />} />
          <Route path="/iphone" element={<Iphone />} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
}
