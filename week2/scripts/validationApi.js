document.querySelector("button").addEventListener("click", function (e) {
    const code = document.querySelector("#code");
    const message = document.querySelector("#message");

    if (code.checkValidity()) {
        message.textContent = "A valid code was entered.";
        message.style.backgroundColor = "#e5ffe5";
    } else {
        message.textContent = "❌ The code is invalid. Please enter a valid one.";
        message.style.backgroundColor = "#ffe5e5";
    }
    message.style.visibility = "visible";
});
// --- that the too tip still shows 