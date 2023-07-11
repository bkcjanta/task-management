// Definition of the Task type

interface Task {
  // id is a string and it is optional
  id?: string;
  title: string;
  description: string;
  status: string;
}

export default Task;