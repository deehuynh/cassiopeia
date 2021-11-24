export default function Gallery (props) {
  const addedClass = props.addedClass ? ' ' + props.addedClass : ''
  
  return (
    <div className={'gallery' + addedClass}></div>
  )
}