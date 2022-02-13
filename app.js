function updateProductQuantityAndPrice(product, price, isIncreasing) {
    const productQuantityElement = document.getElementById(product + '-quantity');
    let productQuantity = productQuantityElement.value;
    if (isIncreasing) {
        ++productQuantity;
    }
    else {
        if (productQuantity > 0) {
            --productQuantity;
        }
    }
    productQuantityElement.value = productQuantity;
    document.getElementById(product + '-price').innerText = productQuantity * price;
    getTotalPrice();
}


document.getElementById('phone-btn-plus').addEventListener('click', function () {
    updateProductQuantityAndPrice('phone', 1219, true);
})
document.getElementById('phone-btn-minus').addEventListener('click', function () {
    updateProductQuantityAndPrice('phone', 1219, false);
})
document.getElementById('case-btn-plus').addEventListener('click', function () {
    updateProductQuantityAndPrice('case', 59, true);
})
document.getElementById('case-btn-minus').addEventListener('click', function () {
    updateProductQuantityAndPrice('case', 59, false);
})

function getProductPrice(product) {
    const productPriceText = document.getElementById(product + '-price').innerText;
    const productPrice = parseInt(productPriceText);
    return productPrice;
}

function getTotalPrice() {
    const phoneTotalPrice = getProductPrice('phone');
    const caseTotalPrice = getProductPrice('case');
    const subtotalPrice = parseInt(phoneTotalPrice) + parseInt(caseTotalPrice);
    let tax = subtotalPrice * .1;
    tax = parseFloat(tax.toPrecision(6));
    const totalPrice = subtotalPrice + tax;
    document.getElementById('subtotal-price').innerText = subtotalPrice;
    document.getElementById('tax').innerText = tax;
    document.getElementById('total-price').innerText = totalPrice;
}
