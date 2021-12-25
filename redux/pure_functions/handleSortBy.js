export default function handleSortBy([...pageData], type) {
  if (type === 'priceLowToHigh') {
    let tmp
    for (let i = 0; i < pageData.length - 1; i++) {
      for (let j = i + 1; j < pageData.length; j++) {
        if (Number(pageData[i].price) > Number(pageData[j].price)) {
          tmp = pageData[i]
          pageData[i] = pageData[j]
          pageData[j] = tmp
        }
      }
    }
    return pageData
  }

  if (type === 'priceHighToLow') {
    let tmp
    for (let i = 0; i < pageData.length - 1; i++) {
      for (let j = i + 1; j < pageData.length; j++) {
        if (Number(pageData[i].price) < Number(pageData[j].price)) {
          tmp = pageData[i]
          pageData[i] = pageData[j]
          pageData[j] = tmp
        }
      }
    }
    return pageData
  }

  if (type === 'newest') {
    let tmp
    for (let i = 0; i < pageData.length - 1; i++) {
      for (let j = i + 1; j < pageData.length; j++) {
        if (Number(pageData[i].id) < Number(pageData[j].id)) {
          tmp = pageData[i]
          pageData[i] = pageData[j]
          pageData[j] = tmp
        }
      }
    }
    return pageData
  }

  if (type === 'oldest') {
    let tmp
    for (let i = 0; i < pageData.length - 1; i++) {
      for (let j = i + 1; j < pageData.length; j++) {
        if (Number(pageData[i].id) > Number(pageData[j].id)) {
          tmp = pageData[i]
          pageData[i] = pageData[j]
          pageData[j] = tmp
        }
      }
    }
    return pageData
  }
}