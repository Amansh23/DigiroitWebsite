import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Blogs } from "./pages/Blogs";
import { ContactUs } from "./pages/ContactUs";
import { NoPage } from "./pages/NoPage";
import { Portfolio } from "./pages/Portfolio";
import { Careers } from "./pages/Careers";
import { AboutUs } from "./pages/AboutUs";
import PrivacyPolicy from "./pages/PrivacyPolicy";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="careers" element={<Careers />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="contact-us" element={<ContactUs />} />
          <Route path="*" element={<NoPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy/>}/> 
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
