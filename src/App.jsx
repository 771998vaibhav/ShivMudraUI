import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Navbar from './components/Navbar'
import BannerImage from './components/BannerImage';

import PageFooter from './components/PageFooter';
import OrderForm from './components/OrderForm';




function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar />
      <BannerImage />
     < OrderForm/>
     <PageFooter/>
    </div>
  )
}
export default App
