import * as api from "../api/index.js";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const notifyError = () =>
	toast.error("Incorrect Email/Password", {
		position: "top-center",
		autoClose: 2000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
	});

const notifySuccess = () =>
	toast.success("Login success", {
		position: "top-center",
		autoClose: 2000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
	});

const notifySignUpError = () =>
	toast.error("Sign Up failed", {
		position: "top-center",
		autoClose: 2000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
	});

export const signUp = (formData, history) => async (dispatch) => {
	try {
		const { data } = await api.signUp(formData);
		dispatch({ type: "AUTH", data });
		
		history("../user/dashboard", { replace: true });
	} catch (error) {
		notifySignUpError();
		console.log(error.message);
	}
};

export const signIn = (formData, history) => async (dispatch) => {
	try {
		const { data } = await api.signIn(formData);
		dispatch({ type: "AUTH", data });
		history("../user/dashboard", { replace: true });
		notifySuccess();
	} catch (error) {
		notifyError();
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
