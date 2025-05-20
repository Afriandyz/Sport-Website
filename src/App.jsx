import React from 'react'
import Navbar from './components/Navbar/Navbar'
import MobilelNavbar from './components/Navbar/MobilelNavbar'
import Hero from './components/Home/Hero'

const App = () => {
  return (
    <main>
      <div className='pattern'></div>

      <div className='z-10'>
        <div>
          <Navbar />
          <MobilelNavbar />
          <Hero />
        </div>
      </div>
    </main>
  )
}

export default App