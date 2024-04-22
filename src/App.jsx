import { Route, Routes } from 'react-router-dom'
import './App.css'
import LandinPage from './pages/LandinPage'
import WatchHistory from './pages/WatchHistory'
import Home from './pages/Home'

import Header from './components/Header.jsx'
import FooterSection from './components/FooterSection.jsx'

function App() {

  return (
    <>
    <Header></Header>
    <Routes>
     <Route path='/' element={<LandinPage/>}></Route>
     <Route path='/home' element={<Home/>}></Route>
     <Route path='/watch-history' element={<WatchHistory/>}></Route>
    </Routes>
    <FooterSection></FooterSection>
   
    </>
  )
}

export default App
