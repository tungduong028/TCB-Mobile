// import { getProducts } from '../data/products.js    '

// let { products } = getProducts()

window.onload = renderProduct()

function addNew() {
        let id = document.getElementById("id").value
        let image = document.getElementById("image").value
        let title = document.getElementById("title").value
        let p = document.getElementById("p").value
        let description = document.getElementById("description").value
        let paragraph = document.getElementById("paragraph").value
        let category = document.getElementById("category").value
        let subcategory = document.getElementById("subcategory").value
        let subprice = document.getElementById("subprice").value
        products.push({
            id: id,
            image: image,
            title: title,
            p: p,
            description: description,
            paragraph: paragraph,
            category: category,
            subcategory: subcategory,
            subprice: subprice
        })
        localStorage.setItem("list-products", JSON.stringify(products))
        products = localStorage.getItem("list-products") ? JSON.parse(localStorage.getItem("list-products")) : []
        renderProduct();
    
}

function renderProduct() {
    products = localStorage.getItem("list-products") ? JSON.parse(localStorage.getItem("list-products")) : []
    let html = ''
    products.map((value, index) => {
        html += `<tr class="table_row">
            <td>${value.id}</td>
            <td>${value.image}</td>
            <td>${value.title}</td>
            <td>${value.p}</td>
            <td>${value.description}</td>
            <td>${value.paragraph}</td>
            <td>${value.category}</td>
            <td>${value.subcategory}</td>
            <td>${value.subprice}</td>
            <td><button class="btn btn-warning" id="btnEdit" onclick="editProducts(${index})">Edit</button></td>
            <td><button class="btn btn-danger">Delete</button></td>
        </tr>`
    })
    document.getElementById('result').innerHTML = html;
}
function editProducts(index){
    console.log(index)
}
const btnadd = document.getElementById("btnadd")
btnadd.addEventListener('click',() =>{
    addNew();
})




