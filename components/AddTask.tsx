"use client"
import { useState } from 'react';
// import { useStore } from '@/hooks/useStore';
import { observer } from 'mobx-react';
import taskStore  from '@/stores/TaskStore';
import { values } from 'mobx'
interface toggle {
  setShow: (show: boolean) => void;
}

const AddTask: React.FC<toggle> =({setShow }) => { 
  const [title, setTitle] = useState('New Task');
  const [description, setDescription] = useState('');

const handleAddTask = () => {
    if(!title) return alert('Title is required');
    if(!description) return alert('Description is required');
    const newTask = {
      title,
      description,
      status: "To Do",
    };
    taskStore.addTask(newTask);
    setShow(false);

    setTitle('');
    setDescription('');
  };

  return (
    <section className='w-full h-full p-5'>
      <form onSubmit={(e) => e.preventDefault()}>
       <div>
         <label htmlFor='title'>
          Title
        </label>
        <br />
        <input
        className='w-full p-1 border-2 border-gray-300 rounded-md'
            type="text"
            value={title}
            name="title"
            id="title"
            onChange={(e) => setTitle(e.target.value)}
          />
       </div>
        <div>
          <label htmlFor='description'>
            Description
          </label>
          <br />
          <textarea
          className='w-full h-full p-1 border-2 border-gray-300 rounded-md'
            name="description"
            id="description"
            cols={30}
            rows={11}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>

        <div className="flex justify-around w-full">
          <button className='block p-1 m-auto text-sm bg-red-500 rounded-md w-fit hover:scale-110 hover:bg-red-600 hover:text-white' onClick={()=>setShow(false)}>close</button>
          <button className='block p-1 m-auto text-sm bg-green-500 rounded-md w-fit hover:scale-110 hover:bg-green-600 hover:text-white' onClick={handleAddTask}>Add</button>
        </div>
      </form>

      
     

    </section>
  );
};

export default observer(AddTask);
