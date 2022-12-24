const todos = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          time: action.time,
          isEdit: false,
        },
      ];
    case "TOGGLE_TODO":
      return state.map((todo) => {
        return todo.id === action.id ? { ...todo, completed: !todo.completed } : todo;
      });
    case "DELETE_TODO":
      return state.filter((todo) => todo.id !== action.id);
    case "CHANGE_STATUS":
      return state.map((todo) => {
        return todo.id === action.id
          ? { ...todo, isEdit: !todo.isEdit }
          : { ...todo, isEdit: todo.isEdit ? !todo.isEdit : todo.isEdit };
      });
    case "CHANGE_CONTENT":
      return state.map((todo) => {
        return todo.id === action.id
          ? { ...todo, isEdit: !todo.isEdit, text: action.text }
          : todo;
      });
    case "UN_DELETE_TODO":
      return state.map((todo) => {
        return todo.id === action.id ? { ...todo, isEdit: !todo.isEdit } : todo;
      });
    default:
      return state;
  }
};

export default todos;
