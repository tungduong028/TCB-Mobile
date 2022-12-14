import { getProducts } from '../data/products.js    '

let { products } = getProducts()

products = localStorage.getItem("list-products") ? JSON.parse(localStorage.getItem("list-products")) : []
products = products.filter(products => products.category == 'dienthoai')

let perPage = 8;
let currentPage = 1;
let start = 0;
let end = perPage;
const totalPages = Math.ceil(products.length / perPage);

const btnNext = document.querySelector('.btn-next');
const btnPrev = document.querySelector('.btn-prev');
const btnAll = document.querySelector('.btnAll');
const btnAll02 = document.querySelector('.btnAll02');
const btnIphone = document.querySelector('.btnIphone');
const btnSamsung = document.querySelector('.btnSamsung');
const btnXiaomi = document.querySelector('.btnXiaomi');
const btn1tr = document.querySelector('.btn1tr');
const btnMid = document.querySelector('.btnMid');
const btn20tr = document.querySelector('.btn20tr');

//Show sản phẩm điện thoại

function renderProduct(products) {
    
    let html = '';
    const content = products.map((item, index) => {
        if (index >= start && index < end) {
            html += `
                <li>
                    <img class="C-Slide" src=${item.image}>
                    <div class="info">
                    <div class="name-info">
                        <a href="/sanpham.html?id=${item.id}"> ${item.title} </a>
                    </div>
                    <div class="cost">${item.p}</div>
                    </div>
                </li>
            `
        }
    })
    document.getElementById('products').innerHTML = html;
}
renderProduct(products);

//---------------------Phân loại sản phẩm-----------------------
//Theo dòng sản phẩm
btnAll.addEventListener('click', () => {
    renderProduct(products);
})
//Phân loại điện thoại Iphone
const iphone = products.filter((item, index) => {
    return item.subcategory == 'iphone'
})
btnIphone.addEventListener('click', () => {
    renderProduct(iphone);
})

//Phân loại điện thoại Samsung
const samsung = products.filter((item, index) => {
    return item.subcategory == 'samsung'
})
btnSamsung.addEventListener('click', () => {
    renderProduct(samsung);
})

//Phân loại điện thoại Xiaomi
const xiaomi = products.filter((item, index) => {
    return item.subcategory == 'xiaomi'
})
btnXiaomi.addEventListener('click', () => {
    renderProduct(xiaomi);
})

//Theo giá sản phẩm
btnAll02.addEventListener('click', () => {
    renderProduct(products);
})
//Phân loại giá dưới 1 triệu
const duoi1tr = products.filter((item, index) => {
    return item.subprice == 'duoi1tr'
})
btn1tr.addEventListener('click', () => {
    renderProduct(duoi1tr);
})

//Phân loại giá 1.000.000 - 20.000.000
const mid = products.filter((item, index) => {
    return item.subprice == 'mid'
})
btnMid.addEventListener('click', () => {
    renderProduct(mid);
})

//Phân loại giá trên 20tr
const tren20tr = products.filter((item, index) => {
    return item.subprice == 'tren20tr'
})
btn20tr.addEventListener('click', () => {
    renderProduct(tren20tr);
})

//---------------------Phân trang sản phẩm-----------------------

function getCurrentPage(currentPage) {
    start = (currentPage - 1) * perPage;
    end = currentPage * perPage;
}

//Nút trang tiếp theo
btnNext.addEventListener('click', () => {
    currentPage++;
    if (currentPage > totalPages) {
        currentPage = totalPages;
    }
    getCurrentPage(currentPage);
    renderProduct(products);
    
})

//Nút trang trước
btnPrev.addEventListener('click', () => {
    currentPage--;
    if (currentPage <= 1) {
        currentPage = 1;
    }
    getCurrentPage(currentPage);
    renderProduct(products);
    
})

//Các nút số trang
//Show các nút số trang
function renderListPage(totalPages) {
    let html = '';
    for (let i = 1; i <= totalPages; i++) {
        html += `<li><a>${i}</a></li>`;
    }
    if (totalPages === 0) {
        html = ''
    }
    document.getElementById('number-page').innerHTML = html;
}
renderListPage(totalPages);
//Js các nút số trang
function changePage() {
    const currentPages = document.querySelectorAll('.number-page li');
    for (let i = 0; i < currentPages.length; i++) {
        currentPages[i].addEventListener('click', () => {
            let value = i + 1;
            currentPage = value;
            getCurrentPage(currentPage);
            renderProduct(products);
        })
    }
}
changePage();

