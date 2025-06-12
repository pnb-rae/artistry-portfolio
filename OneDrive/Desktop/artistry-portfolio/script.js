// Dynamic Gallery Loader
const gallery = document.getElementById('image-gallery');
const totalImages = 12; // Adjust based on your actual images

for (let i = 1; i <= totalImages; i++) {
    const galleryItem = document.createElement('div');
    galleryItem.className = 'gallery-item';
    galleryItem.innerHTML = `
        <img src="images/ferri-style-${i}.jpg" alt="Artwork ${i} in Ferri's style">
        <div class="art-title">Classic Study ${i}</div>
    `;
    gallery.appendChild(galleryItem);
}

// Tab Navigation
document.querySelectorAll('nav a:not(.social-icon a)').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        
        document.querySelectorAll('section').forEach(section => {
            section.classList.remove('active');
        });
        
        document.querySelector(targetId).classList.add('active');
    });
});

// Contact Form Submission
document.getElementById('contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Commission request sent! I\'ll contact you soon.');
    e.target.reset();
});