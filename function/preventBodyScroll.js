export default function preventBodyScroll (toggle) {
  if (toggle === true) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }
}