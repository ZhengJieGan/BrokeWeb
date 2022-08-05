import * as api from "../api/index.js";

export const signUp = (formData, history) => async (dispatch) => {
	try {
		const { data } = await api.signUp(formData);

		dispatch({ type: "AUTH", data });

		history("../user/dashboard", { replace: true });
	} catch (error) {
		console.log(error);
	}
};

export const signIn = (formData, history) => async (dispatch) => {
	try {
		const { data } = await api.signIn(formData);

		dispatch({ type: "AUTH", data });
		history("../user/dashboard", { replace: true });
	} catch (error) {
		console.log(error);
	}
};

export const deleteAccount = (id) => async (dispatch) => {
	try {
		await api.deleteUser(id);
		dispatch({ type: "DELETE_USER", payload: id });
	} catch (error) {
		console.log(error);
	}
};
