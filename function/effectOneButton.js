export default function effectOneButton (refContainer, classEffect) {
  if (refContainer.current.className !== classEffect) {
    refContainer.current.className = classEffect;
  } else {
    refContainer.current.className = 'header__search-btn';
  }
}