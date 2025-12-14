import Nav from "./Components/navComponents/Nav";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Leaderboard from "./Components/Leaderboard";
import About from "./Components/About";
import Challenge from "./Components/Challenge";
import Profile from "./Components/Profile";
import Footer from "./Components/Footer";

import "./Fa-icon/fontawesome";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Nav />

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ranking" element={<Leaderboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/challenge" element={<Challenge />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>

        <Footer />
      </main>
    </div>
  );
}

export default App;
