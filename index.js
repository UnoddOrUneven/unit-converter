

async function loadForm(page) {
    const response = await fetch(page);
    const html = await response.text();
    document.getElementById("context").innerHTML = html;

}

async function showResult(convertFrom,convertTo,amount,result) {
    await loadForm("results.html");
    let resultView = document.getElementById("result")
    if (!Number.isInteger(amount)) {
        amount = 0
    }
    resultView.textContent = `${amount} ${convertFrom} = ${result} ${convertTo}`;
}

