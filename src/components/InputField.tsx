import React from "react";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const InputField = ({ todo, setTodo, handleAdd }: Props) => {
  return (
    <div className="mb-10">
      <form onSubmit={handleAdd} className="relative w-96 mx-auto mt-10">
        <input
          className="input input-secondary w-full bg-white absolute right-0"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          type="text"
          placeholder="Enter a task"
        />
        <button className="btn btn-primary btn-sm absolute z-50 right-2 top-2 rounded-full ">
          Go
        </button>
      </form>
    </div>
  );
};

export default InputField;
