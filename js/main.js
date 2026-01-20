document.addEventListener("DOMContentLoaded", function () {

    const form = document.querySelector(".booking-form");
    const messageBox = document.getElementById("form-message");
messageBox.style.display = "none";

    if (!form || !messageBox) return;

    function showError(text) {
        messageBox.querySelector(".text").textContent = text;
        messageBox.style.display = "flex";
    }

    function hideError() {
        messageBox.style.display = "none";
    }

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const from = document.getElementById("from").value.trim();
        const to = document.getElementById("to").value.trim();
        const date = document.getElementById("date").value;
        const passengers = document.querySelector("input[type='number']").value;

        // 🔴 إذا في نقص
        if (!from || !to || !date || passengers < 1) {
            showError("يرجى تعبئة جميع الحقول");
            return;
        }
                       console.log("JS شغال");

        // ✅ إذا كلشي تمام
        hideError();

        // كمّلي هون منطق البحث أو تأكيد الحجز
        console.log("تم إدخال جميع البيانات بنجاح");
    });

});
