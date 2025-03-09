import React, { useContext } from 'react'
import Sidebar from './components/Sidebar'
import ChatSec from './components/ChatSec'
import { dataContext } from './context/ApiContext'

const App = () => {
  // let data = useContext(dataContext)
  // console.log(data);
  return (
    <div className='flex'>
      <Sidebar/>
      <ChatSec/>  
    </div>
  )
}

export default App