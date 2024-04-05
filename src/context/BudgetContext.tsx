import { Dispatch, ReactNode, createContext, useReducer } from "react"
import { BudgetActions, BudgetState, budgetReducer, initialState } from "../reducers/budgetReducer";

type BudgetContextProps = {
    state: BudgetState;
    dispatch: Dispatch<BudgetActions>;
}

type BudgetProviderProps = {
    children: ReactNode
}

export const BudgetContext = createContext<BudgetContextProps>({} as BudgetContextProps);

export const BudgetProvider = ({ children }: BudgetProviderProps) => {

    const [state, dispatch] = useReducer(budgetReducer, initialState);

    return (
        <BudgetContext.Provider value={{
            state,
            dispatch,
        }}>
            {children}
        </BudgetContext.Provider>
    )
}