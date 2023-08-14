import React, { useState } from "react";
import InputField from "./components/InputField";
import { Todo } from "./model";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  return (
    <div className="bg-blue-400 h-screen">
      <h2 className="pt-5 z-40 text-center text-white text-3xl font-semibold">
        Taskify
      </h2>
      <InputField todo={todo} setTodo={setTodo} />
    </div>
  );
};

export default App;
