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
			return expenses.filter(
				(expenses) => expenses._id !== action.payload
			);
		default:
			return expenses;
	}
};

const reducerTotal = (total = 0, action) => {
	switch (action.type) {
		case "FETCH_TOTAL":
			return action.payload;
		default:
			return total;
	}
};

const reducerToday = (today = 0, action) => {
	switch (action.type) {
		case "FETCH_TODAY":
			return action.payload;
		default:
			return today;
	}
};

const reducerCategory = (category = [], action) => {
	switch (action.type) {
		case "FETCH_CATEGORY":
			return action.payload;
		default:
			return category;
	}
};

export { reducer, reducerTotal, reducerToday, reducerCategory };
