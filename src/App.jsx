import { Route, Routes } from 'react-router-dom'
import './App.css'
import MyNavbar from './components/MyNavbar'
import { Home,Movies,MoviesDetails,MoviesForm, NotFound } from './pages'
function App() {
  return (
    <>
      <MyNavbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='movies' element={<Movies/>}/>
      <Route path='movies/:id' element={<MoviesDetails/>}/>
      <Route path='movies/:id/edit' element={<MoviesForm/>}/>
      <Route path='*' element={<NotFound/>}/>
    </Routes>
    </>
  )
}

export default App
