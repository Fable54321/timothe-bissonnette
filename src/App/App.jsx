import { Route, Routes } from 'react-router-dom'

import Home from './Home/Home'
import AboutMe from './Pages/AboutMe/AboutMe'
import Projects from './Pages/Projects/Projects'
import ContactMe from './Pages/ContactMe/ContactMe'

function App() {
  

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} >
          <Route index element={<AboutMe />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<ContactMe />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
