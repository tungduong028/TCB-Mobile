//menu dropdown
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
 
 function hamDropdown02() {
  document.querySelector(".sub01").classList.toggle("hienThi");
}
 window.onclick = function(e) {
   if (!e.target.matches('.drop02')) {
   var noiDungDropdown02 = document.querySelector(".sub01");
     if (noiDungDropdown02.classList.contains('hienThi')) {
       noiDungDropdown02.classList.remove('hienThi');
     }
   }
 }

 function hamDropdown03() {
  document.querySelector(".sub02").classList.toggle("hienThi");
}
 window.onclick = function(e) {
   if (!e.target.matches('.drop03')) {
   var noiDungDropdown = document.querySelector(".sub02");
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
  //slide-gioithieu
  var kichthuoc = document.getElementsByClassName("slide")[0].clientWidth;
  var chuyenslide = document.getElementsByClassName("chuyen-slide")[0];
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
  setInterval(next,2500);

var mql = window.matchMedia('screen and (max-width: 500px)');if (mql.matches){
  // window width is at least 500px


} else {
  // window width is less than 500px

}


//slide-content-01
var C01kichthuoc = document.getElementsByClassName("ktcontent-01")[0].clientWidth;
var c01maxchuyen = document.getElementsByClassName("chuyen-slide")[0].clientWidth;
var chuyencontent01 = document.getElementsByClassName("chuyen-content-01")[0];
var Cslid01 = document.getElementsByClassName("C01-sli").length;
var C01max = Cslid01*C01kichthuoc - 4*C01kichthuoc;
var chuyenC01 = 0;
function C01next(){
  if(chuyenC01 > c01maxchuyen) chuyenC01 = 0;
  else chuyenC01 += C01kichthuoc;
  chuyencontent01.style.marginLeft = '-' + chuyenC01 + 'px';
}
function C01prev(){
  if(chuyenC01 == 0) chuyenC01 = 0;
  else chuyenC01 -= C01kichthuoc;
  chuyencontent01.style.marginLeft = '-' + chuyenC01 + 'px';
}

//slide-content-02
var C02kichthuoc = document.getElementsByClassName("ktcontent-02")[0].clientWidth;
var chuyencontent02 = document.getElementsByClassName("chuyen-content-02")[0];
var Cslid02 = document.getElementsByClassName("C02-sli").length;
var C02max = Cslid02*C02kichthuoc - 4*C02kichthuoc;
var chuyenC02 = 0;
function C02next(){
  if(chuyenC02 < C02max) chuyenC02 += C02kichthuoc;
  else chuyenC02 = 0;
  chuyencontent02.style.marginLeft = '-' + chuyenC02 + 'px';
}
function C02prev(){
  if(chuyenC02 == 0) chuyenC02 = Cmax;
  else chuyenC02 -= C02kichthuoc;
  chuyencontent02.style.marginLeft = '-' + chuyenC02 + 'px';
}

//slide-content-03
var C03kichthuoc = document.getElementsByClassName("ktcontent-03")[0].clientWidth;
var chuyencontent03 = document.getElementsByClassName("chuyen-content-03")[0];
var Cslid03 = document.getElementsByClassName("C03-sli").length;
var C03max = Cslid03*C03kichthuoc - 4*C03kichthuoc;
var chuyenC03 = 0;
function C03next(){
  if(chuyenC03 < C03max) chuyenC03 += C03kichthuoc;
  else chuyenC03 = 0;
  chuyencontent03.style.marginLeft = '-' + chuyenC03 + 'px';
}
function C03prev(){
  if(chuyenC03 == 0) chuyenC03 = C03max;
  else chuyenC03 -= C03kichthuoc;
  chuyencontent03.style.marginLeft = '-' + chuyenC03 + 'px';
}

//slide-content-04
var C04kichthuoc = document.getElementsByClassName("ktcontent-04")[0].clientWidth;
var chuyencontent04 = document.getElementsByClassName("chuyen-content-04")[0];
var Cslid04 = document.getElementsByClassName("C04-sli").length;
var C04max = Cslid04*C04kichthuoc - 4*C04kichthuoc;
var chuyenC04 = 0;
function C04next(){
  if(chuyenC04 < C04max) chuyenC04 += C04kichthuoc;
  else chuyenC04 = 0;
  chuyencontent04.style.marginLeft = '-' + chuyenC04 + 'px';
}
function C04prev(){
  if(chuyenC04 == 0) chuyenC04 = C04max;
  else chuyenC04 -= C04kichthuoc;
  chuyencontent04.style.marginLeft = '-' + chuyenC04 + 'px';
}

//slide-content-05
var C05kichthuoc = document.getElementsByClassName("ktcontent-05")[0].clientWidth;
var chuyencontent05 = document.getElementsByClassName("chuyen-content-05")[0];
var Cslid05 = document.getElementsByClassName("C05-sli").length;
var C05max = Cslid05*C05kichthuoc - 4*C05kichthuoc;
var chuyenC05 = 0;
function C05next(){
  if(chuyenC05 < C05max) chuyenC05 += C05kichthuoc;
  else chuyenC05 = 0;
  chuyencontent05.style.marginLeft = '-' + chuyenC05 + 'px';
}
function C05prev(){
  if(chuyenC05 == 0) chuyenC05 = C05max;
  else chuyenC05 -= C05kichthuoc;
  chuyencontent05.style.marginLeft = '-' + chuyenC05 + 'px';
}




