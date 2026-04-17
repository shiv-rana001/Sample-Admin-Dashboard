import React, { useState, useEffect } from 'react'
import Search from '../component/User/Search'
import UserForm from '../component/User/UserForm'
import UserList from '../component/User/UserList'
import UserStat from '../component/User/UserStat'
import '../css/User.css'
const UserManagement = ({ NameArr }) => {
    const savedStorage = localStorage.getItem("users")
    const [users, setUsers] = useState(savedStorage ? JSON.parse(savedStorage) : [])
    const [search, setSearch] = useState("")
    const handleAddUser = (user) => {
        setUsers([...users, user])
    }
    useEffect(() => {
        localStorage.setItem("users", JSON.stringify(users))
        NameArr(users.map(u => u.name))
    },[users,NameArr]) //useEffect is used to update the local storage and the name array whenever the users array is updated
    const handleDelete = (index) => {
        const newUsers = [...users]
        newUsers.splice(index, 1)
        setUsers(newUsers)
    }
    const filteredUsers = users.filter(user =>
        user.name.toLowerCase().includes(search.toLowerCase())
    )


    return (
        <>
            <h1>User Management</h1>
            <p className='text-[#aaa]'>Total {users.length} users</p>

            <Search search={search} setSearch={setSearch} />

            <div className='mid-section'>
                <div className="user-form">
                    <UserForm onAddUser={handleAddUser} />
                </div>
                <div className="user-list">
                    <UserList usersList={filteredUsers} handleDelete={handleDelete} />
                </div>
            </div>
            <UserStat usersList={users} />
        </>
    )
}

export default UserManagement