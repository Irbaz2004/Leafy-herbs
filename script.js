

// 1. PAGE LOAD HANDLING
window.onload = () => {
    setTimeout(() => {
        document.getElementById('loading-page').style.display = 'none';
        window.location.href = 'index1.html';
    }, 3000);
};

// 2. PRODUCT DATA
const products = [
    { id: 1, name: "Aloevera Gel 50 gm", category: "gels_and_creams", price: 40, offerprice: 60, image: "./assets/aloe-vera.avif" },
    { id: 2, name: "Aloevera Gel 100 gm", category: "gels_and_creams", price: 75, offerprice: 110, image: "./assets/aloe-vera.avif" },
    { id: 3, name: "Blueberry Gel 100 gm", category: "gels_and_creams", price: 100, offerprice: 150, image: "./assets/blueberry-gel.avif" },
    { id: 4, name: "Saffron Glow Gel", category: "gels_and_creams", price: 150, offerprice: 200, image: "./assets/saffron-gel.avif" },
    { id: 5, name: "Saffron Anti Acne Gel", category: "gels_and_creams", price: 150, offerprice: 210, image: "./assets/saffron-anit-acne-gel.png" },
    { id: 6, name: "24K Glow Saffron Gel", category: "gels_and_creams", price: 150, offerprice: 225, image: "./assets/Glow Saffron Gel.jpg" },
    { id: 7, name: "Brightening Cream 50 gm", category: "gels_and_creams", price: 150, offerprice: 220, image: "./assets/brightening-cream.png" },
    { id: 8, name: "Brightening Cream 25 gm", category: "gels_and_creams", price: 80, offerprice: 120, image: "./assets/brightening-cream.png" },
    { id: 9, name: "Anti Acne Face Wash", category: "face_wash", price: 150, offerprice: 200, image: "./assets/Anti Acne Face Wash.jpg" },
    { id: 10, name: "Manjistha Face Wash", category: "face_wash", price: 150, offerprice: 210, image: "./assets/sandal-wood-facewash.avif" },
    { id: 11, name: "Goat Milk Manjistha Soap", category: "soaps", price: 70, offerprice: 100, image: "./assets/goat-milk-soap.png" },
    { id: 12, name: "Goat Milk Papaya Soap", category: "soaps", price: 70, offerprice: 110, image: "./assets/Goat Milk Papaya Soap.jpg" },
    { id: 13, name: "Charcoal Soap", category: "soaps", price: 60, offerprice: 90, image: "./assets/charcoal.avif" },
    { id: 14, name: "Saffron Chandan Soap", category: "soaps", price: 90, offerprice: 130, image: "./assets/Saffron Chandan Soap.avif" },
    { id: 15, name: "Shea Snuggle Soap", category: "soaps", price: 70, offerprice: 100, image: "./assets/Shea Snuggle Soap.jpg" },
    { id: 16, name: "Neem Kuppaimeni Soap", category: "soaps", price: 60, offerprice: 85, image: "./assets/neem-soap.jpg" },
    { id: 17, name: "Ultra Skin Whitening Soap", category: "soaps", price: 70, offerprice: 105, image: "./assets/Ultra Skin Whitening Soap.jpg" },
    { id: 18, name: "Honey Soap", category: "soaps", price: 60, offerprice: 90, image: "./assets/Honey Soap.jpg" },
    { id: 19, name: "Detan Rice Soap", category: "soaps", price: 60, offerprice: 95, image: "./assets/Detan Rice Soap.jpg" },
    { id: 20, name: "Ubtan Soap", category: "soaps", price: 60, offerprice: 100, image: "./assets/ubtan-soap.jpg" },
];

// 3. PRODUCT DISPLAY FUNCTION
function displayProducts(products) {
    const productList = document.getElementById('productList');
    productList.innerHTML = '';
    products.forEach(product => {
        const card = `
            <div class="col-md-4">
                <div class="card product-card">
                    <span class="sale-badge">SALE!</span>
                    <img src="${product.image}" class="card-img-top" alt="${product.name}">
                    <div class="card-body">
                        <h5 class="card-title">${product.name}</h5>
                        <p class="price fw-bold">₹${product.price} 
                            <span class="text-muted text-decoration-line-through">₹${product.offerprice}</span>
                        </p>
                        <button class="btn btn-dark">
                            <a href='Product.html?id=${product.id}' class="text-white text-decoration-none">View Details</a>
                        </button>
                    </div>
                </div>
            </div>
        `;
        productList.innerHTML += card;
    });
}

// 4. QUERY PARAMETER HANDLING
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// 5. PRODUCT DETAILS PAGE HANDLING
const productId = getQueryParam('id');
const product = products.find(p => p.id == productId);

if (product) {
    document.getElementById('productTitle').innerText = product.name;
    document.getElementById('productCategory').innerText = `Category: ${product.category}`;
    document.getElementById('productPrice').innerText = `₹${product.price}`;
    document.getElementById('productOfferPrice').innerText = `₹${product.offerprice}`;
    document.getElementById('productImage').src = product.image;
}

// 6. FILTERING AND SORTING
function filterProducts() {
    const category = document.getElementById('categoryFilter').value;
    const sort = document.getElementById('sortFilter').value;
    let filteredProducts = products;

    if (category !== 'all') {
        filteredProducts = filteredProducts.filter(product => product.category === category);
    }

    if (sort === 'priceAsc') {
        filteredProducts.sort((a, b) => a.price - b.price);
    } else if (sort === 'priceDesc') {
        filteredProducts.sort((a, b) => b.price - a.price);
    }

    displayProducts(filteredProducts);
}

document.getElementById('categoryFilter').addEventListener('change', filterProducts);
document.getElementById('sortFilter').addEventListener('change', filterProducts);

// Initial display
displayProducts(products);




