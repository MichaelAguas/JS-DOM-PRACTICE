const navEmail = document.querySelector(".navbar-email")
const deskMenu = document.querySelector(".desktop-menu")
const mobMenu = document.querySelector(".mobile-menu")
const hamIcoMenu = document.querySelector(".menu")
const detailShopping = document.querySelector("#detailShoppingCar")
const iconShopCar = document.querySelector(".shop-car")
const orderItemContent = document.querySelector(".shopping-cart")
const cardsContainer = document.querySelector(".cards-container")

let optionItem
let items = []
let productList = []


function item(image, nameItem, costItem, iconClose) { 
    this.image = image 
    this.nameItem = nameItem
    this.costItem = costItem 
    this.iconClose = iconClose
}

for (let index = 0; index < 3; index++) {
    let image = "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    let nameItem = "Bike"
    let costItem = "$30,00"
    let iconItem = "./icons/icon_close.png"
    items.push(new item (image, nameItem, costItem, iconItem))
}

navEmail.addEventListener("click", toggleDesktopMenu) 
hamIcoMenu.addEventListener("click", toggleMobileMenu)
iconShopCar.addEventListener("click", shoppingCart)

function toggleDesktopMenu() { 
    deskMenu.classList.toggle("inactive")
}

function toggleMobileMenu() { 
    mobMenu.classList.toggle("inactive")
    detailShopping.classList.add("inactive")
}

function shoppingCart() { 
    detailShopping.classList.toggle("inactive")
    mobMenu.classList.add("inactive")

    items.forEach((item) => {
        optionItem = `
        <figure>
          <img src="${item.image}" alt="${item.nameItem}">
        </figure>
        <p>${item.nameItem}</p>
        <p>${item.costItem}</p>
        <img src="${item.iconClose}" alt="close">
    `
    orderItemContent.innerHTML = optionItem
    })
}

productList.push({
    name: "Bike",
    cost: 120, 
    img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})
productList.push({
    name: "Cocodrile",
    cost: 450, 
    img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})
productList.push({
    name: "Light",
    cost: 80, 
    img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})

function renderProducts(arr) { 
     /* <div class="product-card">
        <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
        <div class="product-info">
          <div>
            <p>$120,00</p>
            <p>Bike</p>
          </div>
          <figure>
            <img src="" alt="">
          </figure>
        </div>
      </div>
    */

    for (product of arr) {
        const divClass = document.createElement("div")
        divClass.classList.add("product-card")

        const productImg = document.createElement("img")
        productImg.setAttribute("src", product.img) 

        const productInfo = document.createElement("div")
        productInfo.classList.add("product-info") 

        const infoDiv = document.createElement("div")
        const priceInfo = document.createElement("p")
        priceInfo.innerText = product.cost
        const nameInfo = document.createElement("p")
        nameInfo.innerHTML = product.name

        infoDiv.append(priceInfo, nameInfo)

        const figureImg = document.createElement("figure")
        const imgFigure = document.createElement("img")
        imgFigure.setAttribute("src", "/icons/bt_add_to_cart.svg")
        figureImg.appendChild(imgFigure)

        productInfo.append(infoDiv, figureImg)
        divClass.append(productImg, productInfo)

        cardsContainer.appendChild(divClass)
    }
}

renderProducts(productList)