import React, { useState } from "react";
import { Todo } from "../model";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
type Props = {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const SingleTodo: React.FC = ({ todo, todos, setTodos }: Props) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);

  const handleDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };
  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleEdit = (e: React.FormEvent, id: number) => {};

  return (
    <div className=" w-56 bg-yellow-300 px-4 py-1 rounded mt-2">
      <form
        onSubmit={(e) => handleEdit(e, todo.id)}
        className="flex justify-between items-center "
      >
        {edit ? (
          <input
            className="input input-xs"
            defaultValue={editTodo}
            onChange={(e) => setEditTodo(e.target.value)}
          />
        ) : todo.isDone ? (
          <s>{todo.todo}</s>
        ) : (
          <span>{todo.todo}</span>
        )}

        <div className="flex gap-2">
          <span
            onClick={() => {
              if (!edit && !todo.isDone) {
                setEdit(!edit);
              }
            }}
            className="cursor-pointer"
          >
            <AiFillEdit />
          </span>
          <span
            onClick={() => handleDelete(todo.id)}
            className="cursor-pointer"
          >
            <AiFillDelete />
          </span>
          <span onClick={() => handleDone(todo.id)} className="cursor-pointer">
            <MdDone />
          </span>
        </div>
      </form>
    </div>
  );
};

export default SingleTodo;
