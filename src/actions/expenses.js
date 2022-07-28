import * as api from "../api";

export const getExpenses = () => async (dispatch) => {
	try {
		const { data } = await api.fetchExpenses();
		dispatch({ type: "FETCH_ALL", payload: data });
	} catch (error) {
		console.log(error.message);
	}
};
