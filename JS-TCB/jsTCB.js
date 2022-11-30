import { formRegister, formLogin, logoutAccount, onloadShowMenuLogin } from '../account.js'

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


// function searchSanPham() {
//     let valueSearchInput = document.getElementById('search').value
//     let Search = product.filter((item, index) => {
//         return item.title.toUpperCase().includes(valueSearchInput.toUpperCase())
//     })
//     if(valueSearchInput !== ''){
//         renderProduct02(Search)
//     }
//     else{
//         renderProduct02(none)
//     }
// }
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