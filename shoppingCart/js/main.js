document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('product-form');
    form.addEventListener('submit', handleFormSubmit);
    function handleFormSubmit(event) {
        event.preventDefault();
        /* declaracion de variables */
        const productName = document.getElementById('productName').value;
        const productDescription = document.getElementById('productDescription').value;
        const productPrice = parseFloat(document.getElementById('productPrice').value);
        const productImage = document.getElementById('productImage').value;

        /* parametro de formulario */
        addProductToDOM(productName, productDescription, productPrice, productImage);
        form.reset();
    }
    function addProductToDOM(name, description, price, imageUrl) {
        const productList = document.getElementById('product-list');
        const card = document.createElement('div');
        card.className = 'card mb-3';
        card.innerHTML = `
            <img src="${imageUrl}" class="card-img-top" alt="${name}">
            <div class="card-body">
                <h5 class="card-title">${name}</h5>
                <p class="card-text">${description}</p>
                <p class="card-text">Precio: ${price} MXN</p>
                <button class="btn btn-primary add-to-cart">Agregar al Carrito</button>
            </div>
        `;
        productList.appendChild(card);
        card.querySelector('.add-to-cart').addEventListener('click', () => {
            addToCart(price);
        });
    }
    let cartQuantity = 0;
    let cartTotalPrice = 0;
    function addToCart(price) {
        cartQuantity++;
        cartTotalPrice += price;
        updateCartInfo();
    }
    function updateCartInfo() {
        const cartInfo = document.getElementById('cart-info');
        cartInfo.textContent = `Tu carrito tiene ${cartQuantity} productos, y el precio total es de ${cartTotalPrice.toFixed(2)} MXN`;
    }
});