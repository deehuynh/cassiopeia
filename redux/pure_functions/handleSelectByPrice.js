import handleSortBy from "./handleSortBy"

export default function handleSelectByPrice(page, data, option) {
  const endData = []

  if (page === 'flowers') {
    if (option === "Under $10") {
      data.forEach((item) => {
        if (Number(item.price) < 10) {
          endData.push(item)
        }
      })

      if (endData.length === 0) {
        return "No products found"
      }
  
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
        if (Number(item.price) > 100) {
          endData.push(item)
        }
      })
  
      return handleSortBy(endData, 'Low to high')
    }
  } else if (page === 'plants') {
    if (option === "Under $20") {
      data.forEach((item) => {
        if (Number(item.price) < 20) {
          endData.push(item)
        }
      })
  
      return handleSortBy(endData, 'Low to high')
    } else if (option === "$20 - $70") {
      data.forEach((item) => {
        if ((Number(item.price) >= 20) && (Number(item.price) < 70)) {
          endData.push(item)
        }
      })
  
      return handleSortBy(endData, 'Low to high')
    } else if (option === "$70 - $100") {
      data.forEach((item) => {
        if ((Number(item.price) >= 70) && (Number(item.price) < 100)) {
          endData.push(item)
        }
      })
  
      return handleSortBy(endData, 'Low to high')
    } else if (option === "Over $100") {
      data.forEach((item) => {
        if (Number(item.price) > 100) {
          endData.push(item)
        }
      })
  
      return handleSortBy(endData, 'Low to high')
    }
  } else if (page === 'gifts') {
    if (option === "Under $50") {
      data.forEach((item) => {
        if (Number(item.price) < 50) {
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
        if (Number(item.price) > 100) {
          endData.push(item)
        }
      })
  
      return handleSortBy(endData, 'Low to high')
    }
  }

}