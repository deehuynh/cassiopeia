// function: merge entire items to an array
export default function getAllProducts(data) {
  const pages = ["flowers", "plants", "gifts"]
  const mergedData = []

  pages.forEach((page) => {
    if (data[page]) {
      data[page].forEach((item) => {
        mergedData.push({...item, page: page})
      })
    }
  })

  return mergedData
}