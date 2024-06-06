import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import Navbar from './components/navbar/Navbar'
import { BrowserRouter,Route ,Routes } from 'react-router-dom'
import NewCard from './components/new/NewCard'
import News from './components/new/News'

function App() {


  return (
    <> 
    {/* <BrowserRouter>
    <Routes>
        <Route extext path='/' element={<NewCard/>} />
        <Route path='/sports' element={<NewCard/>} />
        <Route path='/science' element={<NewCard/>} />
        <Route path='/health' element={<NewCard/>} />
        <Route path='/business' element={<NewCard/>} />
        <Route path='/technology' element={<NewCard/>} />
        
    </Routes>
</BrowserRouter> */}
<Navbar/>
<News pageSize={5}/>
    </>
  )
}

export default App
