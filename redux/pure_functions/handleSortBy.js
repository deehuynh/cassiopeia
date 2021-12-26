export default function handleSortBy([...pageData], type) {
  if (type === 'Low to high') {
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

  if (type === 'High to low') {
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

  if (type === 'Newest') {
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

  if (type === 'Oldest') {
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