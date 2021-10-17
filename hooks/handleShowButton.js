export default function handleShowButton (firstRef, secondRef, show, hiden) {
  if (firstRef.current.className !== hiden) {
    firstRef.current.className = hiden;
    secondRef.current.className = show;
  }
}