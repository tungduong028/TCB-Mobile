//menu icon-bars
function hamDropdown() {
  document.querySelector(".menu").classList.toggle("hienThi");
}

//cuộn và ẩn header-top
$(document).ready(function(){
  $(window).scroll(function(){
    if($(this).scrollTop()){
      $('.header-top').addClass('none');
    }
    else{
      $('.header-top').removeClass('none');
    }
    
  })
})

  //Slide-gioithieu
  var kichthuoc = document.getElementsByClassName("slide")[0].clientWidth;
  var chuyenslide = document.getElementsByClassName("change-slide")[0];
  var slid = document.getElementsByClassName("sli").length;
  var max = slid*kichthuoc - kichthuoc;
  var chuyen = 0;
  function next(){
    if(chuyen < max) chuyen += kichthuoc;
    else chuyen = 0;
    chuyenslide.style.marginLeft = '-' + chuyen + 'px';
  }
  function prev(){
    if(chuyen == 0) chuyen = max;
    else chuyen -= kichthuoc;
    chuyenslide.style.marginLeft = '-' + chuyen + 'px';
  }
  setInterval(next,3000);


//Slide content
//slide điện thoại
var C_kichthuoc = document.getElementsByClassName("ktcontent")[0].clientWidth;
var chuyencontent = document.getElementsByClassName("change-content")[0];
var C_Max = 6*C_kichthuoc-4*C_kichthuoc;
var chuyenC = 0;
function Cnext(){
  if(chuyenC < C_Max) chuyenC += C_kichthuoc;
  else chuyenC = 0;
  chuyencontent.style.marginLeft = '-' + chuyenC + 'px';
}
function Cprev(){
  if(chuyenC == 0) chuyenC = C_Max;
  else chuyenC -= C_kichthuoc;
  chuyencontent.style.marginLeft = '-' + chuyenC + 'px';
}
//slide laptop
var chuyencontent02 = document.getElementsByClassName("change02")[0];
function C02next(){
  if(chuyenC < C_Max) chuyenC += C_kichthuoc;
  else chuyenC = 0;
  chuyencontent02.style.marginLeft = '-' + chuyenC + 'px';
}
function C02prev(){
  if(chuyenC == 0) chuyenC = C_Max;
  else chuyenC -= C_kichthuoc;
  chuyencontent02.style.marginLeft = '-' + chuyenC + 'px';
}
//slide máy tính bảng
var chuyencontent03 = document.getElementsByClassName("change03")[0];
function C03next(){
  if(chuyenC < C_Max) chuyenC += C_kichthuoc;
  else chuyenC = 0;
  chuyencontent03.style.marginLeft = '-' + chuyenC + 'px';
}
function C03prev(){
  if(chuyenC == 0) chuyenC = C_Max;
  else chuyenC -= C_kichthuoc;
  chuyencontent03.style.marginLeft = '-' + chuyenC + 'px';
}
//slide âm thanh
var chuyencontent04 = document.getElementsByClassName("change04")[0];
function C04next(){
  if(chuyenC < C_Max) chuyenC += C_kichthuoc;
  else chuyenC = 0;
  chuyencontent04.style.marginLeft = '-' + chuyenC + 'px';
}
function C04prev(){
  if(chuyenC == 0) chuyenC = C_Max;
  else chuyenC -= C_kichthuoc;
  chuyencontent04.style.marginLeft = '-' + chuyenC + 'px';
}

function toggleActive(element){
  element.classList.toggle('active')
}
const loginButton = document.querySelector("#login-button")
const loginLayout = document.querySelector("#wrapper > div.login-layout")
const loginClose = document.querySelector('#close-login-layout')
loginButton.addEventListener('click', ()=>{
  toggleActive(loginLayout)
})
loginClose.addEventListener('click', ()=>{
  toggleActive(loginLayout)
})

const signup = document.querySelector("#sign-up")
const signupLayout = document.querySelector("#wrapper > div.sign-up-layout")
const signupClose = document.querySelector('#close-signup-layout') 
const comebackLogin = document.querySelector('#comeback-login') 
signup.addEventListener('click', ()=>{
  toggleActive(signupLayout)
  toggleActive(loginLayout)
})
signupClose.addEventListener('click', ()=>{
  toggleActive(signupLayout)
})
comebackLogin.addEventListener('click', ()=>{
  toggleActive(signupLayout)
  toggleActive(loginLayout)
})
