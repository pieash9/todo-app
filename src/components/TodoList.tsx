import React from "react";
import { Todo } from "../model";
import SingleTodo from "./SingleTodo";
import { Droppable } from "react-beautiful-dnd";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  completedTodos: Todo[];
  setCompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({
  todos,
  setTodos,
  completedTodos,
  setCompletedTodos,
}) => {
  return (
    <div className="mt-5  mx-auto md:flex gap-5 w-full">
      <Droppable droppableId="TodosList">
        {(provided, snapShot) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className={`h-fit w-full bg-sky-400 p-3 rounded shadow-xl mb-5 md:mb-0 ${
              snapShot.isDraggingOver ? "bg-sky-500 duration-300" : ""
            }`}
          >
            <h3 className="mb-3 text-2xl font-medium text-white rounded ">
              Active Todos list
            </h3>
            <div className="grid md:grid-cols-2 gap-3">
              {todos.map((todo, i) => (
                <SingleTodo
                  i={i}
                  key={todo.id}
                  todo={todo}
                  todos={todos}
                  setTodos={setTodos}
                />
              ))}
              {provided.placeholder}
            </div>
          </div>
        )}
      </Droppable>
      <Droppable droppableId="TodosRemove">
        {(provided, snapShot) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className={` w-full bg-red-400 p-3 rounded shadow-xl h-fit ${
              snapShot.isDraggingOver ? "bg-red-500 duration-300" : ""
            }`}
          >
            <h3 className="mb-3 text-2xl font-medium text-white rounded ">
              Completed todos
            </h3>

            <div className="grid md:grid-cols-2 gap-3 w-full">
              {completedTodos.map((todo, i) => (
                <SingleTodo
                  i={i}
                  key={todo.id}
                  todo={todo}
                  todos={completedTodos}
                  setTodos={setCompletedTodos}
                />
              ))}
              {provided.placeholder}
            </div>
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default TodoList;
