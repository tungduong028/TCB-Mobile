const getCart = () => {
    // Khởi tại giá trị rỗng cho mảng cart
    let cart = []
    // kiểm tra xem localStorage đã khởi tạo cart hay chưa
    if (localStorage.getItem('cart') == null) {
        // nếu chưa có thì tạo mảng giá trj rỗng cho cart
        localStorage.setItem('cart', JSON.stringify(cart))
    }
    // lấy cart từ localStorage vào mảng
    cart = JSON.parse(localStorage.getItem('cart'))
    return cart
}

const addProductToCart = (product) => {
    let cart = getCart()
    cart = cart.filter(value => value.id != product.id)
    let alreadyProduct = getCart().find(value => value.id == product.id)
    console.log(alreadyProduct)
    if (alreadyProduct) {
        product.quantity = parseInt(alreadyProduct.quantity) + 1
    } else {
        product.quantity = 1
    }
    cart.push(product)
    localStorage.setItem('cart', JSON.stringify(cart))
}

const removeProductFromCart = (productId) => {
    let cart = getCart()
    cart = cart.filter(value => value.id != product.id)
    localStorage.setItem('cart', JSON.stringify(cart))
}

const updateProductQuantityInCart = (productId, quantity) => {
    let cart = getCart()
    let alreadyProduct = cart.find(value => value.id == productId)
    cart = cart.filter(value => value.id != productId)
    console.log(cart)
    if (!alreadyProduct) {
        return false
    }
    alreadyProduct.quantity = quantity
    cart.push(alreadyProduct)
    localStorage.setItem('cart', JSON.stringify(cart))
    return true
}


import { formRegister, formLogin, logoutAccount, onloadShowMenuLogin, focusLogin } from './account.js'

window.formRegister = formRegister
window.formLogin = formLogin
window.logoutAccount = logoutAccount

window.onload = () => {
    focusLogin()
    onloadShowMenuLogin()
    console.log(getCart())
    render()
}

const productTemplate = (product) => {
    return `
        <tr>
            <td>${product.id}</td>
            <td> <img src="${product.image}" style="max-height:50px;" ></td>
            <td>${product.title}</td>
            <!-- <td>${product.quantity}</td> -->
            <td>
                <input
                type="number"
                value="${product.quantity}"
                min = 1
                max = 100000
                onchange = "changeQuantityProduct(${product.id},this.value)"
                >
            </td>
            <td>${product.p + ' VND'}</td>
            <td>${(parseInt(product.p.replace(/[^0-9]/g, '')) * product.quantity).toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</td>
            <td><i id = "trash" class="fa-solid fa-trash"></i></td>
        </tr>
    `
}

const changeQuantityProduct = (productId, quantity) => {
    updateProductQuantityInCart(productId, quantity)
    render()
}
window.changeQuantityProduct = changeQuantityProduct
const render = () => {
    const productCart = document.querySelector('.cart tbody')
    productCart.innerHTML = getCart().reduce((previousValue, currentValue) => { return previousValue + productTemplate(currentValue) }, "")
}
export {
    getCart,
    removeProductFromCart,
    updateProductQuantityInCart,
    addProductToCart
}