var acc = document.getElementsByClassName("accordion");

for (var i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    // Toggle active class
    this.classList.toggle("active");

    // Toggle panel visibility
    var panel = this.nextElementSibling;
    panel.style.display = (panel.style.display === "block") ? "none" : "block";

    // Toggle arrow direction
    var icon = this.querySelector(".icon");
    icon.textContent = (icon.textContent === "▶") ? "▼" : "▶";
  });
}