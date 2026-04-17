import React,{useState} from 'react'

const UserForm = ({onAddUser}) => {
    const [FormData, setFormData] = useState({
        name:"",
        email:"",
        role:""
    })

    const handleSubmit = ()=>{
            console.log(FormData); //debug
            onAddUser(FormData); //sending to parent component
            setFormData({name:"",email:"",role:""}) //clearing the form
    }
  return (
    <>
    <form className='form-css' onSubmit={(e)=>handleSubmit(e)} >
        <h3>➕ New User Add Karo</h3>
        <input type="text" placeholder='Name' value={FormData.name} onChange={(e)=>setFormData({...FormData,name:e.target.value})} />
        <input type="text" placeholder='Email' value={FormData.email} onChange={(e)=>setFormData({...FormData,email:e.target.value})} />
        <select name="" id="" value={FormData.role} onChange={(e)=>setFormData({...FormData,role:e.target.value})}>
            <option value="" disabled>Select Role</option>
            <option value="Developer">Developer</option>
            <option value="Designer">Designer</option>
            <option value="Manager">Manager</option>
            <option value="Tester">Tester</option>
            </select>
        <button type='submit'>Add User</button>
    </form>
    </>
  )
}

export default UserForm