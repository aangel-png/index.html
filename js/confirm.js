document.addEventListener("DOMContentLoaded", function () {

    const box = document.getElementById("confirmBox");
    const message = document.getElementById("message");
    const confirmBtn = document.getElementById("confirmBtn");

    const trip = JSON.parse(localStorage.getItem("selectedTrip"));

    if (!trip) {
        message.textContent = "لا توجد رحلة لتأكيدها";
        message.style.color = "red";
        confirmBtn.disabled = true;
        return;
    }

    box.innerHTML = `
        <p><strong>من:</strong> ${trip.from}</p>
        <p><strong>إلى:</strong> ${trip.to}</p>
        <p><strong>التاريخ:</strong> ${trip.date}</p>
        <p><strong>الوقت:</strong> ${trip.time}</p>
        <p><strong>السعر:</strong> ${trip.price} ل.س</p>
        <p><strong>عدد الركاب:</strong> ${trip.passengers || 1}</p>
    `;

    confirmBtn.addEventListener("click", function () {

        let bookings = JSON.parse(localStorage.getItem("bookings")) || [];
        bookings.push(trip);
        localStorage.setItem("bookings", JSON.stringify(bookings));

        message.textContent = "تم تأكيد الحجز بنجاح ✅";
        message.style.color = "lime";

        confirmBtn.disabled = true;

        setTimeout(() => {
            window.location.href = "index.html";
        }, 1500);
    });

});
