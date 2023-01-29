import {GlobalContext} from '../context/GlobalState'
import React,{ useContext } from 'react'
import Transaction from './Transaction'




 export const TransactionList = () =>{
  const {transactions} = useContext(GlobalContext)

  
return (
    <>
    <h3>History</h3>
      <ul className="list">
        {transactions.map(transaction =>(<Transaction key={transaction.id} transaction = {transaction}/>  ))}  
        {/* because transaction is an array, we need to map/loop through it and output each transaction. so for each transaction we want to output it as a list item  */}
      
       
      </ul>
  
    </>
  )
}

export default TransactionList
