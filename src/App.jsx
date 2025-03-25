import { Check, X } from "lucide-react";
import { useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState(""); // task Input State
  const [tasks, setTasks] = useState([]);

  const updateTask = (e) => {
    e.preventDefault();
    if (inputValue) {
      setTasks([{ task: inputValue, isDone: false }, ...tasks]);
      // setTasks((prevTasks) => [...prevTasks, inputValue]);
      setInputValue("");
    }
  };

  return (
    <section className="flex justify-center items-center min-h-screen">
      <section className="px-5 shadow-xl rounded-xl bg-blue-100 h-96 w-[90%] max-w-md overflow-y-auto">
        <form
          onSubmit={updateTask}
          className="py-5 sticky top-0 left-0 right-0 z-10 flex justify-between gap-5 bg-blue-100"
        >
          <input
            type="text"
            placeholder="Write Your task here.."
            className="px-4 border-2 border-blue-600 w-3/4 h-10 rounded"
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
            value={inputValue}
          />
          <button
            type="submit"
            className="bg-blue-600 h-10 w-1/4 rounded text-white"
          >
            Add New+
          </button>
        </form>
        <ul className="mt-5 grid gap-2 divide-y divide-gray-400">
          {tasks.map((task, index) => (
            <li
              className={`flex justify-between pb-2 ${
                task.isDone && "line-through decoration-gray-900"
              }`}
              key={index}
            >
              <span>{task.task}</span>
              <div className="flex gap-2">
                {!task.isDone && (
                  <Check
                    size={20}
                    className="text-gray-500 cursor-pointer hover:text-green-1200"
                    onClick={() => {
                      const newTasks = [...tasks];
                      newTasks[index].isDone = true;
                      setTasks(newTasks);
                    }}
                  />
                )}

                <X
                  size={20}
                  className="text-gray-500 cursor-pointer hover:text-red-600"
                />
              </div>
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
}

export default App;