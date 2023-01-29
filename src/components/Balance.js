import React, {useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'

export const Balance = () => {
  const {transactions} = useContext(GlobalContext)
  
  const amounts = transactions.map(transaction => transaction.amount)

  const total = amounts.reduce ((acc,item)=> (acc += item),0).toFixed(2) //reduce adds everything together and toFixed to get two decimal places
  
  return (
    <>
      <h4> Your Balance</h4>
      <h1>£{total}</h1>
    </>
  )
}
//Balance will automatically render correctly 
export default Balance
