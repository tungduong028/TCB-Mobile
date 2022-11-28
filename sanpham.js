import { getProducts } from './data/products.js'
const productId = new URLSearchParams(window.location.search).get('id')

let { products } = getProducts()

const product = products.filter(product => product.id == productId)[0]

const productImage = document.querySelector("#wrapper > div.main > div > div.product-detail > div.product-image > img")
const productTitle = document.querySelector("#wrapper > div.main > div > div.product-detail > div.product-center > h2")
const productPrice = document.querySelector("#wrapper > div.main > div > div.product-detail > div.product-center > span")
const productDescription = document.querySelector("#wrapper > div.main > div > div.product-description > h2")
const productParagraph = document.querySelector("#wrapper > div.main > div > div.product-description > p")
const buttonBuy = document.querySelector("#wrapper > div.main > div > div.product-detail > div.product-center > div > a.btn-buy")
const buttonAddToCard = document.querySelector("#wrapper > div.main > div > div.product-detail > div.product-center > div > a.btn-add-cart")

productImage.src = product.image
productTitle.innerText = product.title
productPrice.innerText = product.p
productDescription.innerText = product.description
productParagraph.innerText = product.paragraph

buttonAddToCard.addEventListener('click', () => {
    console.log("bought")
    alert("234213")
    // addProductToCart(product)
})