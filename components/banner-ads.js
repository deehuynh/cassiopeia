import Image from "next/image"
import {Slide} from "react-slideshow-image"

const slideImages = [
  "/images/cass15.jpg",
  "images/cass23.png",
  "images/cass31.png"
];

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  prevArrow: <div style={{width: "30px", marginRight: "-30px"}}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#fff"><path d="M242 180.6v-138L0 256l242 213.4V331.2h270V180.6z"/></svg></div>,
  nextArrow: <div style={{width: "30px", marginLeft: "-30px"}}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#fff"><path d="M512 256L270 42.6v138.2H0v150.6h270v138z"/></svg></div>
};

const adsAPI = [
  {
    type: 'primary', background: '/cass15_mrg4hb.jpg',
    title: '40% off',
    description: 'Best deals this week. Fresh flowers, plants and gifts',
    btnTitle: 'Shop now'
  }, {
    type: 'secondary', title: 'Nice little gifts',
    description: 'for loved ones',
    background: '/cass23_gfwimt.png', btnTitle: 'View now'
  }, {
    type: 'secondary', title: 'Plants',
    description: 'for home comfort',
    background: '/cass31_esdbjz.png', btnTitle: 'View now'
  }
];

export default function BannerAds () {
  const prBanner = [];
  const sndBanner = [];
  adsAPI.forEach((item, index) => {
    if (item.type === 'primary') {
      prBanner.push(
        <div key={index} className="banner-ads__primary">
          <div className="banner-ads__background">
            {
              item.background !== '' ? (
                <Image
                  src={item.background}
                  alt={item.title}
                  width={1160}
                  height={220}
                />
              ) : ''
            }
          </div>
          <div className="banner-ads__title">
            {item.title}
          </div>

          <p>{item.description}</p>

          {
            item.btnTitle !== '' ? (
              <div className="banner-ads__btn">
                <span>{item.btnTitle}</span>
                <img src="/svgs/line-right-arrow.svg" alt="right arrow" />
              </div>
            ) : ''
          }
        </div>
      );
    } else if (item.type === 'secondary') {
      sndBanner.push(
        <div key={index} className="banner-ads__image">
          {
            item.background !== '' ? (
              <Image
                src={item.background}
                alt='banner'
                width={560}
                height={221}
              />
            ) : ''
          }

          <div className="banner-ads__title banner-ads__title--light">
            {item.title}
          </div>

          <p className="banner-ads__description">{item.description}</p>

          {
            item.btnTitle !== '' ? (
              <div className="banner-ads__btn banner-ads__btn--light">
                <span>{item.btnTitle}</span>
                <img src="/svgs/line-right-arrow-black.svg" alt="right arrow" />
              </div>
            ) : ''
          }
        </div>
      );
    }
  });
  return (
    <div className="banner-ads">
      {prBanner}
      <div className="banner-ads__secondary">
        {sndBanner}
      </div>
    </div>
  )
}