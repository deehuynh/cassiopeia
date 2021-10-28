export default function preventBodyScroll (toggle) {
  if (toggle === true) {
    document.body.classList.add('lock-body');
  } else {
    document.body.classList.remove('lock-body');
  }
}