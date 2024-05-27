// scripts.js

document.addEventListener('DOMContentLoaded', function() {
    const productGallery = document.querySelector('.product-gallery');

    // Example product data
    const products = [
        { name: 'T-shirt en pagne', image: 'images/tshirt.jpeg', price: '25€' },
        { name: 'Coque de téléphone', image: 'images/phone-case.jpeg', price: '15€' },
        { name: 'Sandales en pagne', image: 'images/sandals.jpeg', price: '30€' },
        { name: 'Sac en pagne', image: 'images/bag.jpg', price: '40€' },
        // Add more products as needed
    ];

    // Function to display products
    function displayProducts() {
        products.forEach(product => {
            const productCard = document.createElement('div');
            productCard.classList.add('product-card');

            productCard.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>${product.price}</p>
                <a href="#" class="favorite-icon"><i class="fas fa-heart"></i></a>
            `;

            productGallery.appendChild(productCard);
        });
    }

    displayProducts();
});
