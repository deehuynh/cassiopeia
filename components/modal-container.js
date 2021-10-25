import Cart from "./cart-modal"

export default function ModalContainer ({children}) {
  return (
    <div className="modal-container">
      <Cart />
    </div>
  )
}