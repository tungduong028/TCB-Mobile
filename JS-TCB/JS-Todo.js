//menu icon-bars
function hamDropdown() {
    document.querySelector(".menu").classList.toggle("hienThi");
  }
  
  //cuộn và ẩn header-top
  $(document).ready(function () {
    $(window).scroll(function () {
      if ($(this).scrollTop()) {
        $('.header-top').addClass('none');
      }
      else {
        $('.header-top').removeClass('none');
      }
  
    })
  })

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
setInterval(next, 3000);