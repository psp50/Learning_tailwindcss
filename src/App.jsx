import { useState } from 'react'
import './App.css'
import ProfileCard from './components/ProfileCard'
import Flexbox from './components/Flexbox'
import Product from './components/Product'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <div className='bg-gray-100 flex justify-center items-center border-2 min-h-screen p-4'>
        <ProfileCard />
      </div> */}
      {/* <Flexbox /> */}
      <Product />
    </>
  )
}

export default App
