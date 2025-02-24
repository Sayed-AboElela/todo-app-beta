import { create } from "zustand";
import { mountStoreDevtool } from 'simple-zustand-devtools';
export interface ITask {
    id: number;
    name: string;
    description: string;
    status: "todo" | "in progress" | "done"
}

interface TasksStore {
    tasks: ITask[];
    addTask: (task: ITask) => void;
    moveTask: (taskId: number, status: ITask['status']) => void;
    searchTask: (searchQuery: string) => void;
}

const useTasksStore = create<TasksStore>(set => ({
    tasks: [
        {
            id: 1,
            name: "delectus aut autem 1",
            description: 'task description task description task description task description task description task description 1',
            status: 'todo',

        },
        {
            id: 2,
            name: "quis ut nam facilis et officia qui 2",
            description: 'task description task description task description task description task description task description 2',
            status: 'todo',

        },
        {
            id: 3,
            name: "fugiat veniam minus 3",
            description: 'task description task description task description task description task description task description 3',
            status: 'todo',

        },
    ],
    addTask: (task) => set((store) => ({ tasks: { ...store.tasks, task } })),
    moveTask: (taskId, status) => set((store) => ({ tasks: store.tasks.map(task => task.id === taskId ? { ...task, status } : task) })),
    searchTask: (searchQuery) => set((store) => ({ tasks: store.tasks.filter(t => t.name.toLowerCase() === searchQuery.toLowerCase()) }))
}))
if (process.env.NODE_ENV === 'development') {
    mountStoreDevtool('Store', useTasksStore);
}
export default useTasksStore;