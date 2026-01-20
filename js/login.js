document.addEventListener("DOMContentLoaded", function () {

    var correctEmail = "user@email.com";
    var correctPassword = "123456";

    var form = document.getElementById("loginForm");
    var message = document.getElementById("message");

    // حماية إضافية
    if (!form) return;

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;

        if (email.indexOf("@") === -1 || email.indexOf(".") === -1) {
            message.innerText = "لديك خطأ … حاول مرة أخرى";
            message.style.color = "red";
            return;
        }

        if (email === correctEmail && password === correctPassword) {
            message.innerText = "تم تسجيل دخولك";
            message.style.color = "lime";

            setTimeout(function () {
                window.location.href = "index.html";
            }, 1000);

        } else {
            message.innerText = "لديك خطأ … حاول مرة أخرى";
            message.style.color = "red";
        }
    });

});
