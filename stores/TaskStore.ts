import { types, flow } from 'mobx-state-tree';
import Task from '@/types/Task';
const Task = types.model({
// create id as a string  with a default value of  current date and time
  id: types.optional(types.identifier, () => Date.now().toString()),
  title: types.string,
  description: types.string,
  status: types.string,
  date: types.optional(types.string, () => new Date().toISOString()),
});

// create a store for tasks
const TaskStore = types
  .model("TaskStore",{
    tasks: types.array(Task),
    task: Task,
  })

  .actions((self) => ({
    addTask(task:Task ) {
      self.tasks.push(task);
    },
    // updateTask takes a task object and updates the task with the same id as the task passed in
    updateTask(updatedTask:Task) {
      const index = self.tasks.findIndex((task) => task.id === updatedTask.id);
      if (index !== -1) {
       self.tasks.splice(index, 1);
      }
    },
    // deldeteTask takes an array of task ids where each id is a string and deletes the tasks with those ids
    deleteTask(taskIds: string[]) {
      for (const taskId of taskIds) {
        const index = self.tasks.findIndex((task) => task.id === taskId);
        if (index !== -1) {
          self.tasks.splice(index, 1);
        }
      }
    },
    // delete by id
    deleteTaskById(taskId: string) {
      const index = self.tasks.findIndex((task) => task.id === taskId);
      if (index !== -1) {
        self.tasks.splice(index, 1);
      }
    },
    setTask(task:Task) {
      self.task.title = task.title;
      self.task.description = task.description;
      self.task.status = task.status;
      self.task.date = task.date;
      
    },
   
  }

  ))
  .views((self) => ({
    getTasksByStatus(status: string) {
      return self.tasks.filter((task:Task ) => task.status === status);
    },
    get getTask(){
      return self.task;
    }
  }));


  

// create a hook to use the store in components

const taskStore = TaskStore.create({
  tasks: [
    {
      id: "1",
      title: "Learn MST",
      description: "Learn MST",
      status: "To Do",
      date: "2020-12-12T20:10:20.203Z",
    },
    {
      id: "2",
      title: "Learn React",
      description: "Learn React",
      status: "In Progress",
      date: "2020-12-12T20:40:20.203Z",
    },
    { 
      id: "3",
      title: "Learn Mobx",
      description: "Learn Mobx",
      status: "Completed",
      date: "2020-12-12T23:10:20.203Z",
    }
  ],
  task: {
    id: "",
    title: "",
    description: "",
    status: "",   
    date: "",
  },

});

export default taskStore;