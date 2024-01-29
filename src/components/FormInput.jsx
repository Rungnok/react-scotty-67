import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

function FormInput({ onSubmit }) {
  const [firstName, setFirstname] = useState("");
  const [lastName, setLastname] = useState("");
  const [nickName, setNickname] = useState("");
  const [tel, setTel] = useState("");
  const [age, setAge] = useState("");

  const handleInput = (event) => {
    const { name, value } = event.target;
    switch (name) {
      // case "fistname":
      //   setFirstname(value);
      //   break;
      // case "lastname":
      //   setLastname(value);
      //   break;
      case "nickname":
        setNickname(value);
        break;
      case "tel":
        setTel(value);
        break;
      case "age":
        setAge(value);
        break;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const todo = { id: uuidv4(), first_name: firstName, last_name: lastName}
    onSubmit(todo)
    setFirstname("");
    setLastname("");
    setNickname("");
    setTel("");
    setAge("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-300 rounded-lg shadow-lg p-5 space-y-3 w-96"
    >
      <p className="text-2xl">Fistname : {firstName}</p>
      <input
        type="text"
        className="rounded-md p-2 w-full"
        value={firstName}
        onChange={(event) => {
          setFirstname(event.target.value);
        }}
        name="fistname"
      />
      <p className="text-2xl">Lastname : {lastName}</p>
      <input
        type="text"
        className="rounded-md p-2 w-full"
        value={lastName}
        onChange={(event) => {
          setLastname(event.target.value);
        }}
        name="lastname"
      />
      <p className="text-2xl">Nickname : {nickName}</p>
      <input
        type="text"
        className="rounded-md p-2 w-full"
        value={nickName}
        onChange={handleInput}
        name="nickname"
      />
      <p className="text-2xl">Tel : {tel}</p>
      <input
        type="text"
        className="rounded-md p-2 w-full"
        value={tel}
        onChange={handleInput}
        name="tel"
      />
      <p className="text-2xl">Age : {age}</p>
      <input
        type="number"
        className="rounded-md p-2 w-full"
        value={age}
        onChange={handleInput}
        name="age"
      />
      <button className="rounded-lg p-3 bg-blue-500" type="submit">
        บันทึก
      </button>
    </form>
  );
}

export default FormInput;
