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
      className='bg-gray-950/50 not-prose outline outline-white/5 overflow-auto p-8 rounded-lg max-h-300'
    >
      <h3 className='font-bold text-xl'>{title}</h3>
      {tasks.map(task => <Task key={task.id} {...task} onDragStart={onDragStart} />)}
    </div>
  )
}

export default List