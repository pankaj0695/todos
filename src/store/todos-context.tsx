import React, { PropsWithChildren, useState } from 'react';

import Todo from '../models/todo';

type TodosContextObj = {
  items: Todo[];
  addTodo: (todoText: string) => void;
  deleteTodo: (todoId: string) => void;
};

export const TodosContext = React.createContext<TodosContextObj>({
  items: [],
  addTodo: (todoText: string) => {},
  deleteTodo: (todoId: string) => {},
});

const DUMMY_TODOS = [
  'Complete the course',
  'Workout',
  'Go to college',
  'Complete the assignment',
].map(todoText => new Todo(todoText));
const TodosContextProvider: React.FC<PropsWithChildren<{}>> = props => {
  const [todos, setTodos] = useState<Todo[]>(DUMMY_TODOS);
  const AddTodoHandler = (todoText: string) => {
    setTodos(prevTodos => prevTodos.concat(new Todo(todoText)));
  };
  const deleteTodoHandler = (todoId: string) => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== todoId));
  };
  const contextValue: TodosContextObj = {
    items: todos,
    addTodo: AddTodoHandler,
    deleteTodo: deleteTodoHandler,
  };
  return (
    <TodosContext.Provider value={contextValue}>
      {props.children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;
