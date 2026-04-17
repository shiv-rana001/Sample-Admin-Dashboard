import React,{useState,useEffect} from 'react'
import '../css/Task.css'    
import TaskCards from '../component/Task/TaskCards'
import TaskForm from '../component/Task/TaskForm'
import TaskList from '../component/Task/TaskList'

const TaskManagement = ({UserName}) => {
  const savedTaskData = localStorage.getItem("TaskData")
  const [TaskData, setTaskData] = useState(savedTaskData ? JSON.parse(savedTaskData) : [])
  const [activeTab, setActiveTab] = useState('all')
  const TaskFormData = (data)=>{
    setTaskData([...TaskData,data])
  }
  useEffect(() => {
    localStorage.setItem("TaskData", JSON.stringify(TaskData))
  },[TaskData])

  const filterScreen = TaskData.filter(task => {
    if(activeTab==="all") return true
    if(activeTab==="completed") return task.checked
    if(activeTab==="pending") return !task.checked
    return true
  })

  const total = TaskData.length
  const completed = TaskData.filter(task => task.checked).length
  const pending = TaskData.filter(task => !task.checked).length
  const progress = Math.round((completed / total) * 100)
  return (
    <div className='TaskM-container'>  
        <h1>Task Management</h1>
        <p className='text-[#aaa]'>Total {total} tasks - {progress}% completed</p>
        <div className="tm-cards flex justify-evenly gap-5">
            <TaskCards title="Total" desc={total} color="text-purple-400"  hover="hover:bg-yellow-600"/>
            <TaskCards title="Completed" desc={completed} color="text-green-600" hover="hover:bg-blue-600"/>
            <TaskCards title="Pending" desc={pending} color="text-blue-600" hover="hover:bg-green-600"/>
            <TaskCards title="Progress" desc={progress} color="text-yellow-600" hover="hover:bg-purple-600"/>
        </div>
        <div className="tm-tabs">
            <div className={`tm-tab transition-all duration-300 ease-in-out hover:bg-purple-600 ${activeTab === 'all' ? 'active' : ''}`} onClick={()=>setActiveTab('all')}>All ({total})</div>
            <div className={`tm-tab transition-all duration-300 ease-in-out hover:bg-green-600 ${activeTab === 'completed' ? 'active' : ''}`} onClick={()=>setActiveTab('completed')}>Completed ({completed})</div>
            <div className={`tm-tab transition-all duration-300 ease-in-out hover:bg-blue-600 ${activeTab === 'pending' ? 'active' : ''}`} onClick={()=>setActiveTab('pending')}>Pending ({pending})</div>
        </div>
        <div className="tm-form-card flex gap-6">
          <div className='tm-form'>
          <TaskForm UserName={UserName} onAddTask={TaskFormData}/>
          </div>
          <div className="tm-list">
            <TaskList TaskData={filterScreen} setTaskData={setTaskData}/>
          </div>
        </div>
    </div>
  )
}

export default TaskManagement