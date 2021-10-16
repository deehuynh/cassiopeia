export default function handleShow (refContainer, hiden, show) {
  if (refContainer.current.className !== show) {
    refContainer.current.className = show;
  } else {
    refContainer.current.className = hiden;
  }
}