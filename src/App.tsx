import TodosContextProvider from './store/todos-context';
import Todos from './components/Todos';
import NewTodo from './components/NewTodo';

function App() {
  return (
    <TodosContextProvider>
      <NewTodo />
      <Todos />
    </TodosContextProvider>
  );
}

export default App;
