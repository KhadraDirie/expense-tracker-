

//A reducer is a way to change to your state and send it down to your component/application 
//a new state must be created 

export default (state, action) => {
    switch(action.type) {
      case 'Delete_transaction':
        return {
          ...state,
          transactions: state.transactions.filter(transaction => transaction.id !== action.payload), // sends down all the transactions except the one that was deleted
        };
        case 'Add_transaction' :
          return {
            ...state,
            transactions: [action.payload,...state.transactions]
          }
      default:
        return state;
    }
  };
  