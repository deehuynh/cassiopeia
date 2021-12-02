export default function detailProductReducer (state, action) {
  switch (action.type) {
    case 'increase_amount_pr':
      return state
    case 'descrease_amount_pr':
      return state
    default:
      throw new Error()
  }
}