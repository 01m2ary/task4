import "./App.css";
import MainHeader from "./components/Header/header";
import HomeScreen from "./screens/Home/home.jsx";
import AboutScreen from "./screens/About/about.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import InfoScreen from "./screens/Info/infoScreen.jsx";

function App() {
  return (
    <div>
      <BrowserRouter>
        <MainHeader />
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/about" element={<AboutScreen />} />
          <Route path="/info/:id" element={<InfoScreen />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
