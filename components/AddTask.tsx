"use client"
import { useState } from 'react';
// import { useStore } from '@/hooks/useStore';
import { observer } from 'mobx-react';
import taskStore  from '@/stores/TaskStore';
import { values } from 'mobx'

const AddTask: React.FC =() => { 
  const [title, setTitle] = useState('New Task');
  const [description, setDescription] = useState('');

  const handleAddTask = () => {
    if(!title) return alert('Title is required');
    if(!description) return alert('Description is required');
    const newTask = {
      id: String(Date.now()),
      title,
      description,
      status: "To Do",
    };
    taskStore.addTask(newTask);

    setTitle('');
    setDescription('');
  };

  return (
    <section className=''>
      <form onSubmit={(e) => e.preventDefault()}>
       <div>
         <label htmlFor='title'>
          Title
        </label>
        <br />
        <input
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
            name="description"
            id="description"
            cols={30}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>

        <button onClick={handleAddTask}>Add</button>
      </form>

      
     

    </section>
  );
};

export default observer(AddTask);
