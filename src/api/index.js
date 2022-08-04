import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000"})

export const fetchExpenses = () => API.get("/expenses");
export const createExpenses = (newExpenses) => API.post("/expenses", newExpenses);
export const updateExpenses = (id, updatedExpenses) =>
	API.patch(`/expenses/${id}`, updatedExpenses);
export const deleteExpenses = (id) => API.delete(`/expenses/${id}`);
export const fetchTotalExpenses = () => API.get("/expenses/total");
export const fetchTodayExpenses = () => API.get("/expenses/today");
export const fetchCategoryExpenses = () => API.get("/expenses/category");

export const signIn = (formData) => API.post("/user/signIn", formData)
export const signUp = (formData) => API.post("/user/signUp", formData)