'use client'
import Image from 'next/image'
import AddTask from '@/components/AddTask'
import TaskList from '@/components/TaskList'
import TaskItem from '@/components/TaskItem'
import React from 'react'
import taskStore from '@/stores/TaskStore'
import {observer} from 'mobx-react'

const  Home:React.FC=()=> {
  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)


  return (
    <main className="flex flex-row w-full h-screen p-2 bg-teal-500 md:p-5 lg:p-10">
    <div className={taskStore.task.id?" w-1/2 h-[100%] hidden md:w-1/2 md:block lg:block lg:w-1/2 p-2 bg-slate-200":`w-full md:block lg:block h-full p-2 bg-slate-200`}>
       {/* left section */}
      <section className={ "w-full h-[100%] bg-gray-100 flex-col"}>
        <div className='flex flex-row justify-between w-full p-2 bg-teal-400'>
          <h1 className="text-xl font-bold">Task Manager</h1>
          <button onClick={handleClick} className={!show?'w-8 h-8 bg-yellow-400 rounded-full hover:bg-yellow-500 hover:scale-110':'w-8 h-8 bg-red-500 rounded-full hover:bg-red-600 hover:scale-110'}>{!show?"+":"X"}</button>
        </div>
       {show? 
       <div className='w-full h-full'>
        <AddTask setShow={handleClick}  />
       </div>
       
       :
       <section className="flex flex-col w-full h-[100%] ">
        <TaskList />
      </section>
      }
      </section>

    </div>
      <div className={taskStore.task.id?`w-full md:w-1/2 lg:w-1/2 flex bg-slate-300`:`w-0 hidden h-full `}>
        <TaskItem />
      </div>
      
    </main>
  )
}

export default observer(Home)