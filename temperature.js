async function convertTemperature(amount,convertFrom,convertTo) {
    const convertToCelsius = {
        "Celsius": (amount)=>amount,
        "Fahrenheit": (amount)=>(amount - 32) * 5/9,
        "Kelvin": (amount)=>amount - 273.15

    }
    const convertFromCelsius = {
        "Celsius": (amount)=>amount,
        "Fahrenheit": (amount)=>amount * 9/5 +32,
        "Kelvin": (amount)=>amount +273.15,
    }
    amount = Number(amount)
    const celsius = convertToCelsius[convertFrom](amount)
    const result = convertFromCelsius[convertTo](celsius)

    await showResult(
        convertFrom,
        convertTo,
        amount,
        result
    )

}