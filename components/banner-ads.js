import Image from "next/image"

const adsAPI = [
  {type: 'primary', background: '', title: 'title', description: 'abcds', btnTitle: 'Shop now'},
  {type: 'secondary', image: ''},
  {type: 'secondary', image: ''},
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
      if (item.image !== '') {
        sndBanner.push(
          <div key={index} className="banner-ads__image">
            <Image
              src={item.image}
              alt='banner'
            />
          </div>
        );
      }
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