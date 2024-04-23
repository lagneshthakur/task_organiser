import { Task } from "@/interfaces/task";

const taskKey = "tasks";

export const getTasksFromLocalStorage = (): Task[] => {
  const tasks = localStorage.getItem(taskKey);
  return tasks ? JSON.parse(tasks) : [];
};

export const setTasksToLocalStorage = (tasks: Task[]) => {
  localStorage.setItem(taskKey, JSON.stringify(tasks));
}