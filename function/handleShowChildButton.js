export default function handleShowChildButton (firstRef, secondRef, thirdRef) {
  const classFirstRef = firstRef.current;
  const classSecondRef = secondRef.current;
  const classThirdRef = thirdRef.current;

  if (classFirstRef.className === 'show' && classSecondRef.className === 'hiden') {
    classFirstRef.className = 'hiden';
    classSecondRef.className = 'show';
    classThirdRef.className = 'product-detail__list-children';
  } else {
    classFirstRef.className = 'show';
    classSecondRef.className = 'hiden';
    classThirdRef.className = 'product-detail__list-children product-detail__list-children--hidden';
  }
}