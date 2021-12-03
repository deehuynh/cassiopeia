export default function handleAddToCart (itemData = {}) {
  let itemStorage = []

  if (!localStorage.getItem('cart')) {
    itemStorage.push(itemData)
    localStorage.setItem('cart', JSON.stringify(itemStorage))
  } else {
    itemStorage = JSON.parse(localStorage.getItem('cart'))
    itemStorage.push(itemData)
    localStorage.setItem('cart', JSON.stringify(itemStorage))
  }
}