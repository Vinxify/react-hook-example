import { useState } from "react";
import Todo from "./Todo";

function useRefExample3() {
  const [showTodo, setShowTodo] = useState(true);
  return (
    <div>
      {showTodo && <Todo />}
      <button
        className='btn btn-secondary'
        onClick={() => setShowTodo(!showTodo)}
      >
        Toggle Todo
      </button>
    </div>
  );
}

export default useRefExample3;
