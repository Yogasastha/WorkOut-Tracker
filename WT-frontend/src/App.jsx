import Nav from "./Components/navComponents/Nav"
import { Route, Routes } from "react-router-dom"
import Home from "./Components/navComponents/Home"
import Leaderboard from "./Components/navComponents/Leaderboard"
import About from './Components/navComponents/About';
import Contact from './Components/navComponents/Contact';
import GetStart from './Components/navComponents/GetStart';

function App() {

  return (
    <>
    <Nav />
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ranking" element={<Leaderboard/>} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/get-started" element={<GetStart />} />
      </Routes>
    </>
  )
}

export default App
