
interface Props {
  id: number;
  name: string;
  description: string;
  onDragStart: (id: number) => void;
}

const Task = ({ id, name,description, onDragStart }: Props) => {
  return (
    // <div
    //   className="mt-3 p-4 rounded-xl bg-white"
    //   draggable
    //   onDragStart={() => onDragStart(id)}
    // >
    //   <p className="font-medium text-lg  capitalize ">{name}</p>
    //   <p className="text-sm text-gray-600">task description task description task description task description task description task description</p>
    // </div>
    <div
      draggable
      onDragStart={() => onDragStart(id)}
      className="group block max-w-sm mx-auto mt-4 space-y-3 rounded-lg p-4 bg-white text-gray-400 ring-1 shadow-lg hover:bg-sky-500 hover:ring-sky-500 ">
      <div className="flex items-center space-x-3">
        <div className="text-md font-semibold text-black group-hover:text-white ">{name}</div>
      </div>
      <p className="text-sm text-gray-500 group-hover:text-white dark:text-gray-400">{description}</p>
    </div>
  )
}

export default Task