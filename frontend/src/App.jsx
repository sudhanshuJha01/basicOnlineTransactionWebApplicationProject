import React from 'react'
import {BrowserRouter , Route , Routes} from 'react-router-dom'
import Signup from './pages/signup'
import SignIn from './pages/signin'
import Send from './pages/Send'
import Dashboard from './pages/Dashboard'
const App = () => {
  return (
    <div className='bg-slate-900 h-screen p-2'>
    <BrowserRouter>
     <Routes>
        <Route path='/signup' element={<Signup/>}/>
        <Route  path='/signin' element={<SignIn/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/send' element={<Send/>}/>
     </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App