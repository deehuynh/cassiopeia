import Image from "next/image"
import Link from "next/link"
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';

export default function BannerAds (props) {
  // ads data
  const adsAPI = props.adsAPI;
  const slideBanner = [];
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
              <Link href={item.url}>
                <a>
                  <div className="banner-ads__btn">
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
              <Link href={item.url}>
                <a>
                  <div className="banner-ads__btn banner-ads__btn--light">
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
          <div className="m-banner-ads__slide">
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
  
            <div className="m-banner-ads__title m-banner-ads--spacing">
              {item.title}
            </div>
  
            <p className="m-banner-ads__des m-banner-ads--spacing">{item.description}</p>
  
            {
              item.btnTitle !== '' ? (
                <Link href={item.url}>
                  <a>
                    <div className="m-banner-ads__btn m-banner-ads--spacing">
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
          <div className="m-banner-ads__slide">
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
  
            <div className="m-banner-ads__title">
              {item.title}
            </div>
  
            <p className="m-banner-ads__des">{item.description}</p>
  
            {
              item.btnTitle !== '' ? (
                <Link href={item.url}>
                  <a>
                    <div className="m-banner-ads__btn">
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
      <div className="banner-ads">
        {prBanner}
        <div className="banner-ads__secondary">
          {sndBanner}
        </div>
      </div>

      <div className="m-banner-ads">
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