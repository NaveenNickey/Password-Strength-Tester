var pass = document.getElementById("password");
var msg = document.getElementById("message");
var strength = document.getElementById("strength");
var emoji = document.getElementById("emoji");
var arrow = document.querySelector("button[type='submit']");

arrow.addEventListener("click", function() {
    if (pass.value.length === 0) {
        alert("Tip💡: Add UPPERCASE, lowercase, symbols, and numbers for more secure passwords.");
    } else if (pass.value.length < 4) {
        alert("🙅🏻‍♀ Password seems to be weak. Try a more secure password.");
    } else if (pass.value.length >= 6 && pass.value.length < 12) {
        alert("📈 Password seems to be medium. Update it to be more secure.");
    } else if (pass.value.length >= 12) {
        alert("✅ Password is strong and secure!");
    }
});

pass.addEventListener("input", () => {
    if (pass.value.length > 0) {
        msg.style.display = "block";
    } else {
        msg.style.display = "none";
    }

    if (pass.value.length < 4) {
        strength.innerHTML = "Weak";
        emoji.innerHTML = "😟";
        pass.style.borderColor = "#ff5925";
        msg.style.color = "#ff5925";
    } else if (pass.value.length >= 6 && pass.value.length < 12) {
        strength.innerHTML = "Medium";
        emoji.innerHTML = "😐";
        pass.style.borderColor = "yellow";
        msg.style.color = "yellow";
    } else if (pass.value.length >= 12) {
        strength.innerHTML = "Strong";
        emoji.innerHTML = "😎";
        pass.style.borderColor = "#26d730";
        msg.style.color = "#26d730";
    }
});