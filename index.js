

async function loadForm(page) {
    const response = await fetch(page);
    const html = await response.text();
    document.getElementById("context").innerHTML = html;

}