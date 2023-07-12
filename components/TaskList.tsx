import React from 'react'
import taskStore from '@/stores/TaskStore'
import {observer} from 'mobx-react'
import { MdDelete } from 'react-icons/md';


const TaskList:React.FC = () => {
  const [selectedTask, setSelectedTask] = React.useState<string[]>([]);
const [active, setActive] = React.useState<string>('');


 

  const handleCheck = ( id: string) => {
    
    const newSelectedTask = [...selectedTask];
    const isTaskSelected = newSelectedTask.indexOf(id) !== -1;
    if(isTaskSelected){
      newSelectedTask.splice(newSelectedTask.indexOf(id), 1);
    }else{
      newSelectedTask.push(id);
    }
    setSelectedTask(newSelectedTask);
  }

  const handleDelete = () => {
    // checking opened task
    if(taskStore.task.id){
      let isPresent = selectedTask.filter((id,i)=>id===taskStore.task.id)
     if(isPresent){
       taskStore.resetTask()
     }
    }
    taskStore.deleteTask(selectedTask);
    setSelectedTask([]);
  }
 
  return (
   <div className='w-full h-[100%] '>
{/*create Tag which show totol tasks, selected tasks etc..*/}
      <div className='flex flex-row justify-between p-2 shadow-lg bg-slate-50'>
        <div className='flex flex-row w-full'>
          <span>Total: {taskStore.tasks.length}</span>
          <span></span>
        </div>
        <div>
         {
            selectedTask.length > 0 && (
              <div className='flex w-fit'>
              <MdDelete className='w-5 h-5 text-red-500 hover:scale-110 hover:text-red-600'  onClick={handleDelete}/> 
              <p className='text-sm'>{selectedTask.length}</p>
              </div>
            )
         }
        </div>
      </div>
      <div className='w-full h-[calc(100%-100px)] flex justify-center items-center overflow-hidden overflow-y-auto '>
     {
      taskStore.tasks.length>0?
      <table className='table w-full h-full '>
      <tbody className='w-full max-h-[calc(100%-100px)] overflow-hidden overflow-y-auto bg-transparent'>
      {taskStore.tasks.map((task) => (
        <tr key={task.id} onClick={()=>{
          setActive(task.id);
          taskStore.setTask(task);
        }} 
        className={active===task.id?'m-1 flex items-center bg-teal-200 justify-between w-full p-1 cursor-pointer group hover:bg-teal-300':'flex  items-center justify-between w-full p-1 cursor-pointer group hover:bg-teal-300'}>  
          <td><input type="checkbox" className='cursor-' name="" id="" onChange={(e)=>handleCheck(task.id)} onClick={(e)=>e.stopPropagation()} /> {task.title}</td>
          <td><span className={`p-1 text-xs ${task.status==="To Do"?"bg-red-300":(task.status==="In Progress"?"bg-yellow-300":"bg-green-300")} rounded-md group-hover:cursor-text`}>{task.status}</span></td>
          <td><div>
            <p>{task.date?.split(",")[0]}</p>
            <p className='text-xs'>{task.date?.split(",")[1].trim()}</p>
            </div></td>
        </tr>
      ))}
      </tbody>
    </table>:
   <p>No Task Found</p>
     }
      </div>
    
   </div>
  )
}

export default observer(TaskList)
