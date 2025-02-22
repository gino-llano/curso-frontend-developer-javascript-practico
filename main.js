const menuEmail = document.querySelector('.navbar-email');
const menuHamIcon = document.querySelector('nav > .menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const productDetailContainer = document.querySelector('#productDetail');
const productDetailCloseIcon = document.querySelector('.product-detail-close');
const cardsContainer = document.querySelector('.cards-container');
const darkenBackground = document.querySelector('.darken');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside)

function toggledarkenBackground(element)
{
    if (element.classList.contains('inactive'))
        darkenBackground.classList.add('inactive');
    else
        darkenBackground.classList.remove('inactive');
}

function toggleDesktopMenu()
{
    desktopMenu.classList.toggle('inactive');
    shoppingCartContainer.classList.add('inactive');
    productDetailContainer.classList.add('inactive');
    toggledarkenBackground(desktopMenu);
}
function toggleMobileMenu()
{
    mobileMenu.classList.toggle('inactive');
    shoppingCartContainer.classList.add('inactive');
    productDetailContainer.classList.add('inactive');
    toggledarkenBackground(mobileMenu);
}
function toggleCarritoAside()
{
    shoppingCartContainer.classList.toggle('inactive');
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive');
    productDetailContainer.classList.add('inactive');
    toggledarkenBackground(shoppingCartContainer);
}
function openProductDetailAside()
{
    productDetailContainer.classList.remove('inactive');
    shoppingCartContainer.classList.add('inactive');
    desktopMenu.classList.add('inactive');
    darkenBackground.classList.remove('inactive');
}
function closeProductDetailAside()
{
    productDetailContainer.classList.add('inactive');
    darkenBackground.classList.add('inactive');
}

const productList = [];
for (let i=0; i<10; i++)
    productList.push({
        name: 'Bike',
        price: 120,
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    });

//     <div class="product-card">
//     <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
//     <div class="product-info">
//       <div>
//         <p>$120,00</p>
//         <p>Bike</p>
//       </div>
//       <figure>
//         <img src="./icons/bt_add_to_cart.svg" alt="">
//       </figure>
//     </div>
//   </div>


function renderProducts(arr)
{
    // Con Element.append() podemos agregar varios nodos y texto mientras que con Element.appendChild() solo podemos agregar un nodo.
    for (product of arr)
    {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', openProductDetailAside);

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');

        const productInfoDiv = document.createElement('div');
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;
        productInfoDiv.append(productPrice, productName);

        const productInfoFigure = document.createElement('figure');
        const productInfoFigureImg = document.createElement('img');
        productInfoFigureImg.setAttribute('src', './icons/bt_add_to_cart.svg');
        productInfoFigure.appendChild(productInfoFigureImg);

        productInfo.append(productInfoDiv, productInfoFigure);
        productCard.append(productImg, productInfo);
        cardsContainer.appendChild(productCard);
    }
}

renderProducts(productList);
