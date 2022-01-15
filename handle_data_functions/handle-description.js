export default function handleDescriptionText (prs) {
  let descriptionText = "";

  if (prs.type) {
    descriptionText = descriptionText.concat("Types: " + prs.type + ". ")
  }

  if (prs.includes && prs.includes.length !== 0) {
    descriptionText = descriptionText.concat("Includes: " + prs.includes + ". ")
  }

  if (prs.occasion) {
    descriptionText = descriptionText.concat("On the occasion of " + prs.occasion + ". ")
  }

  if (prs.offer) {
    descriptionText = descriptionText.concat("Offer: " + prs.offer + ". ")
  }

  if (prs.price) {
    descriptionText = descriptionText.concat("Price: $" + prs.price + ".")
  }

  return descriptionText
}