document.addEventListener("DOMContentLoaded", function () {

    const container = document.getElementById("tripsContainer");
    const emptyMessage = document.getElementById("emptyMessage");

    const trips = JSON.parse(localStorage.getItem("bookings")) || [];

    if (trips.length === 0) {
        emptyMessage.textContent = "لا توجد رحلات محجوزة حتى الآن";
        emptyMessage.style.color = "#f87171";
        return;
    }

    trips.forEach((trip, index) => {
        const card = document.createElement("div");
        card.className = "trip-card";

        card.innerHTML = `
            <p><strong>من:</strong> ${trip.from}</p>
            <p><strong>إلى:</strong> ${trip.to}</p>
            <p><strong>التاريخ:</strong> ${trip.date}</p>
            <p><strong>الوقت:</strong> ${trip.time}</p>
            <p><strong>عدد الركاب:</strong> ${trip.passengers || 1}</p>
            <p><strong>السعر:</strong> ${trip.price} 2000 ل.س</p>
        `;

        container.appendChild(card);
    });

});
