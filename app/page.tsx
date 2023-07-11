'use client'
import Image from 'next/image'
import AddTask from '@/components/AddTask'
import TaskList from '@/components/TaskList'
import TaskItem from '@/components/TaskItem'
import React from 'react'

export default function Home() {
  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)

  return (
    <main className="flex flex-row w-full h-screen p-10 bg-teal-500">
    <div className='w-1/2 h-full p-2 bg-slate-200'>
       {/* left section */}
      <section className="w-full bg-gray-100 flex-COL">
        <div className='flex flex-row justify-between w-full p-2 bg-teal-200'>
          <h1 className="text-xl font-bold">Task Manager</h1>
          <button onClick={handleClick} className={!show?'w-8 h-8 bg-teal-500 rounded-full hover:bg-teal-600 hover:scale-110':'w-8 h-8 bg-red-500 rounded-full hover:bg-red-600 hover:scale-110'}>{!show?"+":"X"}</button>
        </div>
       {show? 
       <div className='w-full h-full'>
        <AddTask setShow={handleClick}  />
       </div>
       
       :
       <section className="flex flex-col w-full h-full overflow-hidden bg-gray-100 scroll-auto">
        <TaskList />
      </section>
      }
      </section>

    </div>
      <div className='w-1/2 h-full bg-slate-300'>
        <TaskItem />
      </div>
      
    </main>
  )
}
