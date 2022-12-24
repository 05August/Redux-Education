import React from "react";
import Footer from "./components/Footer";
import AddTodo from "./container/AddTodo";
import VisibleTodoList from "./container/VisibleTodoList";
import NameList from "./components/NameList";
import Counter from "./components/Counter";
function App() {
  return (
    <div>
      <AddTodo />
      <VisibleTodoList />
      <Footer />
      <NameList />
      <Counter />
    </div>
  );
}

export default App;
