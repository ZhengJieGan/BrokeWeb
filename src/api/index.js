import axios from "axios";

const API = axios.create({ baseURL: "https://brokecore.herokuapp.com/" });

export const fetchExpenses = (id) => API.get(`/expenses/${id}`);
export const createExpenses = (newExpenses) =>
	API.post("/expenses", newExpenses);
export const updateExpenses = (id, updatedExpenses) =>
	API.patch(`/expenses/${id}`, updatedExpenses);
export const deleteExpenses = (id) => API.delete(`/expenses/${id}`);
export const fetchTotalExpenses = (id) => API.get(`/expenses/total/${id}`);
export const fetchTodayExpenses = (id) => API.get(`/expenses/today/${id}`);
export const fetchCategoryExpenses = (id) =>
	API.get(`/expenses/category/${id}`);

export const signIn = (formData) => API.post("/user/signIn", formData);
export const signUp = (formData) => API.post("/user/signUp", formData);
export const deleteUser = (id) => API.delete(`/user/deleteAccount/${id}`);
