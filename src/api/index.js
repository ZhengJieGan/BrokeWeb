import axios from "axios";

const url = "http://localhost:5000/expenses";

export const fetchExpenses = () => axios.get(url);
export const createExpenses = (newExpenses) => axios.post(url, newExpenses);
export const updateExpenses = (id, updatedExpenses) =>
	axios.patch(`${url}/${id}`, updatedExpenses);
export const deleteExpenses = (id) => axios.delete(`${url}/${id}`);
export const fetchTotalExpenses = () => axios.get(`${url}/total`);
