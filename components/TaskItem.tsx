'use client'
import React from 'react'
import taskStore from '@/stores/TaskStore'
import {observer} from 'mobx-react'
const TaskItem:React.FC = () => {
    console.log(taskStore.task);
  return (
     <section className='w-full h-full p-2 bg-slate-300'>
      <div className='flex flex-row items-center w-full'>
        <div className='flex items-center justify-center w-10 h-10 rounded-full bg-slate-500'>B</div>
       <div>
         <h1>{taskStore.task?.title}</h1>
        <p className='text-xs'>{taskStore.task?.date?.split("T")[0]}</p>
        <p className='text-xs bg-teal-300'>{taskStore.task?.date?.split("T")[1]}</p>

       </div>
        <div className=''></div>
      </div>
      <div>
        <p>{taskStore.task?.description}</p>

      </div>
    </section>
  )
}

export default observer(TaskItem)
