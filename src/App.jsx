import { useState, useEffect } from "react";
import UserCard from './components/UserCard'
import FormInput from "./components/FormInput";

function App() {
  const [count, setCount] = useState(0);

  const [todoList, setTodos] = useState(() => {
    const localTodos = localStorage.getItem("todoList")

    if (localTodos) {
      return JSON.parse(localTodos)
    } else {
      return [];
    }
  });

  const plusCount = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    if (count > 10) {
      setCount(10);
      alert("Count is not more than 10");
    } else if (count < 0) {
      setCount(0);
      alert("Count is not less than 0");
    }
  }, [count]);


  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList))
  },[todoList])

  const onAddItem = (list) => {
    setTodos([...todoList, list])
  }

  const onChangeItem = (list) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        return todo.id === list.id ? {...todo,...list} : todo
      })
    })
  }

  const onDeleteItem = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id))
  }

  return (
    <div className="flex flex-col items-center p-5 space-y-4">
      <h1 className="text-3xl text-blue-500">Hello React.js</h1>
      <p className="text-2xl text-white bg-gray-500 rounded-lg p-2">{count}</p>
      <div className="flex gap-2">
        <button
          className="bg-red-500 w-10 h-10 rounded-md text-white text-lg"
          onClick={() => {
            setCount(count - 1);
          }}
        >
          -
        </button>
        <button
          className="bg-lime-500 w-10 h-10 rounded-md text-white text-lg"
          onClick={plusCount}
        >
          +
        </button>
      </div>
      <FormInput onSubmit={onAddItem}/>
      <div className="grid grid-cols-2 gap-5 w-full">
        {todoList.map((todo) => (
          <UserCard key={todo.id} list={todo} onPush={onChangeItem} onDelete={onDeleteItem}/>
        ))}
      </div>
    </div>
  );
}

export default App;
