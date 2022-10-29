//menu icon-bars
function hamDropdown() {
  document.querySelector(".menu").classList.toggle("hienThi");
}
 window.onclick = function(e) {
   if (!e.target.matches('.nut_dropdown')) {
   var noiDungDropdown = document.querySelector(".menu");
     if (noiDungDropdown.classList.contains('hienThi')) {
       noiDungDropdown.classList.remove('hienThi');
     }
   }
 }

 function hamDropdown03() {
  document.querySelector(".sub-menu").classList.toggle("hienThi");
}
 window.onclick = function(e) {
   if (!e.target.matches('.drop03')) {
   var noiDungDropdown = document.querySelector(".sub-menu");
     if (noiDungDropdown.classList.contains('hienThi')) {
       noiDungDropdown.classList.remove('hienThi');
     }
   }
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
var mql = window.matchMedia('screen and (max-width: 500px)');if (mql.matches){
  var C_kichthuoc = document.getElementsByClassName("ktcontent")[0].clientWidth;
  var chuyencontent = document.getElementsByClassName("change-content")[0];
  var C_Slide = document.getElementsByClassName("C-Slide").length;
  var C_Max = C_Slide*C_kichthuoc-C_kichthuoc;
  var chuyenC = 0;
  function Cnext(){
    if(chuyenC < C_Max) chuyenC += (C_kichthuoc+30);
    else chuyenC = 0;
    chuyencontent.style.marginLeft = '-' + chuyenC + 'px';
  }
  function Cprev(){
    if(chuyenC == 0) chuyenC = C_Max;
    else chuyenC -= C_kichthuoc;
    chuyencontent.style.marginLeft = '-' + chuyenC + 'px';
  }
} else {
  var C_kichthuoc = document.getElementsByClassName("ktcontent")[0].clientWidth;
  var chuyencontent = document.getElementsByClassName("change-content")[0];
  var C_Max = C_kichthuoc*2;
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
}

/*
function next() {
  // đổi slide 
  if (change < max) change = change + length;
  else
      change = 0;
  changeSlide.style.marginLeft = '-' + change + 'px';

  // đổi nút hiển thị slide
  if (currentSlide == slides.length - 1) {
      currentSlide = 0;
  } else {
      currentSlide++;
  }
  document.querySelector('.dot.current').classList.remove('current');
  dots[currentSlide].classList.add('current');
}

function back() {
  if (change == 0)
      change = max;
  else
      change = change - length;
  changeSlide.style.marginLeft = '-' + change + 'px';

  if (currentSlide == 0) {
      currentSlide = slide.length - 1;
  } else {
      currentSlide--;
  }
  document.querySelector('.dot.current').classList.remove('current');
  dots[currentSlide].classList.add('current');
}
setInterval(function() {
  next();
}, 3000);
*/
