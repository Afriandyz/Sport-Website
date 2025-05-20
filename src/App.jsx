import React from 'react'
import Navbar from './components/Navbar/Navbar'
import MobilelNavbar from './components/Navbar/MobilelNavbar'

const App = () => {
  return (
    <main>
      <div className='pattern'></div>

      <div className='wrapper'>
        <div>
          <Navbar />
          <MobilelNavbar />
        </div>
      </div>
    </main>
  )
}

export default App