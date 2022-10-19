 /*window.onclick = function(e) {
    if (!e.target.matches('.nut_dropdown')) {
    var noiDungDropdown = document.querySelector(".noidung_dropdown");
      if (noiDungDropdown.classList.contains('hienThi')) {
        noiDungDropdown.classList.remove('hienThi');
      }
    }
  }
*/

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

//slide
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

//slide-content
var Ckichthuoc = document.getElementsByClassName("ktcontent")[0].clientWidth;
var chuyencontent = document.getElementsByClassName("chuyen-content")[0];
var Cslid = document.getElementsByClassName("c-sli").length;
var Cmax = Cslid*Ckichthuoc - 4*Ckichthuoc;
var chuyenC = 0;
function Cnext(){
  if(chuyenC < Cmax) chuyenC += Ckichthuoc;
  else chuyenC = 0;
  chuyencontent.style.marginLeft = '-' + chuyenC + 'px';
}
function Cprev(){
  if(chuyenC == 0) chuyenC = Cmax;
  else chuyenC -= Ckichthuoc;
  chuyencontent.style.marginLeft = '-' + chuyenC + 'px';
}







