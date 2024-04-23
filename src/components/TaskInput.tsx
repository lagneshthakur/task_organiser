import React, { useState } from 'react'

interface TaskInputProps {
  handleAddTask: (taskTitle: string) => void
}

const TaskInput = ({handleAddTask}: TaskInputProps) => {
  const [taskTitle, setTaskTitle] = useState('');
  
  const addTaskOnEnter = (e: any) => {
    if(e.key === 'Enter') {
      handleAddTask(e.target.value)
      setTaskTitle('')
    }
  }

  const handlePlusClick = () => {
    handleAddTask(taskTitle)
    setTaskTitle('')
  }

  return (
    <div className="relative min-h-12 lg:col-span-6 lg:col-start-4 border rounded-md my-4 col-span-10 col-start-2">
        <div onClick={handlePlusClick} className='absolute -left-8 text-3xl cursor-pointer'>+</div>
        <input value={taskTitle} onChange={(e)=> {setTaskTitle(e.target.value)}} onKeyUp={addTaskOnEnter} className="w-full h-full text-2xl font-bold text-gray-600 p-4"></input>
    </div>
  )
}

export default TaskInput