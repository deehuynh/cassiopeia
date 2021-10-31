// on header bar, when a button is clicked
// other button's content will be not displayed

export default function preventOnClick (firstRef, secondRef) {
  // [content, open, close]
  firstRef[0].current.className = "hiden";
  secondRef[0].current.className = "hiden";

  if (firstRef.length !== 2) {
    firstRef[1].current.className = "show";
    firstRef[2].current.className = "hiden";
  } else {
    // [content, buttonRef]
    firstRef[1].current.className = "header__search-btn";
  }

  if (secondRef.length !== 2) {
    secondRef[1].current.className = "show";
    secondRef[2].current.className = "hiden";
  } else {
    // [content, buttonRef]
    secondRef[1].current.className = "header__search-btn";
  }
}