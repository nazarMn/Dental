import './App.css'
import  Header  from './components/Header/Header'
import Home from './components/Home/Home'
import AboutUs from './components/AboutUs/AboutUs'


function App() {

  return (
    <div className='wrap'>
      <div className="homePage">

    <Header />

    <Home />


    </div>

    <AboutUs />

    </div>
  )
}

export default App
