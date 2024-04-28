import Home from './pages/Home'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/Signup'
import ChatBot from './pages/ChatBot'
import YogaTherapy from './pages/YogaTherapy'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"  element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/chat" element={<ChatBot/>} />
        <Route path="/yoga" element={<YogaTherapy/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
