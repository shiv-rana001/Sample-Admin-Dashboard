import React,{useState} from 'react'

const TaskForm = ({UserName,onAddTask}) => {
    const [TaskData, setTaskData] = useState({
        title:"",
        description:"",
        assignee:"",
        priority:"",
        dueDate:"",
        checked:false
    })

    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log(TaskData);
        onAddTask(TaskData)
        setTaskData({title:"",description:"",assignee:"",priority:"",dueDate:"",checked:false})
    }
  return (
    <div className='TaskFrom-container'>
        <form action="" className='tm-con-form w-[20vw]' onSubmit={(e)=>handleSubmit(e)}>
            <h3>New Task</h3>
            <input className='tm-input' type="text" placeholder='Task title' value={TaskData.title} onChange={(e)=>setTaskData({...TaskData,title:e.target.value})} />
            <textarea className='tm-input' name="" placeholder='Description (optional)' id="" value={TaskData.description} onChange={(e)=>setTaskData({...TaskData,description:e.target.value})}></textarea>
            <select className='tm-select' name="" id="" value={TaskData.assignee} onChange={(e)=>setTaskData({...TaskData,assignee:e.target.value})}>
                <option selected disabled value="">--Assign to User--</option>
                {UserName.map((item,index)=>{
                    return (
                        <option key={index} value={item} >{item}</option>
                    )
                })}
            </select>
            <p className='text-gray-500 text-[14px]' style={{marginTop:"10px"}}>priority</p>
            <div className='tm-form-btn flex gap-2'>
                <div className={`form-btn ${TaskData.priority === "Low" ? "active" : ""}`} onClick={()=>setTaskData({...TaskData,priority:"Low"})}>Low</div>
                <div className={`form-btn ${TaskData.priority === "Medium" ? "active" : ""}`} onClick={()=>setTaskData({...TaskData,priority:"Medium"})}>Medium</div>
                <div className={`form-btn ${TaskData.priority === "High" ? "active" : ""}`} onClick={()=>setTaskData({...TaskData,priority:"High"})}>High</div>
            </div>
            <input type="date" className='tm-input' value={TaskData.dueDate} onChange={(e)=>setTaskData({...TaskData,dueDate:e.target.value})} />
            <button className='form-btn w-full transition-all duration-300 ease-in-out hover:bg-blue-600' type='submit'>Add Task</button>
        </form>
    </div>
  )
}

export default TaskForm