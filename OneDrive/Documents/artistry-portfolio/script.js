// Dynamic Gallery Loader
const gallery = document.getElementById('image-gallery');
const totalImages = 24;

for (let i = 1; i <= totalImages; i++) {
  const galleryItem = document.createElement('div');
  galleryItem.className = 'gallery-item';
  galleryItem.innerHTML = `<img src="images/classic-art-${i}.jpg" alt="Classic Artwork ${i}">`;
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
  alert('Message sent! I\'ll respond soon.');
  e.target.reset();
});

// Lightbox
const lightbox = document.getElementById('lightbox');
const lightboxContent = document.getElementById('lightbox-content');
const close = document.querySelector('.close');

document.querySelectorAll('.lightbox-img').forEach(img => {
  img.addEventListener('click', () => {
    lightbox.style.display = 'block';
    lightboxContent.src = img.src;
  });
});

close.addEventListener('click', () => {
  lightbox.style.display = 'none';
});

lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = 'none';
  }
});
