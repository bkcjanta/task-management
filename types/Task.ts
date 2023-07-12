// Definition of the Task type

interface Task {
  // id is a string and it is optional
  id?: any;
  title: string;
  description: string;
  status: string;
  date?: any;
}

export default Task;