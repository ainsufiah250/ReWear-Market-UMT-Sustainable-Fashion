// Add your own clothes here! Replace with real details and image files.
const defaultItems = [
    { id: 1, name: "Woman's Clothes: Floral Blouse", price: 3, status: "available", image: "blouse.jpg" },
    { id: 2, name: "Woman's Clothes: Floral Blouse", price: 3, status: "available", image: "blouse2.jpg" },
    { id: 3, name: "Woman's Clothes: Baju Kurung", price: 4, status: "available", image: "baju-kurung-merah.jpg" },
    { id: 4, name: "Woman's Clothes: Baju Kurung", price: 4, status: "available", image: "baju-kurung-kuning.jpg" },
    { id: 5, name: "Woman's Clothes: Blouse", price: 3, status: "available", image: "blouse3.jpg" },
    { id: 6, name: "Woman's Clothes: Blouse", price: 3, status: "available", image: "blouse4.jpg" },
    { id: 7, name: "Woman's Clothes: Blouse", price: 3, status: "available", image: "blouse5.jpg" },
    { id: 8, name: "Woman's Clothes: Blouse", price: 3, status: "available", image: "blouse6.jpg" },
    { id: 9, name: "Woman's Clothes: Blouse", price: 3, status: "available", image: "blouse7.jpg" },
    { id: 10, name: "Woman's Clothes: Blouse", price: 3, status: "available", image: "blouse8.jpg" },
    { id: 11, name: "Woman's Clothes: Kaftan", price: 4, status: "available", image: "kaftan1.jpg" },
    { id: 12, name: "Woman's Clothes: Dress", price: 4, status: "available", image: "dress1.jpg" },
    { id: 13, name: "Woman's Clothes: Jumper Dress", price: 4, status: "available", image: "dress2.jpg" },
    { id: 14, name: "Woman's Clothes: Kaftan", price: 4, status: "available", image: "kaftan2.jpg" },
    { id: 15, name: "Woman's Clothes: Kaftan", price: 4, status: "available", image: "kaftan3.jpg" },
    { id: 16, name: "Woman's Clothes: Kaftan", price: 4, status: "available", image: "kaftan4.jpg" },
    { id: 17, name: "Woman's Clothes: Kaftan", price: 4, status: "available", image: "kaftan5.jpg" },
    { id: 18, name: "Woman's Clothes: Kot", price: 3, status: "available", image: "kot.jpg" },
    { id: 19, name: "Woman's Clothes: Baju Kurung", price: 4, status: "available", image: "baju-kurung1.jpg" },
    { id: 20, name: "Woman's Clothes: Baju Kurung", price: 4, status: "available", image: "baju-kurung2.jpg" },
    { id: 21, name: "Woman's Clothes: Blouse", price: 3, status: "available", image: "blouse9.jpg" },
    { id: 22, name: "Men's Clothes: T-shirt (Saiz: M)", price: 2, status: "available", image: "t-shirt3.jpg" },
    { id: 23, name: "Men's Clothes: T-shirt (Saiz: M)", price: 2, status: "available", image: "t-shirt4.jpg" },
    { id: 24, name: "Men's Clothes: T-shirt (Saiz: M) ", price: 2, status: "available", image: "t-shirt5.jpg" },
    { id: 25, name: "Men's Clothes: T-shirt (Saiz: M) ", price: 2, status: "available", image: "t-shirt6.jpg" },
    { id: 26, name: "Men's Clothes: T-shirt (Saiz: M) ", price: 2, status: "available", image: "t-shirt7.jpg" },
    { id: 27, name: "Men's Clothes: T-shirt (Saiz: M)", price: 2, status: "available", image: "t-shirt8.jpg" },
    { id: 28, name: "Men's Clothes: T-shirt (Saiz: M)", price: 2, status: "available", image: "t-shirt9.jpg" },
    { id: 29, name: "Men's Clothes: T-shirt (Saiz: M)", price: 2, status: "available", image: "t-shirt10.jpg" },
    { id: 30, name: "Men's Clothes: T-shirt (Saiz: M)", price: 2, status: "available", image: "t-shirt11.jpg" },
    { id: 31, name: "Men's Clothes: T-shirt (Saiz: M)", price: 2, status: "available", image: "t-shirt12.jpg" },
    { id: 32, name: "Men's Clothes: T-shirt (Saiz: M)", price: 2, status: "available", image: "t-shirt13.jpg" },
    { id: 33, name: "Men's Clothes: Jersey (Saiz: M)", price: 2, status: "available", image: "jersey1.jpg" },
    { id: 34, name: "Men's Clothes: Jersey (Saiz: M)", price: 2, status: "available", image: "jersey2.jpg" },
    { id: 35, name: "Men's Clothes: Jersey (Saiz: M)", price: 2, status: "available", image: "jersey3.jpg" },
    { id: 36, name: "Men's Clothes: Jersey (Saiz: M)", price: 2, status: "available", image: "jersey4.jpg" },
    { id: 37, name: "Men's Clothes: Kemeja (Saiz: M)", price: 2, status: "available", image: "kemeja10.jpg" },
    { id: 38, name: "Seluar: Jeans (Saiz: 32-34)", price: 3, status: "available", image: "seluar1.jpg" },
    { id: 39, name: "Seluar: Jeans (Saiz: 32-34)", price: 3, status: "available", image: "seluar2.jpg" },
    { id: 40, name: "Seluar: Jeans (Saiz: 32-34)", price: 3, status: "available", image: "seluar3.jpg" },
    { id: 41, name: "Seluar: Jeans (Saiz: 32-34)", price: 3, status: "available", image: "seluar4.jpg" },
    { id: 42, name: "Seluar: Jeans (Saiz: 32-34)", price: 3, status: "available", image: "seluar5.jpg" },
    { id: 43, name: "Seluar: Casual (Free saiz)", price: 2, status: "available", image: "seluar6.jpg" },
     { id: 44, name: "Seluar: Casual (Free saiz)", price: 2, status: "available", image: "seluar7.jpg" },
    { id: 45, name: "Seluar: Casual (Free saiz)", price: 2, status: "available", image: "seluar8.jpg" },
    { id: 46, name: "Seluar: Jeans (Saiz: 32-34)", price: 3, status: "available", image: "seluar9.jpg" },
    { id: 47, name: "Seluar: Jeans (Saiz: 32-34)", price: 3, status: "available", image: "seluar10.jpg" },
    { id: 48, name: "Seluar: Jeans Pendek", price: 2, status: "available", image: "seluar11.jpg" },
    { id: 49, name: "Seluar: Casual (Free saiz)", price: 2, status: "available", image: "seluar12.jpg" },
    { id: 50, name: "Seluar: Casual (Free saiz)", price: 2, status: "available", image: "seluar13.jpg" },
    { id: 51, name: "Seluar: Casual (Free saiz)", price: 2, status: "available", image: "seluar14.jpg" },
    { id: 52, name: "Seluar: Tracksuit (Free Saiz)", price: 2, status: "available", image: "seluar15.jpg" },
    { id: 53, name: "Seluar: Casual (Free saiz)", price: 2, status: "available", image: "seluar16.jpg" },
    { id: 54, name: "Seluar: Tracksuit (Free saiz)", price: 2, status: "available", image: "seluar17.jpg" },
    { id: 55, name: "Tudung: Bawal", price: 1, status: "available", image: "tudung1.jpg" },
    { id: 56, name: "Tudung: Shawl", price: 1, status: "available", image: "tudung2.jpg" },
    { id: 57, name: "Tudung: Bawal", price: 1, status: "available", image: "tudung3.jpg" },
    { id: 58, name: "Tudung: Shawl", price: 1, status: "available", image: "tudung4.jpg" }, 
    { id: 59, name: "Tudung: Bawal", price: 1, status: "available", image: "tudung5.jpg" },
    { id: 60, name: "Tudung: Shawl", price: 1, status: "available", image: "tudung6.jpg" }, 
    { id: 61, name: "Tudung: Shawl", price: 1, status: "available", image: "tudung7.jpg" }, 
    { id: 62, name: "Tudung: Bawal", price: 1, status: "available", image: "tudung8.jpg" },
    { id: 63, name: "Tudung: Bawal", price: 1, status: "available", image: "tudung9.jpg" }, 
    { id: 64, name: "Tudung: Bawal", price: 1, status: "available", image: "tudung10.jpg" },
    { id: 65, name: "Tudung: Bawal", price: 1, status: "available", image: "tudung11.jpg" },
    { id: 67, name: "Tudung: Bawal", price: 1, status: "available", image: "tudung12.jpg" },
    { id: 68, name: "Tudung: Shawl", price: 1, status: "available", image: "tudung13.jpg" },
    { id: 69, name: "Tudung: Bawal", price: 1, status: "available", image: "tudung14.jpg" }, 
    { id: 70, name: "Tudung: Bawal", price: 1, status: "available", image: "tudung15.jpg" },
    { id: 71, name: "Tudung: Shawl", price: 1, status: "available", image: "tudung16.jpg" },
    { id:72, name: "Tudung: Bawal ", price: 1, status: "available", image: "tudung17.jpg" },
    { id: 73, name: "Tudung: Bawal ", price: 1, status: "available", image: "tudung18.jpg" },

    // Add more: { id: 4, name: "Item Name", price: 12, status: "available", image: "image.jpg" }
];

let products = defaultItems;  // No localStorage to avoid glitches
let cart = [];
let user = null;

window.onload = () => { updateUI(); renderProducts(); };

function showSection(id) {
    document.getElementById('home-hero').style.display = id === 'home' ? 'flex' : 'none';
    document.getElementById('shop').style.display = id === 'shop' ? 'block' : 'none';
}

function handleRegister() {
    const name = document.getElementById('regName').value.trim();
    const email = document.getElementById('regEmail').value.trim();
    if (name && email) {
        user = { name, email };
        closeModal('regModal');
        updateUI();
        alert("Welcome, " + name + "!");
    } else {
        alert("Please enter name and email.");
    }
}

function updateUI() {
    document.getElementById('user-status').innerHTML = user ? `<span>Hi, ${user.name}</span>` : '<button class="btn-outline" onclick="openModal(\'regModal\')">Login</button>';
    document.getElementById('cart-count').innerText = cart.length;
}

function renderProducts() {
    const grid = document.getElementById('product-grid');
    grid.innerHTML = products.map(p => `
        <div class="card">
            ${p.status === 'sold' ? '<div class="sold-overlay"><div class="sold-badge">SOLD</div></div>' : ''}
            <img src="${p.image}" alt="${p.name}" onerror="this.src='placeholder.jpg'">
            <div class="card-content">
                <h4>${p.name}</h4>
                <p>RM ${p.price}</p>
                ${p.status !== 'sold' ? `<button class="btn-sell" onclick="addToCart(${p.id})">Add to Cart</button>` : '<small>Sold</small>'}
            </div>
        </div>
    `).join('');
}

function addToCart(id) {
    if (!user) return openModal('regModal');
    const item = products.find(p => p.id === id);
    if (item && !cart.includes(item)) {
        cart.push(item);
        updateCartUI();
        alert("Added!");
    }
}

function updateCartUI() {
    updateUI();
    let total = 0;
    document.getElementById('cart-list').innerHTML = cart.map((item, i) => {
        total += item.price;
        return `<p>${item.name} - RM ${item.price} <button onclick="removeFromCart(${i})">Remove</button></p>`;
    }).join('');
    document.getElementById('cart-total').innerText = total;
}

function removeFromCart(i) {
    cart.splice(i, 1);
    updateCartUI();
}

function openCheckout() {
    if (!cart.length) return alert("Cart is empty!");
    document.getElementById('pay-amount').innerText = cart.reduce((t, i) => t + i.price, 0);
    closeModal('cartModal');
    openModal('checkoutModal');
}

function finishOrder() {
    cart.forEach(item => {
        const p = products.find(p => p.id === item.id);
        if (p) p.status = 'sold';
    });
    cart = [];
    updateCartUI();
    closeModal('checkoutModal');
    renderProducts();
    alert("Payment noted! Show receipt to admin.");
}

function openModal(id) { document.getElementById(id).style.display = 'flex'; }
function closeModal(id) { document.getElementById(id).style.display = 'none'; }