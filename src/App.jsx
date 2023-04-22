import {BrowserRouter ,Route, Routes } from "react-router-dom"
import Navbar from "./Components/Navbar/Navbar"
import Home from "./Pages/Home/Home"
import Booking from "./Pages/Booking/Booking"

const App = () => {
  return (
    <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/booking" element={<Booking />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
