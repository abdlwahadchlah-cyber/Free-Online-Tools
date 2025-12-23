<script>
document.addEventListener("DOMContentLoaded", function () {

  const textInput = document.getElementById("textInput");
  const result = document.getElementById("result");

  if (!textInput || !result) {
    alert("JS error: elements not found");
    return;
  }

  window.countWords = function () {
    const words = textInput.value.trim().split(/\s+/).filter(Boolean);
    result.innerText = "Words: " + words.length;
  };

  window.countChars = function () {
    result.innerText = "Characters: " + textInput.value.length;
  };

  window.reverseText = function () {
    result.innerText = textInput.value.split("").reverse().join("");
  };

  window.removeSpaces = function () {
    result.innerText = textInput.value.replace(/\s+/g, " ").trim();
  };

  window.toUpper = function () {
    result.innerText = textInput.value.toUpperCase();
  };

  window.toLower = function () {
    result.innerText = textInput.value.toLowerCase();
  };

  window.generatePassword = function () {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
    let password = "";
    for (let i = 0; i < 12; i++) {
      password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    result.innerText = "Generated Password: " + password;
  };

});
</script>


