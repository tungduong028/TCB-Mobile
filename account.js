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
        alert("Đăng ký thành công !")
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

const onloadShowMenuLogin = () => {
    if (getCurrentAccount().username != undefined) {
        const loginCart = document.querySelector('.login-cart')
        loginCart.innerHTML = `
		<a href="#"><i class="fa-solid fa-user"></i>Tài Khoản</a>
		<ul class="usermenu">
			<li><a href="#">Thông Tin Tài Khoản</a></li>
			<li><a id ="logout" href="#" onclick="logoutAccount()">Đăng Xuất</a></li>
		</ul>
		<a href="/cart.html" ><i class="fa-solid fa-cart-shopping"></i> Giỏ hàng</a>
		`
    }
}

const focusLogin = () => {
    if (getCurrentAccount().username) {
        return
    }
    alert("Chức năng này cần đăng nhập !")
    window.location.href = "TrangChu.html"
}

export {
    getAccountList,
    getCurrentAccount,
    getAccountByUsername,
    login,
    register,
    formRegister,
    formLogin,
    logoutAccount,
    onloadShowMenuLogin,
    focusLogin
}