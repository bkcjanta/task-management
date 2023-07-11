import { types, flow } from 'mobx-state-tree';
import Task from '@/types/Task';
const Task = types.model({
// create id as a string  with a default value of  current date and time
  id: types.optional(types.identifier, () => Date.now().toString()),
  title: types.string,
  description: types.string,
  status: types.string,
});

// create a store for tasks
const TaskStore = types
  .model("TaskStore",{
    tasks: types.array(Task),
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
    }
  }

  ))
  .views((self) => ({
    getTasksByStatus(status: string) {
      return self.tasks.filter((task:Task ) => task.status === status);
    },
    get getTasks(){
      return self.tasks;
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
    },
    {
      id: "2",
      title: "Learn React",
      description: "Learn React",
      status: "In Progress",
    },
    { 
      id: "3",
      title: "Learn Mobx",
      description: "Learn Mobx",
      status: "Completed",
    }
  ],
});

export default taskStore;