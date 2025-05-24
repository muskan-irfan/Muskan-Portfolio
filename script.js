function toggleMenu() {
    const menu = document.querySelector('.mobile-menu');
    menu.classList.toggle('active');
}

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
        showAlert("Please fill in all fields!", "error");
        return;
    }

    // Send form data via FormSubmit
    fetch("https://formsubmit.co/muskanirfan1374@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message })
    })
    .then(response => {
        if (response.ok) {
            showAlert("Message sent successfully!", "success");
            document.getElementById("contactForm").reset();
        } else {
            showAlert("Failed to send message. Try again!", "error");
        }
    })
    .catch(() => showAlert("Error occurred. Try again!", "error"));
});

// Function to create a custom alert box
function showAlert(message, type) {
    let alertBox = document.createElement("div");
    alertBox.classList.add("custom-alert", type);
    alertBox.innerText = message;

    document.body.appendChild(alertBox);

    // Remove the alert after 3 seconds
    setTimeout(() => {
        alertBox.style.opacity = "0";
        setTimeout(() => alertBox.remove(), 300);
    }, 3000);
}

document.addEventListener("DOMContentLoaded", function () {
    // Resume Download Functionality
    document.querySelector(".resume-btn").addEventListener("click", function () {
        const resumeUrl = "resume.pdf"; 
        const link = document.createElement("a");
        link.href = resumeUrl;
        link.download = "Muskan_Resume.pdf"; 
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });

    // Scroll to Contact Section
    document.querySelector(".contact-btn").addEventListener("click", function () {
        document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
    });
});

document.querySelector(".email-btn").addEventListener("click", function () {
    window.location.href = "mailto:muskanirfan1374@gmail.com";
});
 

let recipebtn=document.querySelector(".recipe-btn");
recipebtn.addEventListener("click", function () {
    window.open('https://muskan-irfan.github.io/Recipe-Delight/', '_blank');
});

let todobtn=document.querySelector(".todo-btn");
todobtn.addEventListener("click", function () {
    window.open('https://donow.kesug.com/', '_blank');
});

let aurabtn=document.querySelector(".aura-btn");
aurabtn.addEventListener("click", function () {
    window.open('https://auraevents.kesug.com/', '_blank');
});


    const toggleBtn = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");

    toggleBtn.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });


