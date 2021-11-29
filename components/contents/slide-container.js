import Item from "./item"
import { Splide, SplideSlide } from "@splidejs/react-splide";

export default function Container (props) {
  const className = props.className && props.className !== '' ? ' ' + props.className : '';
  const listItem = [];
  props.prAPI && props.prAPI.forEach((item, index) => {
    let page = props.page;
    if (props.page === "relevant") {
      if ((index === 0) || (index === 1)) {
        page = "flowers"
      } else if ((index === 2) || (index === 3)) {
        page = "plants"
      } else {
        page = "gifts"
      }
    }
    listItem.push(
      <SplideSlide key={index}>
        <Item 
          id={item.id}
          page={page}
          name={item.name} thumbnail={item.thumbnail} price={item.price}
          imageType={item.imageType}
          oldPrice={item.oldPrice}
        />
      </SplideSlide>
    );
  });

  if (listItem.length > 3 && !props.unSeeMore) {
    listItem.push(
      <SplideSlide key={listItem.length}>
        <Item 
          seeMore
          page={props.page} 
        />
      </SplideSlide>
    );
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
          perPage: 4, // fix error: next arrow not disabled
          perMove: 1,
          pagination: false,
          breakpoints: {
            1200: {
              fixedWidth: '24%',
              gap: '1.33%'
            },
            620: {
              fixedWidth: '32%',
              gap: '1.8%',
              perPage: 3
            },
            425: {
              fixedWidth: '49%',
              gap: '2%',
              perPage: 2
            }
          }
        }}
      >
        {listItem}
      </Splide>
    </div>
  )
}