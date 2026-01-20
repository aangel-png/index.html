document.addEventListener("DOMContentLoaded", function () {

    const container = document.getElementById("resultsContainer");
    const message = document.getElementById("message");

    const searchData = JSON.parse(localStorage.getItem("searchData"));

    if (!searchData) {
        message.textContent = "لا توجد بيانات بحث";
        message.style.color = "red";
        return;
    }

    // رحلات وهمية (مرحلة أولى)
    const trips = [
        { price: 15000, time: "08:00 صباحًا" },
        { price: 18000, time: "12:00 ظهرًا" },
        { price: 20000, time: "06:00 مساءً" }
    ];

    trips.forEach((trip, index) => {
        const card = document.createElement("div");
        card.className = "trip-card";

        card.innerHTML = `
            <h3>${searchData.from} → ${searchData.to}</h3>
            <p>التاريخ: ${searchData.date}</p>
            <p>الوقت: ${trip.time}</p>
            <p class="price">${trip.price}2000 ل.س</p>
            <button class="book-btn">احجز الآن</button>
        `;

        card.querySelector(".book-btn").addEventListener("click", function () {
            localStorage.setItem("selectedTrip", JSON.stringify({
                ...searchData,
                ...trip
            }));

            window.location.href = "confirm.html";
        });

        container.appendChild(card);
    });

});
