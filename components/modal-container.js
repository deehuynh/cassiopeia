// modal components
import Cart from "./cart-modal"
import SearchModal from "./search-modal"

export default function ModalContainer (props) {
  const overlayRef = props.overlayModalRef

  return (
    <div className="modal-container">
      <div 
        ref={overlayRef} 
        className="modal-container__overlay modal-container__overlay--hidden"
        id="modal-container__overlay"
      ></div>

      <Cart 
        cartRef={props.cartRef} orderCartRef={props.orderCartRef}
        openCartRef={props.openCartRef} closeCartRef={props.closeCartRef}
        overlayModalRef={overlayRef}
      />

      <SearchModal />
    </div>
  )
}