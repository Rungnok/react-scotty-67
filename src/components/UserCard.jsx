import { useEffect, useState } from "react";

function UserCard({ list, onPush, onDelete }) {
  const [firstName, setFirstname] = useState("");
  const [lastName, setLastname] = useState("");

  useEffect(() => {
    setFirstname(list.first_name);
    setLastname(list.last_name);
  }, []);

  const handleSave = (e) => {
    e.preventDefault();
    console.log(firstName);
    console.log(lastName);
    const item = { id: list.id, first_name: firstName, last_name: lastName };
    onPush(item);
  };

  return (
    <form
      onSubmit={handleSave}
      className="bg-gray-200 rounded-md shadow-xl w-full p-5 space-y-2"
    >
      <p className="text-lg">Firstname : {list.first_name}</p>
      <input
        type="text"
        value={firstName}
        onChange={(e) => {
          setFirstname(e.target.value);
        }}
        className="rounded-xl p-1"
      />
      <p className="text-lg">Lastname : {list.last_name}</p>
      <input
        type="text"
        value={lastName}
        onChange={(e) => {
          setLastname(e.target.value);
        }}
        className="rounded-xl p-1"
      />
      <div className="flex gap-2">
        <button
          className="rouded-lg p-2 bg-blue-500 rounded-full"
          type="submit"
        >
          Confirm
        </button>
        <button
          className="rouded-lg p-2 bg-red-500 rounded-full"
          type="button"
          onClick={() => {
            onDelete(list.id);
          }}
        >
          Delete
        </button>
      </div>
    </form>
  );
}

export default UserCard;
