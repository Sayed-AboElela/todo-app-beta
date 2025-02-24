import { useState } from "react";
import useTasksStore from "../store/todosStore";
import List from "./List";

const TodoApp = () => {
    const { tasks, moveTask } = useTasksStore();
    const [taskDragableId, setTaskDragableId] = useState<number | null>(null)

    const handleOnDrop = (status: string) => {
        if (taskDragableId)
            moveTask(taskDragableId, status as 'todo' | 'in progress' | 'done')
        setTaskDragableId(null)
    }

    const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
    }
    const handleDragStart = (id: number) => {
        setTaskDragableId(id)
    }

    console.log(tasks);
    
    return (
        <div className="grid grid-cols-3 gap-6 p-8 ">
            {['Todo', 'In Progress', 'Done'].map((status) => (
                <List
                    key={status}
                    title={status}
                    tasks={tasks.filter(task => task.status.toLowerCase() === status.toLowerCase())}
                    onDrop={handleOnDrop}
                    onDragOver={handleDragOver}
                    onDragStart={handleDragStart}
                />
            ))}
        </div>
    )
}


export default TodoApp;