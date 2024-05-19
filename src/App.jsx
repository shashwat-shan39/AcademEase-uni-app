import React, { useState } from 'react' 
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import Videoplayer from './Components/Videoplayer/Videoplayer'

const App = () => {

  const [playState, setPlaystate] = useState(false);

  return (
    <div>
      <Navbar />
      <Hero />
      <div className='container'>
        <Title subtitle='our program' title='What We Offer'/>
        <Programs />
        <About setPlaystate={setPlaystate}/>
        <Title subtitle='Gallery' title='Campus Photos'/>
        <Campus />
        <Title subtitle='Testimonials' title='What Student Says'/>
        <Testimonials />
        <Title subtitle='Contact us' title='Get in Touch'/>
        <Contact />
        <Footer />
      </div>
      <Videoplayer playState={playState} setPlaystate={setPlaystate}/>
      
    </div>
  )
}

export default App