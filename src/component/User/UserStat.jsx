import React from 'react'

const UserStat = ({usersList}) => {
  return (
    <>
    <div className='user-stats'>
        <p className='text-[#aaa]'>Total Users: <span>{usersList.length}</span></p>
        <p className='text-[#aaa]'>Total Developers: <span>{usersList.filter(user=>user.role==="Developer").length}</span></p>
        <p className='text-[#aaa]'>Total Designers: <span>{usersList.filter(user=>user.role==="Designer").length}</span></p>
        <p className='text-[#aaa]'>Total Managers: <span>{usersList.filter(user=>user.role==="Manager").length}</span></p>
        <p className='text-[#aaa]'>Total Testers: <span>{usersList.filter(user=>user.role==="Tester").length}</span></p>
    </div>
    </>
  )
}

export default UserStat