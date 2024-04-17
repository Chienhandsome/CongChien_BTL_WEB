var loginlink = document.querySelector('.form_box_register');
var registerlink = document.querySelector('.register_link');
var formboxlogin = document.querySelector('#form_box_login');
var boxlogin = document.querySelector(".login_link");

registerlink.addEventListener('click', ()=> {
    loginlink.classList.add('active');
    formboxlogin.classList.add('active');
});
boxlogin.addEventListener("click", ()=>{
    loginlink.classList.remove("active");
    formboxlogin.classList.remove("active");
})

// xử lý form đăng nhập trả về trang chủ
const form = document.getElementById("lg-formm");

form.addEventListener("submit", function(event){
    event.preventDefault();
    window.location.href="../HTML/homepagee.html"
});

// xử lý form đăng ký trả về form đăng nhập và về trang chủ
const registerform = document.querySelector('#register-form');
const usernameInput = document.querySelector('#username-input');
const passwordInput = document.querySelector('#password-input');

form.addEventListener('submit', (event)=>{
    event.preventDefault();
        const usenamee = usernameInput.value;
        const passwordd = passwordInput.value;
});