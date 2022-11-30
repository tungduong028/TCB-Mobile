import { formRegister, formLogin, logoutAccount, onloadShowMenuLogin } from '../account.js'
import { getProducts } from '../data/products.js'
let { products } = getProducts()

products = products.filter (product => product.category)

window.formRegister = formRegister
window.formLogin = formLogin
window.logoutAccount = logoutAccount

window.onload = onloadShowMenuLogin


function toggleActive(element) {
	element.classList.toggle('active')
}
const loginButton = document.querySelector("#login-button")
const loginLayout = document.querySelector("#wrapper > div.login-layout")
const loginClose = document.querySelector('#close-login-layout')
loginButton.addEventListener('click', () => {
	toggleActive(loginLayout)
})
loginClose.addEventListener('click', () => {
	toggleActive(loginLayout)
})

const signup = document.querySelector("#sign-up")
const signupLayout = document.querySelector("#wrapper > div.sign-up-layout")
const signupClose = document.querySelector('#close-signup-layout')
const comebackLogin = document.querySelector('#comeback-login')

signup.addEventListener('click', () => {
	toggleActive(signupLayout)
	toggleActive(loginLayout)
})
signupClose.addEventListener('click', () => {
	toggleActive(signupLayout)
})
comebackLogin.addEventListener('click', () => {
	toggleActive(signupLayout)
	toggleActive(loginLayout)
})

const signupButton = document.querySelector("#signup-button")
signupButton.addEventListener('click', () => {
	toggleActive(signupLayout)
})

//tìm kiếm sản phẩm
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
    document.getElementById('searchProduct').innerHTML = html;
}
var input = document.getElementById("search");
function myFunction() {
    renderProduct();
	var filter, ul, li, a, i;
	filter = input.value.toUpperCase();
	ul = document.getElementById("searchProduct");
	li = ul.getElementsByTagName("li");
	if (!filter) {
	  ul.style.display = "none";
	}else{
	  for (i = 0; i < li.length; i++) {
		  a = li[i].getElementsByTagName("a")[0];
		  if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
			  ul.style.display = "block";
			  li[i].style.display = "";
		  } else {
			  li[i].style.display = "none";
		  }
	  }
	}
}
input.addEventListener("keyup", myFunction);
//---------------------------------------------
let perPage = 8;
let currentPage = 1;
let start = 0;
let end = perPage;
const totalPages = 2;
const btnNext = document.querySelector('.btn-next');
const btnPrev = document.querySelector('.btn-prev');

function getCurrentPage(currentPage) {
	start = (currentPage - 1) * perPage;
	end = currentPage * perPage;
}

//Slide-gioithieu
var kichthuoc = document.getElementsByClassName("slide")[0].clientWidth;
var chuyenslide = document.getElementsByClassName("change-slide")[0];
var slid = document.getElementsByClassName("sli").length;
var max = slid * kichthuoc - kichthuoc;
var chuyen = 0;
function next() {
	if (chuyen < max) chuyen += kichthuoc;
	else chuyen = 0;
	chuyenslide.style.marginLeft = '-' + chuyen + 'px';
}
function prev() {
	if (chuyen == 0) chuyen = max;
	else chuyen -= kichthuoc;
	chuyenslide.style.marginLeft = '-' + chuyen + 'px';
}
setInterval(next, 4000);