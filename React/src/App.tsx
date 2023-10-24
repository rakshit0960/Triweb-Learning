import { Routes, Route } from 'react-router-dom'
import About from './page/About'
import Contact from './page/Contact'
import Products from './page/Products'
import Home from './page/Home'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/products' element={<Products />} />
      </Routes>
    </>
  )
}

export default App
