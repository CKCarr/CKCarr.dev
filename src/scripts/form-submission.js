document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();
    // Simulate form submission here for better user experience
    fetch('https://formspree.io/f/xrgngdlq', {
      method: 'POST',
      body: new FormData(e.target),
    })
    .then(response => {
      if (response.ok) {
        alert("Thank you for your submission!");
        window.location.href = "/";
      } else {
        alert("Oops! There was a problem with your submission.");
      }
    });
});
