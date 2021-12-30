
export const priceToString = (amount, currency = 'gbp') => {
    let res = (amount / 100).toString()
    let price = (amount / 100)

    let currencyToken;
    switch (currency) {
        case 'gbp':
            currencyToken = '£'
            break;
        case 'usd':
            currencyToken = '$'
            break;
        case 'eur':
            currencyToken = '€'
            break;
        default:
            currencyToken = '£'
    }
    if (res.length === 1 || res[1].length < 3) {
        // Set the number to two decimal places
        price = price.toFixed(2);
        // return price
    }
    return `${currencyToken}${price}`
}