import {Navbar, TakeTest, About, Footer} from './components'
import './App.css'

function App() {


  return (
    <section className=' w-full bg-slate-500 overflow-hidden'>
      <Navbar />
      <TakeTest />
      <About />
      <Footer />
    </section>
  )
}

export default App
