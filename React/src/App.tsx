import { Routes, Route } from 'react-router-dom'
import About from './page/About'
import Contact from './page/Contact'
import Home from './page/home'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </>
  )
}

export default App
