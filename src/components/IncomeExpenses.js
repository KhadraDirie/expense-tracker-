import React, {useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'



export const IncomeExpenses = () => {
  
  const {transactions} = useContext(GlobalContext)
  const amounts = transactions.map (transaction => transaction.amount)
  const income = amounts //here the total income is calculated
  .filter(item => item > 0)
  .reduce((acc,item) => (acc += item),0)
  .toFixed(2)
  //above we filter through and get anything greater than 0, add them all together using reduce and then add a decimal
const expense = (
  amounts.filter (item => item< 0).reduce((acc,item)=> (acc +=item),0) * -1
)
//total expense is calculated

  return (
    <div>
      <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p id="money-plus" class="money plus">{income}</p>
        </div>
        <div>
          <h4>Expense</h4>
          <p id="money-minus" class="money minus">{expense}</p>
        </div>
      </div>
    </div>
  )
}

export default IncomeExpenses
