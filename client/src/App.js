import "./App.css";

import InputTodo from "./components/InputTodo";
import ListTodo from "./components/ListTodo";

function App() {
  return (
    <div className="container">
      <InputTodo />
      <ListTodo />
    </div>
  );
}

export default App;
