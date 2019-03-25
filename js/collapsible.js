/* collapsibile - expanding for information text */
var vcollapsible = document.getElementsByClassName("collapsible");
var cnt;

for (cnt = 0; cnt < vcollapsible.length; cnt++) {
    vcollapsible[cnt].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}
