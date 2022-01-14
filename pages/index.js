import Title from "../components/title"
import Description from "../components/description"
// import components
import BannerAds from "../components/contents/banner-ads"
import Headline from "../components/contents/title"
import Container from "../components/contents/slide-container"

export default function Home ({latestProducts, banners, relevantProducts}) {
  return (
    <>
      <Title>Cassiopeia | Flower Store</Title>
      <Description>
        The best way to brighten the special day of a friend
        or loved one is with flowers. But what happens when that
        special someone is far away? With Cassiopeia it is possible
        to surprise someone with a lovely bouquet no matter where he
        or she is in the world.
      </Description>

      <div className="home">
        <BannerAds adsAPI={banners} />
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
  // fetch banner data
  const resBanner = await fetch('https://dh-cassiopeia-default-rtdb.asia-southeast1.firebasedatabase.app/banner.json')
  const banners = await resBanner.json()
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

  return {
    props: {
      latestProducts,
      banners,
      relevantProducts
    }
  }
}
