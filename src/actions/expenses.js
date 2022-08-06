import * as api from "../api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const notifySuccess = () =>
	toast.success("Record created successfully", {
		position: "top-center",
		autoClose: 2000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
	});

const notifyUpdate = () =>
	toast.success("Record updated successfully", {
		position: "top-center",
		autoClose: 2000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
	});

const notifyDelete = () =>
	toast.info("Record deleted successfully", {
		position: "top-center",
		autoClose: 2000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
	});

export const getExpenses = (id) => async (dispatch) => {
	try {
		const { data } = await api.fetchExpenses(id);
		dispatch({ type: "FETCH_ALL", payload: data });
	} catch (error) {
		console.log(error);
	}
};

export const createExpenses = (expense) => async (dispatch) => {
	try {
		const { data } = await api.createExpenses(expense);
		dispatch({ type: "CREATE", payload: data });
		notifySuccess();
	} catch (error) {
		console.log(error);
	}
};

export const updateExpenses = (id, expense) => async (dispatch) => {
	try {
		const { data } = await api.updateExpenses(id, expense);
		dispatch({ type: "UPDATE", payload: data });
		notifyUpdate();
	} catch (error) {
		console.log(error);
	}
};

export const deleteExpenses = (id) => async (dispatch) => {
	try {
		await api.deleteExpenses(id);
		dispatch({ type: "DELETE", payload: id });
		notifyDelete();
	} catch (error) {
		console.log(error);
	}
};

export const getTotalExpenses = (id) => async (dispatch) => {
	try {
		const total = await api.fetchTotalExpenses(id);
		dispatch({ type: "FETCH_TOTAL", payload: total.data });
	} catch (error) {
		console.log(error);
	}
};

export const getTodayExpenses = (id) => async (dispatch) => {
	try {
		const today = await api.fetchTodayExpenses(id);
		dispatch({ type: "FETCH_TODAY", payload: today.data });
	} catch (error) {
		console.log(error);
	}
};

export const getCategoryExpenses = (id) => async (dispatch) => {
	try {
		const { data } = await api.fetchCategoryExpenses(id);
		dispatch({ type: "FETCH_CATEGORY", payload: data });
	} catch (error) {
		console.log(error);
	}
};
