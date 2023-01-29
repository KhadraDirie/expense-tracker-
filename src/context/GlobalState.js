import React, {createContext,useReducer} from 'react'
import AppReducer from '../context/AppReducer'



//Initial state 
const initialState = {
    transactions: [
{ id: 1, text: 'Groceries', amount: -40 },
  { id: 2, text: 'Rent', amount: -700 },
  { id: 3, text: 'Utilities', amount: -80 },
  { id: 4, text: 'Salary', amount: 2500 },
  { id: 5, text: 'Payment', amount: 200 }
]

    
}
// a reducer in redux is how we specify the application state changes in response to certain actions 
//Create context

export const GlobalContext = createContext(initialState)
//in order for other components to have access to global state we need to have a provider, so all components need to be wrapped ina provider component 
//So reducers are basically pure JS functions which take in the previous state and an action and return the newly updated state.

//Provider
export const GlobalProvider = ({children}) =>{
const [state,dispatch] = useReducer (AppReducer, initialState)


//Actions

function deleteTransaction(id){
    dispatch({
        type: 'Delete_transaction',
        payload: id
    })
}


function addTransaction(transaction){
    dispatch({
        type: 'add_Transaction',
        payload: transaction
    })
}
return (<GlobalContext.Provider value ={{
    transactions: state.transactions,
    deleteTransaction,
    addTransaction
}}>
    {children} 
</GlobalContext.Provider>)
}



