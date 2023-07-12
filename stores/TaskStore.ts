import { types, flow } from 'mobx-state-tree';
// import Task from '@/types/Task';
const Task = types.model({
// create id as a string  with a default value of  current date and time
  id: types.optional(types.string, () => Date.now().toString()),
  title: types.string,
  description: types.string,
  status: types.string,
  
  // create date as a string with a default value of current date and time
  date: types.optional(types.string, () =>new Date().toLocaleString('en-IN', {
  timeZone: 'Asia/Kolkata',
  
})),
});

// create a store for tasks
const TaskStore = types
  .model("TaskStore",{
    tasks: types.array(Task),
    task: Task,
  })

  .actions((self) => ({
    addTask(task:any ) {
      self.tasks.push(task);
      // set tasks in local storage
      localStorage.setItem("tasks", JSON.stringify(self.tasks));

    },
    // updateTask takes a task object and updates the task with the same id as the task passed in
    updateTask(updatedTask:any) {
      const index = self.tasks.findIndex((task) => task.id === updatedTask.id);
      if (index !== -1) {
       self.tasks[index].id = updatedTask.id;
        self.tasks[index].title = updatedTask.title;
        self.tasks[index].description = updatedTask.description;
        self.tasks[index].status = updatedTask.status;
        self.tasks[index].date = updatedTask.date;
        
      }
      localStorage.setItem("tasks", JSON.stringify(self.tasks));
    },
    // deldeteTask takes an array of task ids where each id is a string and deletes the tasks with those ids
    deleteTask(taskIds: string[]) {
      for (const taskId of taskIds) {
        const index = self.tasks.findIndex((task) => task.id === taskId);
        if (index !== -1) {
          self.tasks.splice(index, 1);
        }
      }
      localStorage.setItem("tasks", JSON.stringify(self.tasks));
    },
    // delete by id
    deleteTaskById(taskId: string) {
      const index = self.tasks.findIndex((task) => task.id === taskId);
      if (index !== -1) {
        self.tasks.splice(index, 1);
      }

      localStorage.setItem("tasks", JSON.stringify(self.tasks));
    },
    setTask(task:any) {
      self.task.title = task.title;
      self.task.description = task.description;
      self.task.status = task.status;
      self.task.date = task.date;
      self.task.id = task.id;
      
    },
    // reset task
    resetTask() {
      self.task.title = "";
      self.task.description = "";
      self.task.status = "";
      self.task.date = "";
      self.task.id = "";
    }
   
  }

  ))
  .views((self) => ({
    getTasksByStatus(status: string) {
      return self.tasks.filter((task:any ) => task.status === status);
    },
    get getTask(){
      return self.task;
    }
  }));


  

// create a hook to use the store in components

const taskStore = TaskStore.create({
  tasks: JSON.parse(localStorage.getItem("tasks")||"[]"),
  task: {
    id: "",
    title: "",
    description: "",
    status: "",   
    date: "",
  },

});

export default taskStore;