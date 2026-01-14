// Chế độ Sáng/Tối
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Hiệu ứng con trỏ chuột
const cursor = document.querySelector('.cursor');
window.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

// Xử lý khi cuộn trang
window.addEventListener('scroll', () => {
    // Hiệu ứng hiện dần khi cuộn (Reveal)
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach(el => {
        let windowHeight = window.innerHeight;
        let revealTop = el.getBoundingClientRect().top;
        if (revealTop < windowHeight - 100) {
            el.classList.add('active');
        }
    });

    // Scroll Spy (Active Menu)
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-item');
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });

    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href').includes(current)) {
            item.classList.add('active');
        }
    });
});

/* --- CODE XÁC NHẬN GỬI YÊU CẦU --- */
const contactForm = document.querySelector('.contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Ngăn trang web bị tải lại

        // Lấy tên người dùng nhập vào để chào cho thân thiện
        const nameInput = contactForm.querySelector('input[type="text"]');
        const userName = nameInput ? nameInput.value : "bạn";

        // Thay đổi nội dung form để xác nhận đã gửi thành công
        contactForm.style.transition = "opacity 0.5s ease";
        contactForm.style.opacity = "0";

        setTimeout(() => {
            contactForm.innerHTML = `
                <div class="confirm-message" style="text-align: center; padding: 20px; animation: fadeIn 0.8s forwards;">
                    <h3 style="color: var(--primary-color); font-size: 1.5rem; margin-bottom: 10px;">✅ Gửi thành công!</h3>
                    <p>Cảm ơn <strong>${userName}</strong>, MovieLand đã nhận được yêu cầu và sẽ phản hồi sớm nhất qua email.</p>
                    <button onclick="location.reload()" class="buy-btn" style="width: auto; margin-top: 20px; padding: 10px 20px;">Gửi yêu cầu mới</button>
                </div>
            `;
            contactForm.style.opacity = "1";
        }, 500);
    });
}

/* --- CODE MỚI THÊM: XỬ LÝ MODAL TIN TỨC (Nâng cấp Cuộn & Ảnh lớn) --- */
// 1. Dữ liệu nội dung chi tiết (Đã thêm ảnh lớn và văn bản dài để kiểm tra tính năng kéo/cuộn)
const newsContent = {
    "Đại Tiệc Bắp Nước": `
        <img src="https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1000" 
             style="width:100%; height:350px; object-fit:cover; border-radius:10px; margin-bottom:20px;">
        <h2 style="color: var(--primary-color); margin-bottom:15px;">Đại Tiệc Bắp Nước</h2>
        <p style="font-size: 1.1rem; line-height: 1.8;">Hòa chung không khí lễ hội, MovieLand dành tặng món quà đặc biệt cho các tín đồ điện ảnh. Chúng tôi sẽ tặng miễn phí 100 combo bắp nước (vị phô mai hoặc caramel) dành cho những khách hàng may mắn mua vé tại quầy sớm nhất.</p>
        <p style="font-size: 1.1rem; line-height: 1.8;"><strong>Thời gian:</strong> Áp dụng duy nhất ngày Chủ Nhật tuần này từ 08:00 AM.</p>
        <p style="font-size: 1.1rem; line-height: 1.8;">Ngoài ra, khách hàng còn có cơ hội tham gia bốc thăm trúng thưởng các phần quà giá trị khác như Voucher giảm giá 50% cho lần xem phim tiếp theo hoặc gấu bông độc quyền từ các bộ phim bom tấn.</p>
        <p style="font-size: 1.1rem; line-height: 1.8;">Hãy rủ ngay bạn bè đến MovieLand để tận hưởng ngày cuối tuần rực rỡ và đầy ắp quà tặng nhé!</p>
    `,
    "Review Bom Tấn Tuần Này": `
        <img src="https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&w=1000" 
             style="width:100%; height:350px; object-fit:cover; border-radius:10px; margin-bottom:20px;">
        <h2 style="color: var(--primary-color); margin-bottom:15px;">Review Bom Tấn Tuần Này</h2>
        <p style="font-size: 1.1rem; line-height: 1.8;">Siêu phẩm tuần này không chỉ thỏa mãn phần nhìn với kỹ xảo CGI đỉnh cao mà còn lay động lòng người bởi thông điệp sâu sắc về gia đình và sự hy sinh. Đây là bộ phim đạt điểm số 9.5/10 trên các chuyên trang phê bình quốc tế.</p>
        <p style="font-size: 1.1rem; line-height: 1.8;">Dàn diễn viên gạo cội cùng những pha hành động mãn nhãn đã tạo nên một cơn sốt tại khắp các phòng vé toàn cầu. Tại MovieLand, bạn sẽ được thưởng thức bộ phim này với hệ thống âm thanh Dolby Atmos sống động nhất, giúp bạn như đang thực sự hòa mình vào không gian của bộ phim.</p>
        <p style="font-size: 1.1rem; line-height: 1.8;">Đừng bỏ lỡ những suất chiếu đặc biệt vào khung giờ vàng tuần này!</p>
    `
};

// 2. Lấy các phần tử Modal
const modal = document.getElementById("news-modal");
const modalBody = document.getElementById("modal-body-content");
const closeBtn = document.querySelector(".close-modal");

// 3. Xử lý sự kiện bấm "Chi tiết"
document.querySelectorAll('.read-more').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault(); // Ngăn trang web nhảy lên đầu trang
        
        // Tìm tiêu đề từ thẻ h3 nằm cùng cấp với thẻ cha chứa nút bấm
        const title = btn.parentElement.querySelector('h3').innerText;
        const detail = newsContent[title] || "Nội dung đang được cập nhật...";

        // Đổ dữ liệu vào Modal (Bao gồm cả ảnh và chữ)
        modalBody.innerHTML = detail;
        
        // Hiển thị Modal
        modal.style.display = "block";
        document.body.style.overflow = "hidden"; // Khóa cuộn trang nền để tập trung đọc tin
    });
});

// 4. Đóng Modal khi bấm nút X
if (closeBtn) {
    closeBtn.onclick = () => {
        modal.style.display = "none";
        document.body.style.overflow = "auto"; // Mở lại cuộn trang nền
    };
}

// 5. Đóng Modal khi bấm ra ngoài vùng nội dung trắng
window.onclick = (e) => {
    if (e.target == modal) {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
    }
};