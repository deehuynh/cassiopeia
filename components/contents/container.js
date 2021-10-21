import Item from "./item"

export default function Container (props) {
  const className = props.className && props.className !== '' ? ' ' + props.className : '';
  const listItem = [];
  props.prAPI && props.prAPI.forEach((item, index) => {
    listItem.push(
      <Item 
        name={item.name} thumbnail={item.thumbnail} price={item.price}
        oldPrice={item.oldPrice} key={index} 
      />
    );
  });

  return (
    <div className={`content__container` + className}>
      {listItem}
    </div>
  )
}