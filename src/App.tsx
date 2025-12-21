import './App.css'
import Navigationbar from './sections/Navigationbar'
import Bodysection from './sections/Bodysection'
import Mood from './sections/Mood'
import Copingtools from './sections/Copingtools'
import UnsaidThoughts from './sections/UnsaidThoughts'
import TimeCapsule from './sections/TimeCapsule'
import BestieAiChat from './sections/BestieAiChat'
import VantaBirds from './components/VantaBirds'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <Navigationbar />
      
      <Routes>
        <Route path = "/vanta-birds" element = {<VantaBirds />} />
        <Route path = "/" element = {<Bodysection />} />
        <Route path = "/mood" element = {<Mood />} />
        <Route path = "/coping-tools" element = {<Copingtools/>} />
        <Route path = "/unsaid-thoughts" element = {<UnsaidThoughts/>}/>
        <Route path = "time-capsule" element = {<TimeCapsule/>}/>
        <Route path = "bestie-Ai" element = {<BestieAiChat />} />
      </Routes>
    </>
  )
}

export default App
