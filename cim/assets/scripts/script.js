window.onload = function () {
    const allPrices = document.querySelectorAll(".service__price-total");

    allPrices.forEach((priceBlock) => {
        const price = priceBlock.children[0].textContent;
        priceBlock.children[0].innerText = parseInt(price).toLocaleString('ru-RU')
    })
}