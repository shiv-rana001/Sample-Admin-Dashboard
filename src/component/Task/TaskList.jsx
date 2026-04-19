import React from 'react'

const TaskList = ({ TaskData,setTaskData }) => {
    const handleCheck = (index) => {
        const updated = [...TaskData]
        updated[index] = { ...updated[index], checked: !updated[index].checked } 
        setTaskData(updated)
    }
    const handleDelete = (index) => {
const updated = TaskData.filter((_, i) => i !== index)
        setTaskData(updated)
    }
    return (
        <>
            {TaskData.map((task, index) => {
                return (
                    <div key={index} className='tasklist-container border-red flex gap-2 '>
                        <div className='tasklist-checkbox'>
                            <input type="checkbox" checked={task.checked || false} onChange={() => handleCheck(index)} />
                        </div>
                        <div className="tasklist-card">
                            <div className="tasklist-card-header">
                                <h3>{task.title}</h3>
                                <p className='text-gray-500 text-[14px]'>{task.description}</p>
                            </div>
                            <div className="tasklist-card-body flex gap-5 text-[13px] items-center">
                                <span className={`tm-priority ${task.priority === "Low" ? "bg-yellow-600" : task.priority === "Medium" ? "bg-green-600" : "bg-red-600"}`}>{task.priority}</span>
                                <span className='tm-avatar avatar-rv'>{task.assignee.substring(0, 2).toUpperCase()}</span>
                                <span className='tm-user'>{task.assignee}</span>
                                <span className='tm-date overdue'>{task.dueDate}</span>
                                <span className={`tm-status-badge status-pending ${task.checked ? "status-done" : "status-pending"}`}>{task.checked ? "Done" : "Pending"}</span>
                            </div>
                        </div>
                        <div className="tasklist-card-btn">
                            <button onClick={() => handleDelete(index)}>Delete</button>
                        </div>
                    </div>
                )

            })}
        </>
    )
}

export default TaskList