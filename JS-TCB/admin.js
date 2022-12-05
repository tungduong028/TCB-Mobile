import { getProducts } from '../data/products.js    '

let { products } = getProducts()
let listSanpham = products
function validataInput(){
    let formElement = document.querySelector(".from")
    let inputElement = formElement.querySelectorAll(".form-input")
    for(let i = 0; i < inputElement.length; i++){
        if(inputElement[i].value == ""){
            inputElement[i].parentElement.querySelector(".errorMess").innerText = 'hãy nhập đầy đủ thông tin'
        }else{
            inputElement[i].parentElement.querySelector(".errorMess").innerText = ""
        }
    }
}


function addNew(){
    validataInput()
    let formElement = document.querySelector(".from")
    let errorElement = formElement.querySelectorAll(".errorMess")
    let arrError = []
    for(let i = 0;i < arrError.length; i++){
        arrError.push(arrError[i].innerText)
    }
    let checkError = arrError.every(value => value === "")
    if(checkError){
        let id = document.getElementById("id").value
        let image = document.getElementById("image").value
        let title = document.getElementById("title").value
        let p = document.getElementById("p").value
        let description = document.getElementById("description").value
        let paragraph = document.getElementById("paragraph").value
        let category = document.getElementById("category").value
        let subcategory = document.getElementById("subcategory").value
        let subprice = document.getElementById("subprice").value
        let listSanpham = products
        listSanpham = localStorage.getItem("list-Sanpham") ? JSON.parse(localStorage.getItem("list-Sanpham")) : []
        listSanpham.push({
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
        localStorage.setItem("list-Sanpham", JSON.stringify(listSanpham))
    }
}

const btnadd = document.getElementById("btnadd")
btnadd.addEventListener('click', () => {
    addNew();
})
listSanpham = localStorage.getItem("list-Sanpham") ? JSON.parse(localStorage.getItem("list-Sanpham")) : []
listSanpham = listSanpham.filter(listSanpham => listSanpham.category == 'dienthoai')
function renderProduct(listSanpham) {
    
    let html = '';
    const content = listSanpham.map((item, index) => {
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
    document.getElementById('products').innerHTML = html;
}
renderProduct(listSanpham);