import Cart from "./cart-modal"

export default function ModalContainer (props) {
  return (
    <div className="modal-container">
      <Cart 
        cartRef={props.cartRef} orderCartRef={props.orderCartRef}
        openCartRef={props.openCartRef} closeCartRef={props.closeCartRef}
      />
    </div>
  )
}