import React from 'react'

const TaskCards = (props) => {
  return (
    <div className='task-card flex flex-col gap-2 justify-start items-start transition-all duration-300 ease-in-out hover:bg-blue-600 bg-[#363131]'>
        <h3 className='text-2xl'>{props.title}</h3>
        <p className={`${props.color} font-bold text-2xl`}>{props.desc}</p>
    </div>
  )
}

export default TaskCards