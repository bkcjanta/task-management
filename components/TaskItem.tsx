'use client'
import React, { useEffect } from 'react'
import taskStore from '@/stores/TaskStore'
import {observer} from 'mobx-react'
const TaskItem:React.FC = () => {
   const [editMode, setEditMode] = React.useState(false)
   const [task, setTask] = React.useState(taskStore.task)
   
useEffect(() => {
    setTask(taskStore.task);
}, [editMode])

    

    const handleEdit = () => {
    setEditMode(!editMode);
    }

    const handleSave = () => {
        console.log(task);
        taskStore.updateTask(task);
        taskStore.setTask(task);
        setEditMode(false);
    }
    
    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setTask({...task, [e.target.name]: e.target.value});
    }
    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTask({...task, [e.target.name]: e.target.value});
    }
    
    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setTask({...task, [e.target.name]: e.target.value});
    }
    
        
  return (
     <section className='w-full h-full p-2 bg-slate-200'>
      <div className='flex flex-row items-center justify-between w-full p-1 bg-teal-400'>
        <h1 className='text-xl font-bold w-fit'>Task </h1>
       <div>
        {
            editMode? <input type="text" className='w-full p-1 text-xl font-bold bg-teal-300' name="title" value={task.title} onChange={(e)=>handleTitleChange(e)}/>:
            <h1 onClick={handleEdit} className='text-xl font-bold'>{task.title}</h1>
        }
        <p className='text-xs'>{taskStore.task?.date?.split("T")[0]}</p>
        <p className='text-xs bg-teal-300'>{taskStore.task?.date?.split("T")[1]}</p>
       </div>
                 <button onClick={()=>taskStore.resetTask()} className={'w-8 h-8 bg-red-500 rounded-full hover:bg-red-600 hover:scale-110'}>X</button>
      </div>
      <div className='flex flex-row justify-between w-full p-2 shadow-lg'>
        <p className={`p-1 text-xs ${task.status==="To Do"?"bg-red-300":(task.status==="In Progress"?"bg-yellow-300":"bg-green-300")} rounded-md group-hover:cursor-text`}>{taskStore.task?.status}</p>
        <div>
        {
            editMode? <select className='p-1 bg-gray-300 rounded-md' name="status" value={task.status} onChange={(e)=>handleSelectChange(e)}>
            <option value="To Do">To Do</option>
            <option value="In Progress">In Progress</option>
            <option value="Done">Completed</option>
        </select>:null
        }
        </div>
       <div className="flex flex-row gap-10">
        {
            editMode? <button onClick={handleSave} className='p-1 bg-green-400 rounded-md hover:scale-110 hover:bg-green-500'>save</button>:null
        }
       
       </div>
      </div>
     {
         !editMode? <div  onClick={handleEdit} className='w-full h-[calc(100%-100px)] overflo-hidden overflow-y-auto p-2 bg-white '>
        {taskStore.task.description.split("\n").map((item, i) => (
            <p key={i}>{item}</p>
            )

        )}
      </div>:
        <div className='w-full h-[calc(100%-100px)] overflo-hidden overflow-y-auto p-2 bg-white '>
        <textarea className='w-full h-full p-2 border-2 border-gray-300 rounded-md' name="description" value={task.description} onChange={(e)=>handleChange(e)}></textarea>
        </div>
        
     }



    </section>
  )
}

export default observer(TaskItem)
