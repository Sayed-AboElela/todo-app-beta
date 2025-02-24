import { ITask } from '../store/todosStore'
import Task from './Task'

interface Props {
  tasks: ITask[],
  title: string;
  onDrop: (status: string) => void;
  onDragOver: (e: React.DragEvent<HTMLDivElement>) => void;
  onDragStart: (id: number) => void;
}

const List = ({ title, tasks, onDragStart, onDragOver, onDrop }: Props) => {

  return (
    <div
      onDrop={() => onDrop(title.toLowerCase())}
      onDragOver={onDragOver}
      className='drop-shadow-md bg-gray-400 text-black p-6 rounded-lg'
    >
      <h3 className='font-bold text-xl'>{title}</h3>
      {tasks.map(task => <Task key={task.id} {...task} onDragStart={onDragStart} />)}
    </div>
  )
}

export default List