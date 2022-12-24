const names = (state = [], action) => {
  switch (action.type) {
    case "ADD_NAME":
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
        },
      ];
    default:
      return state;
  }
};

export default names;
