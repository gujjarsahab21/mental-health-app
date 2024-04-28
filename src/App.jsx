import Home from './pages/Home'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/Signup'
import ChatBot from './pages/ChatBot'
import YogaTherapy from './pages/YogaTherapy'
import ReadingTherapy from './pages/ReadingTherapy'
import LaughingTherapy from './pages/LaughTherapy'
import ChildTherapy from './pages/ChildTherapy'
import AudioTherapy from './pages/AudioTherapy'
import NoAuth from './utils/NoAuth'
import Auth from './utils/Auth'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<NoAuth><Login /></NoAuth>} />
        <Route path="/signup" element={<NoAuth><Signup /></NoAuth>} />
        <Route path="/chat" element={<ChatBot />} />
          <Route path="/yoga" element={<YogaTherapy />} />
          <Route path="/laugh" element={<LaughingTherapy />} />
          <Route path="/reading" element={<ReadingTherapy />} />
          <Route path="/child" element={<ChildTherapy />} />
          <Route path="/audio" element={<AudioTherapy />} />
        <Route path="/" element={<Auth />} >
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
