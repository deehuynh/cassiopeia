const handleToggle = (refContainer) => {
  if (refContainer.current.style.display === 'none') {
    refContainer.current.style = "display: block";
  } else {
    refContainer.current.style = "display: none";
  }
}

export default handleToggle;