// 📞 Call Button Function
document.querySelector(".btn").addEventListener("click", function () {
    window.location.href = "tel:9783138686";
});


// 📚 Class Box Click Effect
let classes = document.querySelectorAll(".class-box");

classes.forEach(function(box) {
    box.addEventListener("click", function () {
        alert("You clicked on " + box.innerText);
    });
});


// 👨‍🏫 Staff Card Click
let staff = document.querySelectorAll(".staff-card");

staff.forEach(function(card) {
    card.addEventListener("click", function () {
        alert("Teacher: " + card.innerText);
    });
});

// clock 

function updateClock() {
    let now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // AM / PM
    let ampm = hours >= 12 ? "PM" : "AM";

    // Convert 24h → 12h
    hours = hours % 12;
    hours = hours ? hours : 12; // 0 ko 12 banata hai

    // Leading zero
    if (hours < 10) hours = "0" + hours;
    if (minutes < 10) minutes = "0" + minutes;
    if (seconds < 10) seconds = "0" + seconds;

    let time = hours + ":" + minutes + ":" + seconds + " " + ampm;

    document.getElementById("clock").innerText = time;
}

// Run every second
setInterval(updateClock, 1000);

// Run instantly
updateClock();
