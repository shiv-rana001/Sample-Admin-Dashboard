import React, { useState } from 'react'
import './App.css'
import UserManagement from './pages/UserManagement'
import TaskManagement from './pages/TaskManagement'

function App() {
  const [UserName, setUserName] = useState([]);
  const TransferUserName = (names) => {
    setUserName(names)
  }


  return (
    <>
      <UserManagement NameArr={TransferUserName} />
      <TaskManagement UserName={UserName} />
    </>
  )
}

export default App
