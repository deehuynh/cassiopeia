export default function handleAddToCart (itemData) {
  localStorage.setItem('cart', itemData)
}