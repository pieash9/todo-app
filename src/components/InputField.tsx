import React from "react";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const InputField = ({ todo, setTodo, handleAdd }: Props) => {
  return (
    <div className="mb-16  mx-auto md:w-[70%] w-full">
      <form onSubmit={handleAdd} className="relative w-full  mt-10">
        <input
          className="input w-full bg-white absolute right-0"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          type="text"
          placeholder="Enter task"
        />
        <button className="btn btn-primary btn-sm absolute z-50 right-2 top-2 rounded-full ">
          Create
        </button>
      </form>
    </div>
  );
};

export default InputField;
