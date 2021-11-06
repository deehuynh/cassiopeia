import Cart from "./cart-modal"

export default function ModalContainer (props) {
  return (
    <div className="modal-container">
      <Cart 
        cartRef={props.cartRef}
        openCartRef={props.openCartRef} closeCartRef={props.closeCartRef}
      />
    </div>
  )
}