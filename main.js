// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollTop = 0;
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Mobile menu toggle
const mobileMenu = document.querySelector(".mobile-menu");
const navLinks = document.querySelector(".nav-links");

mobileMenu.addEventListener("click", () => {
  navLinks.style.display = navLinks.style.display === "flex" ? "none" : "flex";
});

// Navbar scroll effect
let lastScroll = 0;
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll <= 0) {
    navbar.style.boxShadow = "0 2px 4px rgba(0,0,0,0.1)";
    return;
  }

  if (currentScroll > lastScroll) {
    // Scrolling down
    navbar.style.transform = "translateY(-100%)";
  } else {
    // Scrolling up
    navbar.style.transform = "translateY(0)";
    navbar.style.boxShadow = "0 2px 4px rgba(0,0,0,0.1)";
  }

  lastScroll = currentScroll;
});

// Contact form handling
const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = e.target[0].value;
  const email = e.target[1].value;
  const message = e.target[2].value;
  console.log(`${name} ${email} ${message}`);

  alert("Thank you for your message! We will get back to you soon.");
  contactForm.reset();
});

// Intersection Observer for fade-in animations
const observerOptions = {
  threshold: 0.2,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

// Observe all sections
document.querySelectorAll("section").forEach((section) => {
  section.style.opacity = "0";
  section.style.transform = "translateY(20px)";
  section.style.transition = "all 0.6s ease-out";
  observer.observe(section);
});

const clients = [
  {
    name: "Technoshine Trading International",
    testimonial: `"The custom software solution increased our customer
                satisfaction by 150%."`,
    logoUrl: "./technoshine.png",
  },
  {
    name: "MSTS Signage and Advertising",
    testimonial: `"Caerus PH transformed our infrastructure, improving efficiency
                by 200%."`,
    logoUrl: "./msts.jpg",
  },
  {
    name: "Prime Physiotherapy",
    testimonial: `"Their expert IT consulting has helped us streamline operations"`,
    logoUrl: "./primephysio.jpg",
  },
];

// Function to generate the client card dynamically
function generateClientCards(clients) {
  const container = document.getElementById("clients-grid"); // Get the container element

  clients.forEach((client) => {
    // Create the client card container
    const clientCard = document.createElement("div");
    clientCard.classList.add("client-card");

    // Create the logo container
    const logoContainer = document.createElement("div");
    logoContainer.classList.add("client-logo-container");
    logoContainer.style.backgroundImage = `url(${client.logoUrl})`; // Set logo as background

    // Create the content container
    const contentContainer = document.createElement("div");
    contentContainer.classList.add("client-content");

    // Create and add the name element
    const clientName = document.createElement("h3");
    clientName.textContent = client.name;

    // Create and add the testimonial element
    const testimonial = document.createElement("p");
    testimonial.textContent = client.testimonial;

    // Append the content elements to the content container
    contentContainer.appendChild(clientName);
    contentContainer.appendChild(testimonial);

    // Append the logo container and content container to the client card
    clientCard.appendChild(logoContainer);
    clientCard.appendChild(contentContainer);

    // Append the client card to the main container
    container.appendChild(clientCard);
  });
}

// Call the function to generate the cards
generateClientCards(clients);
