async function convertLength(amount,convertFrom,convertTo) {
    const metersConvert = {
        "Meters": 1,
        "Kilometers": 1000,
        "Miles": 1609.34,
        "Feet": 0.3048
    }

    const lengthInMeters = amount / metersConvert[convertFrom];

    console.log(lengthInMeters * metersConvert[convertTo]);
    return lengthInMeters * metersConvert[convertTo];
}
