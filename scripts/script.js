document.addEventListener("DOMContentLoaded", function () {
    // Wait until the full HTML document has loaded before running this code

    // Read more and Read less buttons
    const readMoreButtons = document.querySelectorAll(".read-more"); // Select all "Read More" buttons
    const readLessButtons = document.querySelectorAll(".read-less"); // Select all "Read Less" buttons

    // Loop through each "Read More" button and add a click event listener
    readMoreButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const section = button.closest(".issue-text"); // Find the closest parent with class "issue-text"
            const moreText = section.querySelector(".more-text"); // Find the associated .more-text inside this section
            moreText.classList.add("expanded"); // Add the "expanded" class to show the extra content
            button.style.display = "none"; // Hide the "Read More" button once clicked
        });
    });

    // Loop through each "Read Less" button and add a click event listener
    readLessButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const section = button.closest(".issue-text"); // Find the closest parent with class "issue-text"
            const moreText = section.querySelector(".more-text"); // Find the associated .more-text inside this section
            moreText.classList.remove("expanded"); // Remove the "expanded" class to collapse the extra content
            section.querySelector(".read-more").style.display = "inline-block"; // Show the "Read More" button again
        });
    });

    // Hamburger Menu Toggle for mobile navigation
    const hamburger = document.getElementById("hamburger"); // Get the hamburger menu button by its ID
    const navMenu = document.getElementById("navMenu"); // Get the navigation menu container by its ID

    if (hamburger && navMenu) {
        // When hamburger is clicked, toggle the visibility of the nav menu
        hamburger.addEventListener("click", () => {
            navMenu.classList.toggle("active");
        });
    }
});
