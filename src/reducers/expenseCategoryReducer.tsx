import { ExpenseCategory } from "@/app/home/setting/expenseCategory/_components/Main.type";

export type ExpenseCategoryAction =
    | {
          type: "SET_INITIALIZE";
          payload: ExpenseCategory[];
      }
    | {
          type: "ADD";
          payload: ExpenseCategory;
      }
    | {
          type: "UPDATE";
          payload: { id: number; name: string };
      }
    | {
          type: "DELETE";
          payload: { id: number };
      };

const expenseCategoryReducer = (
    state: ExpenseCategory[],
    action: ExpenseCategoryAction
) => {
    switch (action.type) {
        case "SET_INITIALIZE":
            return action.payload;
        case "ADD":
            return [...state, action.payload];
        case "UPDATE":
            return state.map((category) => {
                if (category.id === action.payload.id) {
                    return {
                        ...category,
                        name: action.payload.name,
                    };
                }

                return category;
            });
        case "DELETE":
            return state.filter(
                (category) => category.id !== action.payload.id
            );
        default:
            return state;
    }
};

export default expenseCategoryReducer;
