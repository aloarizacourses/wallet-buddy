import { create } from "zustand";

export interface ExpenseInterface {
  index: number;
  description: string;
  aloQuantity: number;
  andaQuantity: number;
}

interface QuantitiesStore {
  expenses: ExpenseInterface[];
  addExpense: (expense: ExpenseInterface) => void;
  deleteExpense: (id: number) => void;
}

const useExpenses = create<QuantitiesStore>((set) => ({
  expenses: [
    {
      index: 0,
      description: "Green Thai : )",
      aloQuantity: 3,
      andaQuantity: 5,
    },
    { index: 1, description: "Music Bar", aloQuantity: 6, andaQuantity: 10 },
    { index: 2, description: "Schawarma", aloQuantity: 9, andaQuantity: 15 },
  ],
  addExpense: (expense) => {
    return set((store) => ({
      expenses: [
        ...store.expenses,
        {
          index: expense.index,
          description: expense.description,
          aloQuantity: expense.aloQuantity,
          andaQuantity: expense.andaQuantity,
        },
      ],
    }));
  },
  deleteExpense: (id) =>
    set((store) => ({
      expenses: store.expenses.filter((expense) => expense.index !== id),
    })),
}));

export default useExpenses;
