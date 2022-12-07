import { getProducts } from '../data/products.js    '

let { products } = getProducts()
products = localStorage.getItem("list-products") ? JSON.parse(localStorage.getItem("list-product")) : []
window.onload = renderProduct()

//Thêm sản phẩm
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
        products = localStorage.getItem("list-products") ? JSON.parse(localStorage.getItem("list-products")) : []
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
        renderProduct();
}

//Show sản phẩm vào list
function renderProduct() {
    products = localStorage.getItem("list-products") ? JSON.parse(localStorage.getItem("list-products")) : []
    let html = ''
    products.map((value, index) => {
        html += `<tr class="table_row">
            <td>${value.id}</td>
            <td><img src="${value.image}" style="max-height:50px;" ></td>
            <td>${value.title}</td>
            <td>${value.p}</td>
            <td>${value.description}</td>
            <td>${value.paragraph}</td>
            <td>${value.category}</td>
            <td>${value.subcategory}</td>
            <td>${value.subprice}</td>
            <td><button class="btn btn-warning" id="btnEdit" onclick="editProducts(${index})">Edit</button></td>
            <td><button class="btn btn-danger" onclick="deleteProducts(${index})">Delete</button></td>
        </tr>`
    })
    document.getElementById('result').innerHTML = html;
}

//Reset các ô input sau khi xử lí chức năng
function resetInput(){
    document.getElementById("id").value = ""
    document.getElementById("image").value = ""
    document.getElementById("title").value = ""
    document.getElementById("p").value = ""
    document.getElementById("description").value = ""
    document.getElementById("paragraph").value = ""
    document.getElementById("category").value = ""
    document.getElementById("subcategory").value = ""
    document.getElementById("subprice").value = ""
}

//Lấy thông tin sản phẩm cần sửa
function editProducts(index){
    let products = localStorage.getItem("list-products") ? JSON.parse(localStorage.getItem("list-products")) : []
    document.getElementById("id").value = products[index].id
    document.getElementById("image").value = products[index].image
    document.getElementById("title").value = products[index].title
    document.getElementById("p").value = products[index].p
    document.getElementById("description").value = products[index].description
    document.getElementById("paragraph").value = products[index].paragraph
    document.getElementById("category").value = products[index].category
    document.getElementById("subcategory").value = products[index].subcategory
    document.getElementById("subprice").value = products[index].subprice
    document.getElementById("index").value = index
}

//Gán lại thông tin sau khi sửa cho sản phẩm
function changeProduct(){
    let products = localStorage.getItem("list-products") ? JSON.parse(localStorage.getItem("list-products")) : []
    let index = document.getElementById("index").value
    products[index] = {
        id: document.getElementById("id").value,
        image: document.getElementById("image").value,
        title: document.getElementById("title").value,
        p: document.getElementById("p").value,
        description: document.getElementById("description").value,
        paragraph: document.getElementById("paragraph").value,
        category: document.getElementById("category").value,
        subcategory: document.getElementById("subcategory").value,
        subprice: document.getElementById("subprice").value
    }
    localStorage.setItem("list-products", JSON.stringify(products))
    renderProduct()
    resetInput()
}

//Xóa sản phẩm
function deleteProducts(index){
    let products = localStorage.getItem("list-products") ? JSON.parse(localStorage.getItem("list-products")) : []
    if(confirm("bạn có chắc muốn xóa ?")){
        products.splice(index,1)
    }
    localStorage.setItem("list-products", JSON.stringify(products))
    renderProduct()
}
const btnadd = document.getElementById("btnadd")
btnadd.addEventListener('click',() =>{
    addNew();
})

window.editProducts = editProducts
window.changeProduct = changeProduct
window.deleteProducts = deleteProducts
