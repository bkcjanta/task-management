'use client'
import Image from 'next/image'
import AddTask from '@/components/AddTask'
import TaskList from '@/components/TaskList'

export default function Home() {
  return (
    <main className="flex flex-row w-full h-screen p-10 bg-teal-500">
    <div className='w-1/2 h-full p-2 bg-slate-200'>
       {/* left section */}
      <section className="w-full bg-gray-100 flex-COL">
        <h1 className="text-4xl font-bold">Task Manager</h1>
        <AddTask />
      </section>
      {/* right section */}
      <section className="flex flex-col w-full bg-gray-100">
     
        <TaskList />
       
      </section>
    </div>
      
      
    </main>
  )
}
