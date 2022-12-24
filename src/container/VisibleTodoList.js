import { connect } from "react-redux";
import {
  toggleTodo,
  deleteTodo,
  changeStatusTodo,
  changeContentTodo,
  unDeleteTodo,
} from "../actions";
import TodoList from "../components/TodoList";
import { VisibilityFilters } from "../actions";

const getVisibleTodos = (todos, filter) => {
  console.log("🚀 ~ file: VisibleTodoList.js:7 ~ getVisibleTodos ~ todos", todos);
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos;
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter((t) => t.completed);
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter((t) => !t.completed);
    default:
      throw new Error("Unknown filter: " + filter);
  }
};

const mapStateToProps = (state) => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter),
});

const mapDispatchToProps = (dispatch) => ({
  toggleTodo: (id) => dispatch(toggleTodo(id)),
  deleteTodo: (id) => dispatch(deleteTodo(id)),
  changeStatusTodo: (id) => dispatch(changeStatusTodo(id)),
  changeContentTodo: (id, text) => dispatch(changeContentTodo(id, text)),
  unDeleteTodo: (id) => dispatch(unDeleteTodo(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
