import React, { useState, useRef, useEffect } from "react";
import { Todo } from "../model";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import { Draggable } from "react-beautiful-dnd";
type Props = {
  i: number;
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const SingleTodo: React.FC = ({ todo, todos, setTodos, i }: Props) => {
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

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
    );
    setEdit(false);
  };

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

  return (
    <Draggable draggableId={todo.id.toString()} index={i}>
      {(provided, snapShot) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          className={` w-full bg-yellow-300 px-4 py-2 rounded mt-2 hover:scale-105 duration-300 hover:shadow-lg ${
            snapShot.isDragging ? "shadow-2xl" : ""
          }`}
        >
          <form
            onSubmit={(e) => handleEdit(e, todo.id)}
            className="flex justify-between items-center "
          >
            {edit ? (
              <input
                ref={inputRef}
                className="input input-xs "
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
                className="cursor-pointer tooltip tooltip-primary tooltip-top"
                data-tip='Edit'
              >
                <AiFillEdit />
              </span>
              <span
                onClick={() => handleDelete(todo.id)}
                className="cursor-pointer tooltip tooltip-error tooltip-top"
                data-tip='Delete'
              >
                <AiFillDelete />
              </span>
              <span
                onClick={() => handleDone(todo.id)}
                className="cursor-pointer tooltip tooltip-success tooltip-top"
                data-tip='Done'
              >
                <MdDone />
              </span>
            </div>
          </form>
        </div>
      )}
    </Draggable>
  );
};

export default SingleTodo;
