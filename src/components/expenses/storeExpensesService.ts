import { ExpenseInterface } from "./storeExpenses";

export function getSumOfAloQuantities(expenses: ExpenseInterface[]) {
  return expenses.reduce((acc, expense) => acc + expense.aloQuantity, 0);
}

export function getSumOfAndaQuantities(expenses: ExpenseInterface[]) {
  return expenses.reduce((acc, expense) => acc + expense.andaQuantity, 0);
}

export function getNextIndex(expenses: ExpenseInterface[]) {
  return 1000;
}
