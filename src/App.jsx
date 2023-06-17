import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css'

import Home from './Pages/Home'
import NavBar from './Components/NavBar';
import NewPost from './Pages/NewPost';
function App() {

  return (
    <div className="app"> 
      <div className="container">
        
        <BrowserRouter>
          
          <NavBar/>
          <Routes>
          
            <Route path='/' element={<Home />}/>
            <Route path='/new' element={<NewPost />}/>
          </Routes>        
        </BrowserRouter>

      </div>
    </div>
      
  )
}

export default App
