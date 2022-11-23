const product03 = [
    { id: 1, image: "images/DienThoai/DT-noibat-pic-01.png", title: "iMac 24 2021 M1 7GPU 8GB 256GB I Chính hãng Apple Việt Nam", p: "20.000.000", },
    { id: 2, image: "images/DienThoai/DT-noibat-pic-02.jpg", title: "iMac 24 2021 M1 7GPU 8GB 256GB I Chính hãng Apple Việt Nam", p: "20.000.000" },
    { id: 3, image: "images/DienThoai/DT-noibat-pic-03.png", title: "iMac 24 2021 M1 7GPU 8GB 256GB I Chính hãng Apple Việt Nam", p: "20.000.000" },
    { id: 4, image: "images/DienThoai/DT-noibat-pic-04.png", title: "iMac 24 2021 M1 7GPU 8GB 256GB I Chính hãng Apple Việt Nam", p: "20.000.000" },
    { id: 5, image: "images/DienThoai/DT-noibat-pic-05.jpg", title: "iMac 24 2021 M1 7GPU 8GB 256GB I Chính hãng Apple Việt Nam", p: "20.000.000" },
    { id: 6, image: "images/DienThoai/DT-noibat-pic-06.jpg", title: "iMac 24 2021 M1 7GPU 8GB 256GB I Chính hãng Apple Việt Nam", p: "20.000.000" },
    { id: 7, image: "images/DienThoai/DT-noibat-pic-07.jpg", title: "iMac 24 2021 M1 7GPU 8GB 256GB I Chính hãng Apple Việt Nam", p: "20.000.000" },
    { id: 8, image: "images/DienThoai/DT-noibat-pic-08.png", title: "iMac 24 2021 M1 7GPU 8GB 256GB I Chính hãng Apple Việt Nam", p: "20.000.000" },
]
const totalPage = 1;
function renderProduct03() {
    html = '';
    const content = product03.map((item, index) => {
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
            return html;
        }
    })
    document.getElementById('products03').innerHTML = html;
}
renderProduct03();

function changePage03() {
    const currentPages = document.querySelectorAll('.number-page li');
    for (let i = 0; i < currentPages.length; i++) {
        currentPages[i].addEventListener('click', () => {
            let value = i + 1;
            currentPage = value;
            getCurrentPage(currentPage);
            renderProduct03();
        })
    }
}
changePage03();

btnNext.addEventListener('click', () => {
    currentPage++;
    if (currentPage > totalPage) {
        currentPage = totalPage;
    }
    getCurrentPage(currentPage);
    renderProduct03();
})
btnPrev.addEventListener('click', () => {
    currentPage--;
    if (currentPage <= 1) {
        currentPage = 1;
    }
    getCurrentPage(currentPage);
    renderProduct03();
})