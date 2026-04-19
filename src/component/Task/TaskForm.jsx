import React,{useState} from 'react'

const TaskForm = ({UserName,onAddTask}) => {
    const [TaskData, setTaskData] = useState({
        title:"",
        description:"",
        assignee:"",
        priority:"",
        dueDate:"",
        checked:false,
        status:"Pending"
    })

    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log(TaskData);
        onAddTask(TaskData)
        setTaskData({title:"",description:"",assignee:"",priority:"",dueDate:"",checked:false})
    }
  return (
    <div className='TaskFrom-container'>
        <form action="" className='tm-con-form w-full md:w-[30vw] lg:w-[20vw]' onSubmit={(e)=>handleSubmit(e)}>
            <h3>New Task</h3>
            <input className='tm-input' type="text" placeholder='Task title' aria-label="Task Title" value={TaskData.title} onChange={(e)=>setTaskData({...TaskData,title:e.target.value})} />
            <textarea className='tm-input' name="" placeholder='Description (optional)' aria-label="Task Description" id="" value={TaskData.description} onChange={(e)=>setTaskData({...TaskData,description:e.target.value})}></textarea>
            <select className='tm-select' name="" id="" aria-label="Assign to User" value={TaskData.assignee} onChange={(e)=>setTaskData({...TaskData,assignee:e.target.value})}>
                <option defaultValue disabled value="">--Assign to User--</option>
                {UserName.map((item,index)=>{
                    return (
                        <option key={index} value={item} >{item}</option>
                    )
                })}
            </select>
            <p className='text-gray-500 text-[14px]' style={{marginTop:"10px"}}>priority</p>
            <div className='tm-form-btn flex gap-2' role="group" aria-label="Select Task Priority">
                <button type="button" className={`form-btn transition-all duration-300 ease-in-out hover:bg-yellow-600 ${TaskData.priority === "Low" ? "active" : ""}`} aria-pressed={TaskData.priority === "Low"} onClick={()=>setTaskData({...TaskData,priority:"Low"})}>Low</button>
                <button type="button" className={`form-btn transition-all duration-300 ease-in-out hover:bg-green-600 ${TaskData.priority === "Medium" ? "active" : ""}`} aria-pressed={TaskData.priority === "Medium"} onClick={()=>setTaskData({...TaskData,priority:"Medium"})}>Medium</button>
                <button type="button" className={`form-btn transition-all duration-300 ease-in-out hover:bg-red-600 ${TaskData.priority === "High" ? "active" : ""}`} aria-pressed={TaskData.priority === "High"} onClick={()=>setTaskData({...TaskData,priority:"High"})}>High</button>
            </div>
            <input type="date" className='tm-input' aria-label="Due Date" value={TaskData.dueDate} onChange={(e)=>setTaskData({...TaskData,dueDate:e.target.value})} />
            <button className='form-btn w-full transition-all duration-300 ease-in-out hover:bg-blue-600' type='submit'>Add Task</button>
        </form>
    </div>
  )
}

export default TaskForm