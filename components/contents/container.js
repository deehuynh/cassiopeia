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

  const preButton = () => {
    return (
      <button className="splide__arrow content-item__arrow content-item__arrow--pre">
        <img src="/svgs/line-left-arrow-black.svg" alt="arrow" />
      </button>
    )
  }

  return (
    <div className={`content__container` + className}>
      <Splide
        renderControls={ () => (
          <div className="splide__arrows">
            <button className="splide__arrow content-item__arrow splide__arrow--prev content-item__arrow--pre">
              <img src="/svgs/line-left-arrow-black.svg" alt="arrow" />
            </button>
            <button className="splide__arrow content-item__arrow splide__arrow--next content-item__arrow--next">
              <img src="/svgs/line-right-arrow-black.svg" alt="arrow" />
            </button>
          </div>
        ) }
        options={{
          type: 'slide',
          width: '100%',
          fixedWidth: '260px',
          gap: '40px',
          perMove: 1,
          pagination: false,
          breakpoints: {
            1200: {
              fixedWidth: '24%',
              gap: '1.33%'
            },
            620: {
              fixedWidth: '32%',
              gap: '1.8%'
            },
            425: {
              fixedWidth: '49%',
              gap: '2%'
            }
          }
        }}
      >
        {listItem}
      </Splide>
    </div>
  )
}