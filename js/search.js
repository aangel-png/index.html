document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("searchForm");
    const message = document.getElementById("message");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const from = document.getElementById("from").value;
        const to = document.getElementById("to").value;
        const date = document.getElementById("date").value;

        if (from === "" || to === "" || date === "") {
            message.textContent = "يرجى تعبئة جميع الحقول";
            message.style.color = "red";
            return;
        }

        if (from === to) {
            message.textContent = "لا يمكن اختيار نفس المدينة";
            message.style.color = "red";
            return;
        }

        const searchData = {
            from: from,
            to: to,
            date: date
        };

        localStorage.setItem("searchData", JSON.stringify(searchData));

        message.textContent = "جاري البحث عن الرحلات...";
        message.style.color = "lime";

        setTimeout(() => {
            window.location.href = "results.html";
        }, 800);
    });

});
