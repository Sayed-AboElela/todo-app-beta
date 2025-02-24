
interface Props {
  id: number;
  name: string;
  description: string;
  onDragStart: (id: number) => void;
}

const Task = ({ id, name, onDragStart }: Props) => {
  return (
    <div
      className="mt-3 p-4 rounded-xl bg-white"
      draggable
      onDragStart={() => onDragStart(id)}
    >
      <p className="font-medium text-lg  capitalize ">{name}</p>
      <p className="text-sm text-gray-600">task description task description task description task description task description task description</p>
    </div>
  )
}

export default Task