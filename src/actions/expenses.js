import * as api from "../api";

export const getExpenses = () => async (dispatch) => {
  try {
    const { data } = await api.fetchExpenses();
    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createExpenses = (expense) => async (dispatch) => {
  try {
    const { data } = await api.createExpenses(expense);
    dispatch({ type: "CREATE", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
