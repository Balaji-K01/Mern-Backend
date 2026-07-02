import { Routes ,Route} from 'react-router-dom'
import Register from '../component/Register'
import Login from '../component/Login'
import Home from '../component/Home'

const AppRoutes = () => {
  return (
 <>
 <Routes>

  <Route path='/' element={<Register/>}/>
  <Route path='/login' element={<Login/>}/>
  <Route path='/home' element={<Home/>}/>
 </Routes>
 </>
  )
}

export default AppRoutes