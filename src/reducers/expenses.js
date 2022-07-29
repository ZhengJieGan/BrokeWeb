const reducer = (expenses = [], action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return action.payload;
    case "CREATE":
      return [...expenses, action.payload];
    case "UPDATE":
      return expenses.map((expense) =>
        expense._id === action.payload ? action.payload : expense
      );
    case "DELETE":
      return expenses.filter((expenses) => expenses._id !== action.payload);
    default:
      return expenses;
  }
};

export default reducer;
