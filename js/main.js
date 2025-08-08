
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
          target.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      });
    });

    document.getElementById("textForm").addEventListener("submit", function(e) {
    e.preventDefault(); // stop form from submitting normally
    
    let formData = new FormData(this);

    fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert("✅ Your message has been sent successfully!");
            document.getElementById("textForm").reset();
        } else {
            alert("❌ Error sending message. Please try again.");
            console.error(data);
        }
    })
    .catch(error => {
        alert("⚠️ Something went wrong. Please try again later.");
        console.error(error);
    });
});

   

    // Add navbar background on scroll
    window.addEventListener("scroll", function () {
      const navbar = document.querySelector(".navbar");
      if (window.scrollY > 50) {
        navbar.style.backgroundColor = "rgba(255, 255, 255, 0.95)";
      } else {
        navbar.style.backgroundColor = "rgba(255, 255, 255, 0.95)";
      }
    });

    const currentYear = new Date().getFullYear();
    document.getElementById("year").textContent = currentYear;
  