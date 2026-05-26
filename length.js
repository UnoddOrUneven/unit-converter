async function convertLength(amount,convertFrom,convertTo) {
    const metersConvert = {
        "Meters": 1,
        "Kilometers": 1000,
        "Miles": 1609.34,
        "Feet": 0.3048
    }
    amount = Number(amount)
    const lengthInMeters = amount * metersConvert[convertFrom];
    console.log(` ${amount} ${convertFrom}   = ${lengthInMeters / metersConvert[convertTo]} ${convertTo}`);

    let result = lengthInMeters / metersConvert[convertTo]

    showResult(convertFrom,convertTo,amount,result);
}

