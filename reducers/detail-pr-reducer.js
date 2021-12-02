export default function detailProductReducer (state, action) {
  switch (action.type) {
    case 'increase_amount_pr':
      if (state.amount < 100) {
        return {
          amount: state.amount + 1
        }
      } else {
        return {amount: state.amount}
      }
    case 'decrease_amount_pr':
      if (state.amount > 1) {
        return {
          amount: state.amount - 1
        }
      } else {
        return {amount: state.amount}
      }
    default:
      throw new Error()
  }
}