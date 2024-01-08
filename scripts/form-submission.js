    document.querySelector('form').addEventListener('submit', function (e) {
        e.preventDefault();
        // Handle form submission here
        // You can display a custom success message or redirect to a thank-you page.
        alert("Thank you for your submission!");
        window.location.href = "/credits.html";
        });
