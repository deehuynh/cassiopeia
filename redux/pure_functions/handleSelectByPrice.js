import handleSortBy from "./handleSortBy"

export default function handleSelectByPrice(page, data, option) {
  const flowersPricing = ["Under $10", "$10 - $50", "$50 - $100", "Over $100"]
  const plantsPricing = ["Under $20", "$20 - $70", "$70 - $100", "Over $100"]
  const giftsPricing = ["Under $50", "$50 - $100", "Over $100"]
  const endData = []
  if (option === "Under $10") {
    data.forEach((item) => {
      if (Number(item.price) < 10) {
        endData.push(item)
      }
    })

    return handleSortBy(endData, 'Low to high')
  } else if (option === "$10 - $50") {
    data.forEach((item) => {
      if ((Number(item.price) >= 10) && (Number(item.price) < 50)) {
        endData.push(item)
      }
    })

    return handleSortBy(endData, 'Low to high')
  } else if (option === "$50 - $100") {
    data.forEach((item) => {
      if ((Number(item.price) >= 50) && (Number(item.price) < 100)) {
        endData.push(item)
      }
    })

    return handleSortBy(endData, 'Low to high')
  } else if (option === "Over $100") {
    data.forEach((item) => {
      if (Number(item.price) > 50) {
        endData.push(item)
      }
    })

    return handleSortBy(endData, 'Low to high')
  }
}