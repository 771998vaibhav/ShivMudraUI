import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Navbar from './components/Navbar'
import BannerImage from './components/BannerImage';

import PageFooter from './components/PageFooter';
import OrderForm from './components/OrderForm';
import{BrowserRouter,Routes,Route} from 'react-router-dom'
import AdminPannel from './components/AdminPannel';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
{/* <Navbar />
      <BannerImage />
     < OrderForm/>
     <PageFooter/> */}

     <BrowserRouter>
    <Routes>

      <Route path='/home' element={
        <>
         <Navbar />
      <BannerImage />
     < OrderForm/>
     <PageFooter/>
        </>
      }>
        
      </Route>

      <Route path='/admin' element={
        <>
          <Navbar />
          <BannerImage /><br></br>
      <AdminPannel/>
        </>
      }>
        
      </Route>
    </Routes>
     </BrowserRouter>
    </div>
  )
}
import form from './components/form';
export default App
