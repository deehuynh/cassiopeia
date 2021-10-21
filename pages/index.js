import Title from "../components/title"
// import components
import BannerAds from "../components/contents/banner-ads"
import Headline from "../components/contents/title"
import Container from "../components/contents/container"

const productsAPI = [
  {
    name: 'White Lilies and Gerberas', price: '54', oldPrice: '',
    thumbnail: '/5cdd463408a93217111334_xbpxkx.webp'},
  {
    name: 'Chrysanthemums and Roses', price: '44', oldPrice: '',
    thumbnail: '/5d19dc8cc0983744838000_xc256j.webp'
  },
  {name: 'Roses and Lilies', price: '69', oldPrice: '82', thumbnail: '/5d84d46e1fe63737087781_eztymk.webp'},
  {name: 'Red Roses and White Lilies', price: '99', oldPrice: '', thumbnail: '/5d84dc1a631b2292689077_nihv8m.webp'},
  {name: 'Lilies And Roses', price: '39', oldPrice: '50', thumbnail: '/5d84d53800517236157520_awcivk.webp'}
];

export default function Home () {
  return (
    <>
      <Title>Cassiopeia | Flower Store</Title>

      <div className="home">
        <BannerAds />
        <Headline>New</Headline>
        <Container />
      </div>
    </>
  )
}
