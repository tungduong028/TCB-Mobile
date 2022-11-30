
import { getProducts } from '../data/products.js    '

let { products } = getProducts()

products = products.filter (product => product.category == 'laptop')

function renderProduct() {
    let html = '';
    const content = products.map((item, index) => {
        // if (index >= start && index < end) {
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
        // }
    })
    document.getElementById('products02').innerHTML = html;
}
renderProduct();

// function changePage02() {
//     const currentPages = document.querySelectorAll('.number-page li');
//     for (let i = 0; i < currentPages.length; i++) {
//         currentPages[i].addEventListener('click', () => {
//             let value = i + 1;
//             currentPage = value;
//             getCurrentPage(currentPage);
//             renderProduct02();
//         })
//     }
// }
// changePage02();

// btnNext.addEventListener('click', () => {
//     currentPage++;
//     if (currentPage > totalPages) {
//         currentPage = totalPages;
//     }
//     getCurrentPage(currentPage);
//     renderProduct02();
// })
// btnPrev.addEventListener('click', () => {
//     currentPage--;
//     if (currentPage <= 1) {
//         currentPage = 1;
//     }
//     getCurrentPage(currentPage);
//     renderProduct02();
// })