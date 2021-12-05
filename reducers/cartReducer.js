const initialState = typeof window !== 'undefined' ? localStorage.getItem('cart') : []

export default function cartReducer (state = initialState, action) {
  switch (action.type) {
    case 'addToCart':
      const itemData = action.payload
      if (typeof window !== 'undefined') {
        // storaged items as an array
        let itemStorage = []

        // check the first added product
        if (!localStorage.getItem('cart')) {
        itemStorage.push(itemData)
        localStorage.setItem('cart', JSON.stringify(itemStorage))
        } else {
        // not first product
        // get an currently items array
        itemStorage = JSON.parse(localStorage.getItem('cart'))
        // push new item to items array
        itemStorage.push(itemData)
        // set localStorage
        localStorage.setItem('cart', JSON.stringify(itemStorage))
        }
      }
      
      return state
    default:
      return state
  }
}