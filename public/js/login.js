var passField = document.querySelectorAll(".input-pass input");
// console.log(passField);
console.log(passField.length);
if (passField.length === 1) {
    var showBtn = document.querySelector("span i.fa-eye");
    console.log(showBtn);
    showBtn.onclick = (() => {
        if (passField[0].type === "password") {
            passField[0].type = "text";
            showBtn.classList.add("hide-btn");
        } else {
            passField[0].type = "password";
            showBtn.classList.remove("hide-btn");
        }
    });
} else if (passField.length === 2) {
    var showBtn = document.querySelector("span i.fa-eye");
    var showBtnConfirm = document.querySelector("span i.eye-confirm");
    showBtn.onclick = (() => {
        if (passField[0].type === "password") {
            passField[0].type = "text";
            showBtn.classList.add("hide-btn");
        } else {
            passField[0].type = "password";
            showBtn.classList.remove("hide-btn");
        }
    });
    showBtnConfirm.onclick = (() => {
        if (passField[1].type === "password") {
            passField[1].type = "text";
            showBtnConfirm.classList.add("hide-btn");
        } else {
            passField[1].type = "password";
            showBtnConfirm.classList.remove("hide-btn");
        }
    });
}

// Toast function
function toast({ title = "", message = "", type = "info", duration = 3000 }) {
    const main = document.getElementById("toast");
    if (main) {
        const toast = document.createElement("div");

        // Auto remove toast
        const autoRemoveId = setTimeout(function() {
            main.removeChild(toast);
        }, duration + 1000);

        // Remove toast when clicked
        toast.onclick = function(e) {
            if (e.target.closest(".toast__close")) {
                main.removeChild(toast);
                clearTimeout(autoRemoveId);
            }
        };

        const icons = {
            success: "fas fa-check-circle",
            info: "fas fa-info-circle",
            warning: "fas fa-exclamation-circle",
            error: "fas fa-exclamation-circle"
        };
        const icon = icons[type];
        const delay = (duration / 1000).toFixed(2);

        toast.classList.add("toast", `toast--${type}`);
        toast.style.animation = `slideInLeft ease .3s, fadeOut linear 1s ${delay}s forwards`;

        toast.innerHTML = `
                      <div class="toast__icon">
                          <i class="${icon}"></i>
                      </div>
                      <div class="toast__body">
                          <h3 class="toast__title">${title}</h3>
                          <p class="toast__msg">${message}</p>
                      </div>
                      <div class="toast__close">
                          <i class="fas fa-times"></i>
                      </div>
                  `;
        main.appendChild(toast);
    }
}

function showSuccessToast() {
    console.log("toast success");
    toast({
        title: "Thành công!",
        message: "Bạn đã đăng nhập thành công",
        type: "success",
        duration: 5000
    });
}

function showLoginSuccessToast() {
    console.log("toast success");
    toast({
        title: "Đăng nhập thành công!",
        message: "Bạn đã đăng nhập thành công",
        type: "success",
        duration: 5000
    });
}

function showRegisterSuccessToast() {
    console.log("toast success");
    toast({
        title: "Đăng ký thành công!",
        message: "Bạn đã đăng ký tài khoản thành công",
        type: "success",
        duration: 5000
    });
}

function showResetPassSuccessToast() {
    console.log("toast success");
    toast({
        title: "Thành công!",
        message: "Bạn đã đặt lại mật khẩu mới thành công",
        type: "success",
        duration: 5000
    });
}

function showErrorToast() {
    console.log("toast error");
    toast({
        title: "Thất bại!",
        message: "Bạn đã nhập sai tên đăng nhặp hoặc mật khẩu.",
        type: "error",
        duration: 5000
    });
}

function showLoginErrorToast() {
    console.log("toast error");
    toast({
        title: "Đăng nhập thất bại!",
        message: "Bạn đã nhập sai tên đăng nhặp hoặc mật khẩu.",
        type: "error",
        duration: 5000
    });
}

function showRegisterErrorToast() {
    console.log("toast error");
    toast({
        title: "Đăng ký thất bại!",
        message: "Số điện thoại bạn đăng ký đã tồn tại.",
        type: "error",
        duration: 5000
    });
}

function showForgotErrorToast() {
    console.log("toast error");
    toast({
        title: "Thất bại!",
        message: "Số điện thoại bạn nhập không tồn tại.",
        type: "error",
        duration: 5000
    });
}

function showOtpErrorToast() {
    console.log("toast error");
    toast({
        title: "Thất bại!",
        message: "Bạn đã nhập sai mã OTP.",
        type: "error",
        duration: 5000
    });
}