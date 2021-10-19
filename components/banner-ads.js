import Image from "next/image"
import Img1 from "../public/images/cass15.jpg"
import Img2 from "../public/images/cass21.jpg"
import Img3 from "../public/images/cass3.jpg"

const adsAPI = [
  {type: 'primary', background: Img1, title: '40% off', description: 'Best deals this week. Fresh flowers, plants and gifts', btnTitle: 'Shop now'},
  {type: 'secondary', image: Img3},
  {type: 'secondary', image: Img2},
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
            item.image !== '' ? (
              <Image
                src={item.image}
                alt='banner'
              />
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