import "./index.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Homepage from "./pages/Homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MacPage from "./pages/MacPage";
import Iphone from "./pages/Iphone";
import Ipad from "./pages/Ipad";
import Store from "./pages/Store";
import WatchPage from "./pages/WatchPage";
import AirPodPage from "./pages/AirPodPage";
import OnlyOnApplePage from "./pages/OnlyOnApplePage";
import TvAndHomePage from "./pages/TvAndHomePage";
import SupportPage from "./pages/SupportPage";

export default function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/store" element={<Store />} />
          <Route path="/macpage" element={<MacPage />} />
          <Route path="/ipad" element={<Ipad />} />
          <Route path="/iphone" element={<Iphone />} />
          <Route path="/watch" element={<WatchPage />} />
          <Route path="/airpods" element={<AirPodPage />} />
          <Route path="/onlyonapples" element={<OnlyOnApplePage />} />
          <Route path="/tvandhome" element={<TvAndHomePage />} />
          <Route path="/support" element={<SupportPage />} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
}
