const menu = document.querySelector('#menu-bars');
const navbar = document.querySelector('.navbar');

console.log(menu);
menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

// Lấy tất cả các thẻ <a> trong menu
const navLinks = document.querySelectorAll(".navbar a");

// Lặp qua từng thẻ <a> và thêm sự kiện click
navLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
        // Loại bỏ lớp "active" từ tất cả các thẻ <a>
        navLinks.forEach((navLink) => {
            navLink.classList.remove("active");
        });

        // Thêm lớp "active" cho thẻ <a> được click
        link.classList.add("active");
    });
});
