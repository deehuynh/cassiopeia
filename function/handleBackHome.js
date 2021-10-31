// when logo is clicked
// come back home and hidden content modals

export default function handleBackHome (refArray) {
  refArray.forEach((item) => {
    item[0].contentRef.current.className = item[0].hidden;
    if (item[0].openRef && item[0].closeRef) {
      item[0].openRef.current.className = "show";
      item[0].closeRef.current.className = "hiden";
    } else if (item[0].btnRef) {
      item[0].btnRef.current.className = "header__search-btn";
    }
  });
}