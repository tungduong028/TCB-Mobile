
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

function setSignup(e) {
  event.preventDefault();
  var username = document.getElementById("username").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var password = document.getElementById("password").value;
  console.log(password);
  var confirmpass = document.getElementById("confirmpass").value;
  if (username === "" || email === "" || phone === "" || password === "" || confirmpass === "") {
    alert("Vui lòng điền đầy đủ các phần còn trống")
  }
  else if (password != confirmpass) {
    alert("Mật Khẩu không khớp!")
  }
  else {
    var user = {
      "username": username,
      "email": email,
      "phone": phone,
      "password": password,
    }
    localStorage.setItem(username, JSON.stringify(user));
    alert("đăng ký thành công");
  }
}

function login(e) {
  event.preventDefault();
  var username = document.getElementById("usernamelogin").value;
  var password = document.getElementById("passwordlogin").value;
  var user = localStorage.getItem(username);
  var data = JSON.parse(user);
  if (password === "" && username === "") {
    alert("Vui Lòng Nhập Tên Đăng Nhập và Mật Khẩu")
  }
  else if (user == null) {
    alert("Tài khoản không tồn tại!")
  }
  else {
    if (username != "" && password === "") {
      alert("Vui Lòng Nhập Mật Khẩu")
    }
    else if (password != "" && username === "") {
      alert("Vui Lòng Nhập Tên Đăng Nhập")
    }
    else if (username === data.username && password != data.password) {
      alert("Sai Mật Khẩu")
    }
    else if (username === "admin" && password === "admin"){
      alert("Đăng Nhập Thành Công")
      window.location.href = "Admin.html"
    }
    else {
      alert("Đăng Nhập Thành Công")
      window.location.href = "Todo.html"
    }
  }
}
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