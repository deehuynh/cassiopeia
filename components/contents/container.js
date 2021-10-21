import Item from "./item"

export default function Container (props) {
  const listItem = [];
  props.prAPI.forEach((item, index) => {
    listItem.push(
      <Item />
    );
  });

  return (
    <div className="content__container">
      {listItem}
    </div>
  )
}