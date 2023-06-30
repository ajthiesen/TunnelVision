// Listen for scroll events
window.addEventListener("scroll", function () {
  // Calculate the position of the paragraph relative to the viewport
  var paragraph = document.getElementById("your-paragraph-id");
  var rect = paragraph.getBoundingClientRect();
  var top = rect.top;
  var bottom = rect.bottom;

  // Update the CSS properties to achieve the "tunnel vision" effect
  // Adjust the code below based on your desired visual effect
  var tunnelElement = document.getElementById("your-tunnel-element-id");
  tunnelElement.style.top = top + "px";
  tunnelElement.style.height = bottom - top + "px";
});
