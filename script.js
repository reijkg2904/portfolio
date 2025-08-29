
const sections = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
    if (entry.isIntersecting) {
        entry.target.classList.add('visible');
    }
    });
}, {
    threshold: 0.1
});

sections.forEach(section => {
    observer.observe(section);
});



// Contact Form Submission

document.getElementById('contact-form').addEventListener('submit', function(e){
e.preventDefault();
const form = this;
const formData = new FormData(form);

fetch('https://script.google.com/macros/s/AKfycbzIE1MsrIoT2ecGRKlODsuIxuadFyA9pO5FWqhdsRoH8RfvQ9Qe9BoLdDX8e6jEyKjvkg/exec', {
    method: 'POST',
    body: formData
})
.then(response => response.text())
.then(() => {
    alert('Thank you for your message! I will get back to you soon.');
    form.reset();
})
    .catch(error => alert('Error: ' + error));
});

