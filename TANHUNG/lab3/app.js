// --- BÀI 1: Đổi nền ---
const btnToggle = document.getElementById('toggleBg');
btnToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
});

// --- BÀI 2 & 3: Scroll Events ---
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');
const boxes = document.querySelectorAll('.fade-box');

window.addEventListener('scroll', () => {
    let current = "";

    // Bài 2: Xác định section đang hiện diện
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });

    // Bài 3: Hiện box khi cuộn đến
    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;
        if (boxTop < window.innerHeight - 50) {
            box.classList.add('show');
        }
    });
});

// --- BÀI 4: Nút nhảy khi hover ---
const jumpBtn = document.querySelector('.jump-btn');
jumpBtn.addEventListener('mouseover', () => {
    jumpBtn.classList.add('animate');
    // Xóa class sau khi diễn xong để có thể nhảy lại lần sau
    setTimeout(() => jumpBtn.classList.remove('animate'), 400);
});

// --- BÀI 5: Hình tròn theo chuột ---
const circle = document.getElementById('follower');
window.addEventListener('mousemove', (e) => {
    // Sử dụng transform để mượt hơn left/top
    circle.style.transform = `translate(${e.clientX - 15}px, ${e.clientY - 15}px)`;
});