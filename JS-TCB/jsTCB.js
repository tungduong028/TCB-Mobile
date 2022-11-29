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

// lấy toàn bộ danh sách account
const getAccountList = () => {
	let accountList = []
	if (localStorage.getItem('AccountList') == null) {
		localStorage.setItem('AccountList', JSON.stringify(accountList))
	}
	accountList = JSON.parse(localStorage.getItem('AccountList'))
	return accountList
}

const getCurrentAccount = () => {
	let currentAccount = {}
	// check key currentAccount có tồn tại trong localStorage không
	if (localStorage.getItem('currentAccount') == null) {
		// tạo trường cho currentAccount
		localStorage.setItem('currentAccount', JSON.stringify(currentAccount))
	}
	currentAccount = JSON.parse(localStorage.getItem('currentAccount'))
	return currentAccount
}
const getAccountByUsername = (username) => {
	let accountList = getAccountList()
	return accountList.filter(value => value.username == username)[0]
}
const login = (username, password) => {
	let accountList = getAccountList()
	let currentAccount = accountList.find(value => value.username == username && value.password == password)
	if (currentAccount == undefined) {
		return false
	}
	localStorage.setItem('currentAccount', JSON.stringify(currentAccount))
	return true
}

const register = (account) => {
	if (account == undefined) return false
	let accountList = getAccountList()
	if (getAccountByUsername(account.username)) {
		return false
	}
	accountList.push(account)
	localStorage.setItem('AccountList', JSON.stringify(accountList))
	return true
}
// công khai hàm cho web sử dụng
const formRegister = (e) => {
	event.preventDefault()
	let username = document.getElementById("username").value;
	let email = document.getElementById("email").value;
	let phone = document.getElementById("phone").value;
	let password = document.getElementById("password").value;
	var confirmPass = document.getElementById("confirmpass").value;
	if (password != confirmPass) {
		alert("Mật khẩu xác nhận không khớp !")
		return false
	}
	const account = {
		"username": username,
		"email": email,
		"phone": phone,
		"password": password
	}
	if (register(account)) {
		alert("Thành công đăng ký !")
	} else {
		alert("Đăng ký thất bại!")
	}
}
const formLogin = () => {
	event.preventDefault()
	const username = document.querySelector('#usernamelogin').value
	const password = document.querySelector('#passwordlogin').value
	console.log(username, password)
	if (login(username, password)) {
		alert("Đăng nhập thành công!")
		window.location.href = "TrangChu.html"
	} else {
		alert("Đăng nhập thất bại !")
	}
}

const logoutAccount = () => {
	localStorage.setItem('currentAccount', JSON.stringify({}))
	alert("Đã đăng xuất !")
	window.location.href = "TrangChu.html"
}

window.formRegister = formRegister
window.formLogin = formLogin
window.logoutAccount = logoutAccount

window.onload = () => {
	if (getCurrentAccount().username != undefined) {
		const loginCart = document.querySelector('.login-cart')
		loginCart.innerHTML = `
		<a href="#"><i class="fa-solid fa-user"></i>Tài Khoản</a>
		<ul class="usermenu">
			<li><a href="#">Thông Tin Tài Khoản</a></li>
			<li><a id ="logout" href="#" onclick="logoutAccount()">Đăng Xuất</a></li>
		</ul>
		<a href="#" ><i class="fa-solid fa-cart-shopping"></i> Giỏ hàng</a>
		`
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