import { Task } from '@/interfaces/task'
import React, { FC } from 'react'
import { TaskTimer } from '.'

interface TaskItemProps {
  task: Task;
  onDelete: (id: number) => void;
}

const TaskItem:FC<TaskItemProps> = ({task,onDelete}) => {
  const [isTimerRunning, setIsTimerRunning] = React.useState(false);
  const onTaskClick = () => {
    setIsTimerRunning(!isTimerRunning);
  }
  const onDeleteClick = (e:any) => {
    e.stopPropagation();
    onDelete(task.id);
  }
  return (
    <div className='lg:col-span-6 lg:col-start-4 col-span-10 col-start-2 relative'>
      <div onClick={onTaskClick} className="cursor-pointer border rounded-md p-4 flex justify-between hover:scale-105 transition-all duration-100">
        <div>
          <h1 className="text-2xl font-bold">{task.title}</h1>
          <ul>
            <li>{task.completed}</li>
            <li>Created At: {task.createdAt.toLocaleString()}</li>
          </ul>
          {task.timer > 0 && <p>Timer: {task.timer}</p>}
        </div>
        <div className='flex p-2'>
          {
            isTimerRunning &&
            <button className='p-1 animate-pulse'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
            </button>
          }
          <button onClick={onDeleteClick} className='p-1 hover:scale-125'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
            </svg>
          </button>
        </div>
      </div>
      <TaskTimer startTimer={isTimerRunning}/>
    </div>
  )
}

export default TaskItem