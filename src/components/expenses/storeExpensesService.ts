import { ExpenseInterface } from "./storeExpenses";

export function getSumOfAloQuantities(expenses: ExpenseInterface[]): number {
  return expenses.reduce((acc, expense) => acc + expense.aloQuantity, 0);
}

export function getSumOfAndaQuantities(expenses: ExpenseInterface[]): number {
  return expenses.reduce((acc, expense) => acc + expense.andaQuantity, 0);
}

export function getNextIndex(expenses: ExpenseInterface[]): number {
  if (expenses.length === 0) return 1;
  const maxIndex = Math.max(...expenses.map((expense) => expense.index));
  return maxIndex + 1;
}

interface DebtObject {
  acreditor: string;
  quantity: number;
}
export function getGeneralDebtObject(expenses: ExpenseInterface[]): DebtObject {
  const aloQuantities = getSumOfAloQuantities(expenses);
  const andaQuantities = getSumOfAndaQuantities(expenses);

  return {
    acreditor: aloQuantities > andaQuantities ? "Alo" : "Anda",
    quantity: Math.abs(aloQuantities - andaQuantities),
  };
}
