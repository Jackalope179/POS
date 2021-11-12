// Đối tượng `Validator`
function Validator(options) {
    function getParent(element, selector) {
        while (element.parentElement) {
            if (element.parentElement.matches(selector)) {
                return element.parentElement;
            }
            element = element.parentElement;
        }
    }

    var selectorRules = {};

    // Hàm thực hiện validate
    function validate(inputElement, rule) {
        var errorElement = getParent(inputElement, options.formGroupSelector).querySelector(options.errorSelector);
        var errorMessage;

        // Lấy ra các rules của selector
        var rules = selectorRules[rule.selector];

        // Lặp qua từng rule & kiểm tra
        // Nếu có lỗi thì dừng việc kiểm
        for (var i = 0; i < rules.length; ++i) {
            switch (inputElement.type) {
                case 'radio':
                case 'checkbox':
                    errorMessage = rules[i](
                        formElement.querySelector(rule.selector + ':checked')
                    );
                    break;
                default:
                    errorMessage = rules[i](inputElement.value);
            }
            if (errorMessage) break;
        }

        if (errorMessage) {
            errorElement.innerText = errorMessage;
            getParent(inputElement, options.formGroupSelector).classList.add('invalid');
        } else {
            errorElement.innerText = '';
            getParent(inputElement, options.formGroupSelector).classList.remove('invalid');
        }

        return !errorMessage;
    }

    // Lấy element của form cần validate
    var formElement = document.querySelector(options.form);
    if (formElement) {
        // Khi submit form
        formElement.onsubmit = function(e) {
                e.preventDefault();
                var isFormValid = true;
                // Lặp qua từng rules và validate
                options.rules.forEach(function(rule) {
                    var inputElement = formElement.querySelector(rule.selector);
                    var isValid = validate(inputElement, rule);
                    if (!isValid) {
                        isFormValid = false;
                    }
                });

                if (isFormValid) {
                    //formElement.submit();
                    //Trường hợp submit với javascript
                    if (typeof options.onSubmit === 'function') {
                        var enableInputs = formElement.querySelectorAll('[name]');
                        var formValues = Array.from(enableInputs).reduce(function(values, input) {

                            switch (input.type) {
                                case 'radio':
                                    values[input.name] = formElement.querySelector('input[name="' + input.name + '"]:checked').value;
                                    break;
                                case 'checkbox':
                                    if (!input.matches(':checked')) {
                                        values[input.name] = '';
                                        return values;
                                    }
                                    if (!Array.isArray(values[input.name])) {
                                        values[input.name] = [];
                                    }
                                    values[input.name].push(input.value);
                                    break;
                                case 'file':
                                    values[input.name] = input.files;
                                    break;
                                default:
                                    values[input.name] = input.value;
                            }
                            return values;
                        }, {});
                        options.onSubmit(formValues);
                    }
                    // Trường hợp submit với hành vi mặc định
                    else {
                        formElement.submit();
                    }
                }
            }
            // Lặp qua mỗi rule và xử lý (lắng nghe sự kiện blur, input, ...)
        options.rules.forEach(function(rule) {

            // Lưu lại các rules cho mỗi input
            if (Array.isArray(selectorRules[rule.selector])) {
                selectorRules[rule.selector].push(rule.test);
            } else {
                selectorRules[rule.selector] = [rule.test];
            }

            var inputElements = formElement.querySelectorAll(rule.selector);

            Array.from(inputElements).forEach(function(inputElement) {
                // Xử lý trường hợp blur khỏi input
                inputElement.onblur = function() {
                    validate(inputElement, rule);
                }

                // Xử lý mỗi khi người dùng nhập vào input
                inputElement.oninput = function() {
                    var errorElement = getParent(inputElement, options.formGroupSelector).querySelector(options.errorSelector);
                    errorElement.innerText = '';
                    getParent(inputElement, options.formGroupSelector).classList.remove('invalid');
                }
            });
        });
    }

}


Validator.isRequired = function(selector, message) {
    return {
        selector: selector,
        test: function(value) {
            return value ? undefined : message || 'Vui lòng nhập trường này'
        }
    };
}

Validator.isEmail = function(selector, message) {
    return {
        selector: selector,
        test: function(value) {
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test(value) ? undefined : message || 'Trường này phải là email';
        }
    };
}
Validator.isPhone = function(selector, message) {
    return {
        selector: selector,
        test: function(value) {
            var regex = /((09|03|07|08|05)+([0-9]{8})\b)/g;
            return regex.test(value) ? undefined : message || 'Trường này phải là số điện thoại';
        }
    };
}

Validator.minLength = function(selector, min, message) {
    return {
        selector: selector,
        test: function(value) {
            return value.length >= min ? undefined : message || `Vui lòng nhập tối thiểu ${min} kí tự`;
        }
    };
}
Validator.isOtp = function(selector, min, message) {
    return {
        selector: selector,
        test: function(value) {
            return value.length == min ? undefined : message || `Vui lòng nhập đúng ${min} kí tự của mã OTP`;
        }
    };
}

Validator.isConfirmed = function(selector, getConfirmValue, message) {
    return {
        selector: selector,
        test: function(value) {
            return value === getConfirmValue() ? undefined : message || 'Giá trị nhập vào không chính xác';
        }
    }
}


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