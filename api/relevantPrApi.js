export default function relevantPrApi (flowersData) {
  const countFlowersData = flowersData.length
  // storaged end data
  const relevantFlowers = [];
  // array of random number
  const randomNumber = [];
  // fixed error: total product is less than 5, while loop will be infinity
  const totalProduct = countFlowersData < 5 ? countFlowersData : 5

  while (randomNumber.length < totalProduct) {
    // get a random number
    const randomNumberTmp = Math.floor((Math.random() * countFlowersData) + 0)
    
    if (randomNumber.length === 0) {
      // push the first random number
      randomNumber.push(randomNumberTmp)
    } else {
      switch (randomNumber.length) {
        // random number must be different from existed number in array
        case 1 :
          if (randomNumberTmp !== randomNumber[0]) {
            randomNumber.push(randomNumberTmp)
          }
          break
        case 2:
          if ((randomNumberTmp !== randomNumber[0]) && (randomNumberTmp !== randomNumber[1])) {
            randomNumber.push(randomNumberTmp)
          }
          break
        case 3:
          if ((randomNumberTmp !== randomNumber[0]) && (randomNumberTmp !== randomNumber[1]) && (randomNumberTmp !== randomNumber[2])) {
            randomNumber.push(randomNumberTmp)
          }
          break
        case 4:
          if ((randomNumberTmp !== randomNumber[0]) && (randomNumberTmp !== randomNumber[1]) && (randomNumberTmp !== randomNumber[2]) && (randomNumberTmp !== randomNumber[3])) {
            randomNumber.push(randomNumberTmp)
          }
          break
        case 5:
          if ((randomNumberTmp !== randomNumber[0]) && (randomNumberTmp !== randomNumber[1]) && (randomNumberTmp !== randomNumber[2]) && (randomNumberTmp !== randomNumber[3]) && (randomNumberTmp !== randomNumber[4])) {
            randomNumber.push(randomNumberTmp)
          }
          break
      }
    }
  }

  // loop randomNumber if randomNumber element === item.key
  // then pushes item to relevantFlower
  randomNumber.forEach((number) => {
    flowersData.forEach((item) => {
      // number.toString() because item.id is a string
      if (number.toString() === item.id) {
        relevantFlowers.push(item)
      }
    })
  })

  return relevantFlowers
}