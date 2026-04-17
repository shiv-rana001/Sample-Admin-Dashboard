import React,{useState,useEffect} from 'react'
import '../css/Task.css'    
import TaskCards from '../component/Task/TaskCards'
import TaskForm from '../component/Task/TaskForm'
import TaskList from '../component/Task/TaskList'

const TaskManagement = ({UserName}) => {
  const savedTaskData = localStorage.getItem("TaskData")
  const [TaskData, setTaskData] = useState(savedTaskData ? JSON.parse(savedTaskData) : [])
  const TaskFormData = (data)=>{
    setTaskData([...TaskData,data])
  }
  useEffect(() => {
    localStorage.setItem("TaskData", JSON.stringify(TaskData))
  },[TaskData])
  const total = TaskData.length
  const completed = TaskData.filter(task => task.checked).length
  const pending = TaskData.filter(task => !task.checked).length
  const progress = Math.round((completed / total) * 100)
  return (
    <div className='TaskM-container'>  
        <h1>Task Management</h1>
        <p className='text-[#aaa]'>Total {total} tasks - {progress}% completed</p>
        <div className="tm-cards flex justify-evenly gap-5">
            <TaskCards title="Total" desc={total} color="text-purple-400" />
            <TaskCards title="Completed" desc={completed} color="text-green-600" />
            <TaskCards title="Pending" desc={pending} color="text-blue-600" />
            <TaskCards title="Progress" desc={progress} color="text-yellow-600" />
        </div>
        <div className="tm-tabs">
            <button className='tm-tab active'>All ({total})</button>
            <button className='tm-tab'>Completed ({completed})</button>
            <button className='tm-tab'>Pending ({pending})</button>
        </div>
        <div className="tm-form-card flex gap-6">
          <div className='tm-form'>
          <TaskForm UserName={UserName} onAddTask={TaskFormData}/>
          </div>
          <div className="tm-list">
            <TaskList TaskData={TaskData} setTaskData={setTaskData}/>
          </div>
        </div>
    </div>
  )
}

export default TaskManagement