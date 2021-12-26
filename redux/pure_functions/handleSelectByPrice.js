import handleSortBy from "./handleSortBy"

export default function handleSelectByPrice(data, option) {
  const endData = []
  if (option === "Under $10") {
    data.forEach((item) => {
      if (Number(item.price) < 10) {
        endData.push(item)
      }
    })

    return handleSortBy(endData, 'priceLowToHigh')
  } else if (option === "$10 - $50") {
    data.forEach((item) => {
      if ((Number(item.price) >= 10) && (Number(item.price) < 50)) {
        endData.push(item)
      }
    })

    return handleSortBy(endData, 'priceLowToHigh')
  } else if (option === "$50 - $100") {
    data.forEach((item) => {
      if ((Number(item.price) >= 50) && (Number(item.price) < 100)) {
        endData.push(item)
      }
    })

    return handleSortBy(endData, 'priceLowToHigh')
  } else if (option === "Over $100") {
    data.forEach((item) => {
      if (Number(item.price) > 50) {
        endData.push(item)
      }
    })

    return handleSortBy(endData, 'priceLowToHigh')
  }
}