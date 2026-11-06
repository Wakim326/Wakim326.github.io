const menuButton = document.querySelector(".menu-button");
const navLinks = document.querySelector(".nav-links");

// Mobile navigation menu
menuButton.addEventListener("click", () => {
navLinks.classList.toggle("active");    
});

// Close mobile menu when a link is clicked
document.querySelectorAll(".nav-links a").forEach(link => {


link.addEventListener("click", () => {
    navLinks.classList.remove("active");
});

});

// ========================================
// SECTION ENTER / EXIT ANIMATION
// ========================================

const revealElements = document.querySelectorAll(
    ".section-title, .about-content, .skill-card, .project-card, .contact-content"
);

const revealObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                // Entering the section
                entry.target.classList.add("reveal-visible");

            } else {

                // Leaving the section
                entry.target.classList.remove("reveal-visible");

            }

        });

    },
    {
        threshold: 0.15
    }
);


revealElements.forEach(element => {

    element.classList.add("reveal");

    revealObserver.observe(element);

});
// ========================================
// RANDOM TWINKLING STARS
// ========================================

const starContainer = document.createElement("div");
starContainer.classList.add("star-container");

document.body.prepend(starContainer);

const numberOfStars = 80;

for (let i = 0; i < numberOfStars; i++) {

    const star = document.createElement("span");

    star.classList.add("star");

    // Random position
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;

    // Random size
    const size = Math.random() * 2 + 1;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;

    // Random animation timing
    star.style.animationDelay = `${Math.random() * 5}s`;
    star.style.animationDuration =
        `${Math.random() * 3 + 2}s`;

    starContainer.appendChild(star);
}
function downloadResume() {
    const link = document.createElement("a");

    link.setAttribute("href", "./Resume.pdf");
    link.setAttribute("download", "Resume.pdf");

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}