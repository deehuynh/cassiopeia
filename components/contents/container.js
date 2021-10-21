import Item from "./item"

export default function Container (props) {
  const className = props.className && props.className !== '' ? ' ' + props.className : '';
  const listItem = [];
  props.prAPI.forEach((item, index) => {
    listItem.push(
      <Item key={index} />
    );
  });

  return (
    <div className={`content__container` + className}>
      {listItem}
    </div>
  )
}