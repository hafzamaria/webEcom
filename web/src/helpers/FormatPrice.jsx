// JavaScript give us  Intl format for priceFormating
//https://www.freeformatter.com/pakistan-standards-code-snippets.html(for Pakistan)
///https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat(document)

const FormatPrice = ({price}) => {
  return Intl.NumberFormat("ur-PK",{
    style:"currency",
    currency:"PKR",
    maximumFractionDigits:2,
  }).format(price/100);
}

export default FormatPrice
