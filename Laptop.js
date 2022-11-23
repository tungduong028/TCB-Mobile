const product02 = [
    { id: 1, image: "images/DienThoai/DT-noibat-pic-01.png", title: "iMac 24 2021 M1 7GPU asdwasdwad ", p: "20.000.000", },
    { id: 2, image: "images/DienThoai/DT-noibat-pic-02.jpg", title: "iMac 24 2021 M1 7GPU 8GB 256GB I Chính hãng Apple Việt Nam", p: "20.000.000" },
    { id: 3, image: "images/DienThoai/DT-noibat-pic-03.png", title: "iMac 24 2021 M1 7GPU 8GB 256GB I Chính hãng Apple Việt Nam", p: "20.000.000" },
    { id: 4, image: "images/DienThoai/DT-noibat-pic-04.png", title: "iMac 24 2021 M1 7GPU 8GB 256GB I Chính hãng Apple Việt Nam", p: "20.000.000" },
    { id: 5, image: "images/DienThoai/DT-noibat-pic-05.jpg", title: "iMac 24 2021 M1 7GPU 8GB 256GB I Chính hãng Apple Việt Nam", p: "20.000.000" },
    { id: 6, image: "images/DienThoai/DT-noibat-pic-06.jpg", title: "iMac 24 2021 M1 7GPU 8GB 256GB I Chính hãng Apple Việt Nam", p: "20.000.000" },
    { id: 7, image: "images/DienThoai/DT-noibat-pic-07.jpg", title: "iMac 24 2021 M1 7GPU 8GB 256GB I Chính hãng Apple Việt Nam", p: "20.000.000" },
    { id: 8, image: "images/DienThoai/DT-noibat-pic-08.png", title: "iMac 24 2021 M1 7GPU 8GB 256GB I Chính hãng Apple Việt Nam", p: "20.000.000" },
    { id: 9, image: "images/DienThoai/DT-noibat-pic-08.png", title: "iMac 24 2021 M1 7GPU 8GB 256GB I Chính hãng Apple Việt Nam", p: "20.000.000" },
    { id: 10, image: "images/DienThoai/DT-noibat-pic-08.png", title: "iMac 24 2021 M1 7GPU 8GB 256GB I Chính hãng Apple Việt Nam", p: "20.000.000" },
    { id: 11, image: "images/DienThoai/DT-noibat-pic-08.png", title: "iMac 24 2021 M1 7GPU 8GB 256GB I Chính hãng Apple Việt Nam", p: "20.000.000" },
    { id: 12, image: "images/DienThoai/DT-noibat-pic-08.png", title: "iMac 24 2021 M1 7GPU 8GB 256GB I Chính hãng Apple Việt Nam", p: "20.000.000" },
    { id: 13, image: "images/DienThoai/DT-noibat-pic-08.png", title: "iMac 24 2021 M1 7GPU 8GB 256GB I Chính hãng Apple Việt Nam", p: "20.000.000" },
    { id: 14, image: "images/DienThoai/DT-noibat-pic-08.png", title: "iMac 24 2021 M1 7GPU 8GB 256GB I Chính hãng Apple Việt Nam", p: "20.000.000" },
    { id: 15, image: "images/DienThoai/DT-noibat-pic-08.png", title: "iMac 24 2021 M1 7GPU 8GB 256GB I Chính hãng Apple Việt Nam", p: "20.000.000" },
    { id: 16, image: "images/DienThoai/DT-noibat-pic-08.png", title: "iMac 24 2021 M1 7GPU 8GB 256GB I Chính hãng Apple Việt Nam", p: "20.000.000" },
]

function renderProduct02() {
    html = '';
    const content = product02.map((item, index) => {
        if (index >= start && index < end) {
            html += '<li>';
            html += '<img class="C-Slide" src=' + item.image + '>';
            html += '<div class="info">';
            html += '<div class="name-info">';
            html += '<a href="#">' + item.title + '</a>';
            html += '</div>';
            html += '<div class="cost">' + item.p + '</div>'
            html += '</div>';
            html += '</li>';
            console.log();
            return html;
        }
    })
    document.getElementById('products02').innerHTML = html;
}
renderProduct02();

function changePage02() {
    const currentPages = document.querySelectorAll('.number-page li');
    for (let i = 0; i < currentPages.length; i++) {
        currentPages[i].addEventListener('click', () => {
            let value = i + 1;
            currentPage = value;
            getCurrentPage(currentPage);
            renderProduct02();
        })
    }
}
changePage02();

btnNext.addEventListener('click', () => {
    currentPage++;
    if (currentPage > totalPages) {
        currentPage = totalPages;
    }
    getCurrentPage(currentPage);
    renderProduct02();
})
btnPrev.addEventListener('click', () => {
    currentPage--;
    if (currentPage <= 1) {
        currentPage = 1;
    }
    getCurrentPage(currentPage);
    renderProduct02();
})