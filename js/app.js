const menu = document.querySelector('#menu-bars');
const navbar = document.querySelector('.navbar');

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

  function registerClicked() {
            event.preventDefault();
            // Hiển thị thông báo tùy chỉnh thay vì sử dụng alert mặc định
            // check xem input có rỗng hay không
            if (document.getElementById('exampleInputEmail6').value == '') {
                alert('Vui lòng nhập email');
                return;
            }
            var customAlert = document.createElement('div');
            customAlert.innerHTML = 'Đã đăng ký thành công';
            customAlert.style.backgroundColor = '#C7DCB3';
            customAlert.style.color = 'white';
            customAlert.style.padding = '10px';
            customAlert.style.position = 'fixed';
            customAlert.style.top = '10px';
            customAlert.style.left = '50%';
            customAlert.style.transform = 'translateX(-50%)';
            customAlert.style.zIndex = '1000';
            //width = 200px, height = 100px;
            customAlert.style.width = '400px';
            //border-radius = 5px;
            customAlert.style.borderRadius = '5px';
            //text-align = center;
            customAlert.style.textAlign = 'center';
            //font-size = 16px;
            customAlert.style.fontSize = '24px';
            //font bold
            customAlert.style.fontWeight = 'bold';
            document.body.appendChild(customAlert);

            console.log('Đã đăng ký thành công');
            // Xóa thông báo sau một khoảng thời gian (ví dụ: 3 giây)
            setTimeout(function () {
                customAlert.style.display = 'none';
            }, 2000);
        }

    
