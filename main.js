const menuEmail = document.querySelector('.navbar-email');
const menuBurguer = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const asideShoppingCart = document.querySelector('.product-shopping-cart');
const asideProductDetail = document.querySelector('.product-detail');
const closeProductDetailIcon = document.querySelector('.product-detail-close');
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuBurguer.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
closeProductDetailIcon.addEventListener('click', closeProductDetail);

function toggleDesktopMenu() {
    asideShoppingCart.classList.add('inactive');
    asideProductDetail.classList.add('inactive');
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    asideProductDetail.classList.add('inactive');
    asideShoppingCart.classList.add('inactive');
    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside() {
    mobileMenu.classList.add('inactive');
    asideProductDetail.classList.add('inactive');
    asideShoppingCart.classList.toggle('inactive');
}

function openAsideProductDetail() {
    desktopMenu.classList.add('inactive');
    asideShoppingCart.classList.add('inactive');
    asideProductDetail.classList.remove('inactive');
}

function closeProductDetail() {
    asideProductDetail.classList.add('inactive');
}

const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})
productList.push({
    name: 'Pantalla',
    price: 220,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})
productList.push({
    name: 'Pc',
    price: 520,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})

function renderProducts(arr) {
    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const img = document.createElement('img');
        img.setAttribute('src', product.image);
        img.addEventListener('click', openAsideProductDetail);

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
        
        const productInfoDiv = document.createElement('div');
        
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;
        
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productImgCart);
    
        productInfo.append(productInfoDiv,productInfoFigure);
        
        productInfoDiv.append(productPrice,productName);
    
        productCard.append(img,productInfo);
    
        cardsContainer.appendChild(productCard);
    }
}

renderProducts(productList);