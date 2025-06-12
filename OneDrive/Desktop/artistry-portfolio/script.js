// Dynamic Gallery Loader
const gallery = document.getElementById('image-gallery');
const totalImages = 20; // Update with your image count

for (let i = 1; i <= totalImages; i++) {
    const galleryItem = document.createElement('div');
    galleryItem.className = 'gallery-item';
    galleryItem.innerHTML = `<img src="images/artwork-${i}.jpg" alt="Artwork ${i}">`;
    gallery.appendChild(galleryItem);
}

// Tab Navigation
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        
        // Hide all sections
        document.querySelectorAll('section').forEach(section => {
            section.classList.remove('active');
        });
        
        // Show target section
        document.querySelector(targetId).classList.add('active');
    });
});

// Contact Form Submission
document.getElementById('contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Message sent! (This is a demo. Use Formspree for real functionality.)');
    e.target.reset();
});