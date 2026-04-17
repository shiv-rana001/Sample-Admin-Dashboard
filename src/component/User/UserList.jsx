import React from 'react'

const UserList = ({ usersList,handleDelete }) => {
    return (
        <>
            {usersList.map((user, index) => (
                <div className='cards' key={index}>
                    <div>{user.name.substring(0,2).toUpperCase()}</div>
                    <div>
                        <p className='text-[#aaa]'>{user.name}</p>
                        <p className='text-[#aaa]'>{user.email}</p>
                        <p className='text-[#aaa]'>{user.role}</p>
                    </div>
                    <div className="delete-btn">
                    <button onClick={()=>handleDelete(index)}>Delete</button>
                    </div>
                </div>
            ))}
        </>
    )
}

export default UserList