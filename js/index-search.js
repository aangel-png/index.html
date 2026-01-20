document.addEventListener("DOMContentLoaded", function () {

    const searchBtn = document.querySelector(".search-btn");
    const resultsBox = document.getElementById("resultsBox");

    if (!searchBtn || !resultsBox) return;

    searchBtn.addEventListener("click", function (e) {
        e.preventDefault();

        const from = document.querySelector('select[id*="from"]').value;
        const to = document.querySelector('select[id*="to"]').value;
        const date = document.querySelector('input[type="date"]').value;
        const passengersInput = document.querySelector('input[type="number"]');

        const passengers = passengersInput ? passengersInput.value : 1;

        if (!from || !to || !date) {
            resultsBox.innerHTML = `<p style="color:red">يرجى تعبئة جميع الحقول</p>`;
            return;
        }

        if (from === to) {
            resultsBox.innerHTML = `<p style="color:red">لا يمكن اختيار نفس المدينة</p>`;
            return;
        }

        // نتيجة وهمية (مرحلة 1)
        resultsBox.innerHTML = `
            <div class="trip-card">
                <p><strong>من:</strong> ${from}</p>
                <p><strong>إلى:</strong> ${to}</p>
                <p><strong>التاريخ:</strong> ${date}</p>
                <p><strong>عدد الركاب:</strong> ${passengers}</p>
                <p><strong>السعر:</strong> 2000 ل.س</p>

                <button id="confirmBooking" class="search-btn">
                    تأكيد الحجز
                </button>
                <button id="cancelBooking" class="cancel-btn">
                إلغاء
            </button>
            </div>
        `;
document.getElementById("cancelBooking").addEventListener("click", function () {
    resultsBox.innerHTML = "";
});

        // زر تأكيد الحجز
        document.getElementById("confirmBooking").addEventListener("click", function () {

            const booking = {
                from,
                to,
                date,
                passengers,
                price: 2000
            };

            const bookings = JSON.parse(localStorage.getItem("bookings")) || [];
            bookings.push(booking);
            localStorage.setItem("bookings", JSON.stringify(bookings));

            alert("تم تأكيد الحجز بنجاح");
        });

    });

});
