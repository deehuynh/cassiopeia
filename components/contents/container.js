import Item from "./item"
import { Splide, SplideSlide } from "@splidejs/react-splide";

export default function Container (props) {
  const className = props.className && props.className !== '' ? ' ' + props.className : '';
  const listItem = [];
  props.prAPI && props.prAPI.forEach((item, index) => {
    listItem.push(
      <SplideSlide key={index}>
        <Item 
          name={item.name} thumbnail={item.thumbnail} price={item.price}
          oldPrice={item.oldPrice}
        />
      </SplideSlide>
    );
  });

  if (listItem.length > 3) {
    listItem.push(
      <SplideSlide key={listItem.length}>
        <Item seeMore />
      </SplideSlide>
    );
  }

  return (
    <div className={`content__container` + className}>
      <Splide
        options={{
          type: 'slide',
          width: '100%',
          perPage: 4,
          perMove: 1,
          pagination: false
        }}
      >
        {listItem}
      </Splide>
    </div>
  )
}