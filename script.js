document.addEventListener("DOMContentLoaded", function() {
    // Get the "Skip" button element
    var skipButton = document.querySelector("[data-action='skip']");
  
    // Add click event listener
    skipButton.addEventListener("click", function() {
      // Redirect to the next page
      window.location.href = "next_page.html";
    });
  });
  