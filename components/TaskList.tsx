import React from 'react'
import taskStore from '@/stores/TaskStore'
import {observer} from 'mobx-react'


const TaskList:React.FC = () => {
  const [selectedTask, setSelectedTask] = React.useState<string[]>([]);
  const [taskStatus, setTaskStatus] = React.useState('To Do');
  const [taskTitle, setTaskTitle] = React.useState('');
  const [taskDescription, setTaskDescription] = React.useState('');

  const handleCheck = (id:string) => {
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
    taskStore.deleteTask(selectedTask);
    setSelectedTask([]);
  }
 
  return (
   <div>
{/*create Tag which show totol tasks, selected tasks etc..*/}
      <div className='flex flex-row justify-between'>
        <div>
          <span>Total Tasks: {taskStore.tasks.length}</span>
        </div>
        <div>
         {
            selectedTask.length > 0 && (
              <span>
               {selectedTask.length} <button onClick={handleDelete}>delete</button>
              </span>
            )
         }
        </div>
      </div>
      

       <table className='table '>

{/* table caption  */}
     
      
      {/* <thead>
        <tr>
          <th>Title</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead> */}
      <tbody>
      {taskStore.tasks.map((task) => (
        <tr key={task.id}>
          <td><input type="checkbox" name="" id="" onChange={()=>handleCheck(task.id)} /> </td>
          <td>{task.id}</td>
          <td>{task.title}</td>
          <td>{task.status}</td>
         
        </tr>
      ))}
      </tbody>
      
      
      
    </table>
   </div>
  )
}

export default observer(TaskList)
