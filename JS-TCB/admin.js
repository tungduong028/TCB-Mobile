import { getProducts } from '../data/products.js    '

let { products } = getProducts()

const btnadd = document.getElementById("btnadd")
function add(){

var id = document.getElementById('id').value
var image = document.getElementById('image').value
var title = document.getElementById('title').value
var p = document.getElementById('p').value
var description = document.getElementById('description').value
var paragraph = document.getElementById('paragraph').value
var category = document.getElementById('category').value
var subcategory = document.getElementById('sub-category').value

var item = {
    id: id,
    image: image,
    title: title,
    p: p,
    description: description,
    paragraph: paragraph,
    category: category,
    subcategory: subcategory
}
products.push(item)

}
renderProduct()
btnadd.addEventListener('click', add)

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
    document.getElementById('addProduct').innerHTML = html;
}
