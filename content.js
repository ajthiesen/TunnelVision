// Listen for scroll and selection events
window.addEventListener("scroll", handleScroll);
document.addEventListener("selectionchange", handleSelection);

// Function to handle scroll events
function handleScroll() {
  // Check if a paragraph is selected
  if (selectedParagraph) {
    applyTunnelVision(selectedParagraph);
  }
}

// Function to handle selection events
function handleSelection() {
  var selection = window.getSelection();
  var selectedText = selection.toString().trim();

  // Check if any text is selected
  if (selectedText !== "") {
    // Check if the selection is within a paragraph
    var paragraph = selection.anchorNode.parentNode;
    if (paragraph.nodeName === "P") {
      selectedParagraph = paragraph;
      applyTunnelVision(selectedParagraph);
    }
  } else {
    // If no text is selected, reset the selectedParagraph variable
    selectedParagraph = null;
    removeTunnelVision();
  }
}

// Function to apply the tunnel vision effect to a selected paragraph
function applyTunnelVision(paragraph) {
  // Clear any existing tunnel vision elements
  removeTunnelVision();

  // Apply the vignette effect
  document.body.style.overflow = "hidden";
  document.body.style.filter = "blur(5px) grayscale(70%)";

  // Create a new tunnel vision element
  var tunnelElement = document.createElement("div");
  tunnelElement.id = "tunnel-vision-effect";
  tunnelElement.style.position = "fixed";
  tunnelElement.style.left = "0";
  tunnelElement.style.right = "0";
  tunnelElement.style.top = "0";
  tunnelElement.style.bottom = "0";
  tunnelElement.style.background =
    "radial-gradient(ellipse at center, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7) 100%)";
  tunnelElement.style.zIndex = "9999";

  // Apply the focus effect to the selected paragraph
  paragraph.style.position = "relative";
  paragraph.style.zIndex = "99999";
  paragraph.style.filter = "none";
  paragraph.parentNode.insertBefore(tunnelElement, paragraph);
}

// Function to remove the tunnel vision effect
function removeTunnelVision() {
  var tunnelElement = document.getElementById("tunnel-vision-effect");
  if (tunnelElement) {
    var paragraph = tunnelElement.nextSibling;
    tunnelElement.parentNode.removeChild(tunnelElement);
    paragraph.style.position = "";
    paragraph.style.zIndex = "";
    paragraph.style.filter = "";
    document.body.style.overflow = "";
    document.body.style.filter = "";
  }
}
