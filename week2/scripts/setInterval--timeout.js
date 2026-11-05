const h1 = document.getElementById("countdown");
const btn = document.getElementById("startButton");

btn.addEventListener("click", () => {
    let startTime = 10;
    h1.textContent = startTime;

    const timer = setInterval(() => {
        startTime--;
        h1.textContent = startTime;
    }, 1000);

    setTimeout(() => {
        clearInterval(timer);
        h1.textContent = "Time's up!";
        btn.disabled = false;
    }, 10900);
});