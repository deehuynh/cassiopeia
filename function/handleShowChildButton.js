export default function handleShowChildButton (firstRef, secondRef) {
  const classFirstRef = firstRef.current;
  const classSecondRef = secondRef.current;

  if (classFirstRef.className === 'show' && classSecondRef.className === 'hiden') {
    classFirstRef.className = 'hiden';
    classSecondRef.className = 'show';
  } else {
    classFirstRef.className = 'show';
    classSecondRef.className = 'hiden';
  }
}