import Title from "../components/title"
// import components
import BannerAds from "../components/contents/banner-ads"
import Headline from "../components/contents/title"
import Container from "../components/contents/slide-container"

export default function Home ({latestProducts, adsData, relevantProducts}) {
  return (
    <>
      <Title>Cassiopeia | Flower Store</Title>

      <div className="home">
        <BannerAds adsAPI={adsData} />
        <Headline>New</Headline>
        <Container className="home__container" page="flowers" prAPI={latestProducts} />

        <Headline>Relevant</Headline>
        <Container
          className="home__container" page="relevant"
          prAPI={relevantProducts} unSeeMore
        />
      </div>
    </>
  )
}

export async function getStaticProps() {
  // fetch all flowers
  const resAllFlowers = await fetch('https://dh-cassiopeia-default-rtdb.asia-southeast1.firebasedatabase.app/flowers.json')
  const allProductsData = await resAllFlowers.json()
  // get latest flowers
  const latestProducts = allProductsData.reverse().slice(0,5)
  // fetch all database
  const resAllData = await fetch('https://dh-cassiopeia-default-rtdb.asia-southeast1.firebasedatabase.app/.json')
  const getAllData = await resAllData.json()
  // function gets random key of array
  const getRandomPr = (page) => {
    if (page !== "flowers") {
      return getAllData[page][Math.floor(Math.random()*getAllData[page].length)]
    } else {
      // get flowers that is not in latest prs
      let getRandomPrTmp = []
      while (getRandomPrTmp.length < 1) {
        const randomFlower = getAllData[page][Math.floor(Math.random()*getAllData[page].length)]
        if (
          (randomFlower.id !== latestProducts[0].id) && (randomFlower.id !== latestProducts[1].id) &&
          (randomFlower.id !== latestProducts[2].id) && (randomFlower.id !== latestProducts[3].id) &&
          (randomFlower.id !== latestProducts[4].id)
        ) {
          getRandomPrTmp = randomFlower
        }
      }

      return getRandomPrTmp
    }
  }
  // function gets two random products
  const getTwoRandomPr = (page) => {
    const twoRandomPrs = []
    while (twoRandomPrs.length < 2) {
      // less than 2 products, end result will be empty
      if (getAllData[page].length < 2) {
        break
      }
      // getting random pr
      const randomPr = getRandomPr(page)
      // getting first pr
      if (twoRandomPrs.length === 0) {
        twoRandomPrs.push(randomPr)
      } else {
        // the second pr must different the first pr
        if (twoRandomPrs[0] !== randomPr) {
          twoRandomPrs.push(randomPr)
        }
      }
    }

    return twoRandomPrs
  }
  
  const pages = ["flowers", "plants", "gifts"]
  // relevantProducts data
  const relevantProducts = []
  pages.forEach((page) => {
    const twoPrsArr = getTwoRandomPr(page)
    if (twoPrsArr.length !== 0) {
      relevantProducts.push(twoPrsArr[0], twoPrsArr[1])
    }
  })

  const adsData = [
    {
      type: 'primary', background: '/cass15_mrg4hb.jpg',
      title: '40% off',
      description: 'Best deals this week. Fresh flowers, plants and gifts',
      btnTitle: 'Shop now',
      url:'/flowers'
    }, {
      type: 'secondary', title: 'Nice little gifts',
      description: 'for loved ones',
      background: '/cass23_gfwimt.png', btnTitle: 'View now',
      url:'/gifts'
    }, {
      type: 'secondary', title: 'Plants',
      description: 'for home comfort',
      background: '/cass31_esdbjz.png', btnTitle: 'View now',
      url:'/plants'
    }
  ]

  return {
    props: {
      latestProducts,
      adsData,
      relevantProducts
    }
  }
}
