import axios from "axios";

const url = "http://localhost:5000/expenses";

export const fetchExpenses = () => axios.get(url);
