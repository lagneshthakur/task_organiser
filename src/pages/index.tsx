import Image from "next/image";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import { Task } from "@/interfaces/task";
import { TaskInput, TaskItem } from "@/components";
import { getTasksFromLocalStorage, setTasksToLocalStorage } from "@/utilities/localstorageService";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [tasks, setTasks] = useState([] as Task[]);

  useEffect(() => {
    const tasks = getTasksFromLocalStorage();
    if (tasks) setTasks(tasks);
  }, []);

  const handleAddTask = (taskTitle: string) => {
    if(taskTitle === '') return;
    const newTask = {
      id: tasks.length + 1,
      title: taskTitle,
      completed: true,
      timer: 0,
      createdAt: new Date()
    }
    setTasks([...tasks, newTask]);
    setTasksToLocalStorage([...tasks, newTask]);
  }

  const handleDeleteTask = (id: number) => {
    const newTasks = tasks.filter(task => task.id !== id);
    setTasks(newTasks);
  }

  return (
    <main
      className={`flex min-h-screen flex-col items-center p-8 ${inter.className} bg-background text-primary`}
    >
      <header className="flex flex-col items-center w-full mb-8">
        <h1 className="text-4xl font-bold text-secondary text-center">The Task Organiser</h1>
        <p className="text-lg">Organise your tasks in one place</p>
      </header>
      
      <section className="grid w-full grid-cols-12 gap-4 lg:gap-y-4 gap-y-10">
        <TaskInput handleAddTask={handleAddTask}/>
        {
          tasks.map((task) => (
            <TaskItem key={task.id} task={task} onDelete={handleDeleteTask} />
          ))
        }
      </section>
    </main>
  );
}
