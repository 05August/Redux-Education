let nextTodoId = 0;
let nextNameId = 0;
export const addTodo = (time, text) => ({
  type: "ADD_TODO",
  id: nextTodoId++,
  time: time,
  isEdit: false,
  text,
});

export const increment = () => ({
  type: "INCREMENT",
});
export const decrement = () => ({
  type: "DECREMENT",
});

export const addName = (text) => ({
  type: "ADD_NAME",
  id: `${text}-${nextNameId++}`,
  text,
});

export const changeContentTodo = (id, text) => ({
  type: "CHANGE_CONTENT",
  isEdit: false,
  id,
  text,
});

export const changeStatusTodo = (id) => ({
  type: "CHANGE_STATUS",
  isEdit: true,
  id,
});

export const deleteTodo = (id) => ({
  type: "DELETE_TODO",
  id,
});

export const unDeleteTodo = (id) => ({
  type: "UN_DELETE_TODO",
  id,
});

export const setVisibilityFilter = (filter) => ({
  type: "SET_VISIBILITY_FILTER",
  filter,
});

export const toggleTodo = (id) => ({
  type: "TOGGLE_TODO",
  id,
});

export const VisibilityFilters = {
  SHOW_ALL: "SHOW_ALL",
  SHOW_COMPLETED: "SHOW_COMPLETED",
  SHOW_ACTIVE: "SHOW_ACTIVE",
};
