// on header bar, when a button is clicked
// other button's content will be not displayed

export default function preventOnClick (firstRef, secondRef) {
  // [content, open, close]
  if (firstRef.length !== 2) {
    firstRef[0].current.className = "hiden";
    firstRef[1].current.className = "show";
    firstRef[2].current.className = "hiden";
  } else {
    if (firstRef[0].searchRef !== '') {
      firstRef[0].searchRef.current.className = "header__search--hiden";
    }
    firstRef[0].mSearchRef.current.className = "hiden";
    // [content, buttonRef]
    firstRef[1].current.className = "header__search-btn";
  }

  if (secondRef.length !== 2) {
    secondRef[0].current.className = "hiden";
    secondRef[1].current.className = "show";
    secondRef[2].current.className = "hiden";
  } else {
    if (secondRef[0].searchRef !== '') {
      secondRef[0].searchRef.current.className = "header__search--hiden";
    }
    secondRef[0].mSearchRef.current.className = "hiden";
    // [content, buttonRef]
    secondRef[1].current.className = "header__search-btn";
  }
}