import * as api from "../api";

export const getExpenses = () => async (dispatch) => {
	try {
		const { data } = await api.fetchExpenses();
		dispatch({ type: "FETCH_ALL", payload: data });
	} catch (error) {
		console.log(error);
	}
};

export const createExpenses = (expense) => async (dispatch) => {
	try {
		const { data } = await api.createExpenses(expense);
		dispatch({ type: "CREATE", payload: data });
	} catch (error) {
		console.log(error);
	}
};

export const updateExpenses = (id, expense) => async (dispatch) => {
	try {
		const { data } = await api.updateExpenses(id, expense);

		dispatch({ type: "UPDATE", payload: data });
	} catch (error) {
		console.log(error);
	}
};

export const deleteExpenses = (id) => async (dispatch) => {
	try {
		await api.deleteExpenses(id);
		dispatch({ type: "DELETE", payload: id });
	} catch (error) {
		console.log(error);
	}
};

export const getTotalExpenses = () => async (dispatch) => {
	try {
		const total = await api.fetchTotalExpenses();
		dispatch({ type: "FETCH_TOTAL", payload: total.data });
	} catch (error) {
		console.log(error);
	}
};

export const getTodayExpenses = () => async (dispatch) => {
	try {
		const today = await api.fetchTodayExpenses();
		dispatch({ type: "FETCH_TODAY", payload: today.data });
	} catch (error) {
		console.log(error);
	}
};

export const getCategoryExpenses = () => async (dispatch) => {
	try {
		const { data } = await api.fetchCategoryExpenses();
		dispatch({ type: "FETCH_CATEGORY", payload: data });
	} catch (error) {
		console.log(error);
	}
};
