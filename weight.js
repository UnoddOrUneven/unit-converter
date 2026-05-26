async function convertWeight(amount,convertFrom,convertTo) {
    const milligramConvert = {
        "Milligram": 1,
        "Gram": 1000,
        "Kilogram": 10 ** 6,
        "Ounce": 28349.5,
        "Pound": 453592.37
    }

    const weightInMilligram = amount * milligramConvert[convertFrom];


    let result = weightInMilligram / milligramConvert[convertTo]

    showResult(convertFrom,convertTo,amount,result);
}