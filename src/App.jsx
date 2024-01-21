import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [firstName, setFirstname] = useState("");
  const [lastName, setLastname] = useState("");

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

  const handleInput = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'fistname':
        setFirstname(value)
        break;
      case 'lastname':
        setLastname(value)
        break;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Fistname : ',firstName);
    console.log('Lastname : ',lastName);
    setFirstname('')
    setLastname('')
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
      <form onSubmit={handleSubmit} className="bg-gray-300 rounded-lg shadow-lg p-5 space-y-3 w-96">
        <p className="text-2xl">Fistname : {firstName}</p>
        <input
          type="text"
          className="rounded-md p-2 w-full"
          value={firstName}
          onChange={handleInput}
          name="fistname"
        />
        <p className="text-2xl">Lastname : {lastName}</p>
        <input
          type="text"
          className="rounded-md p-2 w-full"
          value={lastName}
          onChange={handleInput}
          name="lastname"
        />
        <button className="rounded-lg p-3 bg-blue-500" type="submit">บันทึก</button>
      </form>
    </div>
  );
}

export default App;
