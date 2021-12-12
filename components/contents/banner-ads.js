import Image from "next/image"
import Link from "next/link"
import { Splide, SplideSlide } from '@splidejs/react-splide';

export default function BannerAds (props) {
  // ads data
  const adsAPI = props.adsAPI;
  const slideBanner = [];
  const prBanner = [];
  const sndBanner = [];
  adsAPI.forEach((item, index) => {
    if (item.type === 'primary') {
      prBanner.push(
        <div key={index} className="banner-offer__primary">
          <div className="banner-offer__background">
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
          <div className="banner-offer__title">
            {item.title}
          </div>

          <p>{item.description}</p>

          {
            item.btnTitle !== '' ? (
              <Link href={item.url}>
                <a>
                  <div className="banner-offer__btn">
                    <span>{item.btnTitle}</span>
                    <img src="/svgs/line-right-arrow.svg" alt="right arrow" />
                  </div>
                </a>
              </Link>
            ) : ''
          }
        </div>
      );
    } else if (item.type === 'secondary') {
      sndBanner.push(
        <div key={index} className="banner-offer__image">
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

          <div className="banner-offer__title banner-offer__title--light">
            {item.title}
          </div>

          <p className="banner-offer__description">{item.description}</p>

          {
            item.btnTitle !== '' ? (
              <Link href={item.url}>
                <a>
                  <div className="banner-offer__btn banner-offer__btn--light">
                    <span>{item.btnTitle}</span>
                    <img src="/svgs/line-right-arrow-black.svg" alt="right arrow" />
                  </div>
                </a>
              </Link>
            ) : ''
          }
        </div>
      );
    }
  });

  adsAPI.forEach((item, index) => {
    if (item.type && item.type === 'primary') {
      slideBanner.push(
        <SplideSlide key={index} >
          <div className="m-banner-offer__slide">
            {
              item.background !== '' ? (
                <Image 
                  src={item.background}
                  alt='banner ads'
                  layout='fill'
                  objectFit='cover'
                />
              ) : ''
            }
  
            <div className="m-banner-offer__title m-banner-offer--spacing">
              {item.title}
            </div>
  
            <p className="m-banner-offer__des m-banner-offer--spacing">{item.description}</p>
  
            {
              item.btnTitle !== '' ? (
                <Link href={item.url}>
                  <a>
                    <div className="m-banner-offer__btn m-banner-offer--spacing">
                      <span>{item.btnTitle}</span>
                      <img src="/svgs/line-right-arrow-black.svg" alt="right arrow" />
                    </div>
                  </a>
                </Link>
              ) : ''
            }
          </div>
        </SplideSlide>
      );
    } else {
      slideBanner.push(
        <SplideSlide key={index} >
          <div className="m-banner-offer__slide">
            {
              item.background !== '' ? (
                <Image 
                  src={item.background}
                  alt='banner ads'
                  layout='fill'
                  objectFit='cover'
                />
              ) : ''
            }
  
            <div className="m-banner-offer__title">
              {item.title}
            </div>
  
            <p className="m-banner-offer__des">{item.description}</p>
  
            {
              item.btnTitle !== '' ? (
                <Link href={item.url}>
                  <a>
                    <div className="m-banner-offer__btn">
                      <span>{item.btnTitle}</span>
                      <img src="/svgs/line-right-arrow-black.svg" alt="right arrow" />
                    </div>
                  </a>
                </Link>
              ) : ''
            }
          </div>
        </SplideSlide>
      );
    }
  });
  return (
    <>
      <div className="banner-offer">
        {prBanner}
        <div className="banner-offer__secondary">
          {sndBanner}
        </div>
      </div>

      <div className="m-banner-offer">
        <Splide
          options = {{
            type: 'loop',
            perPage: 1,
            autoplay: true,
            arrows: false
          }}
        >
          {slideBanner}
        </Splide>
      </div>
    </>
  )
}