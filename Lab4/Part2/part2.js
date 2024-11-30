const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');
const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

//array of image filenames
const images = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];

// alternative text for each image
const altTexts = {
'pic1.jpg': 'Human Eye',
'pic2.jpg': 'Some Kind Of landscape',
'pic3.jpg': 'Purple and white Flower',
'pic4.jpg': 'Egyptian Art',
'pic5.jpg': 'A Moth',
};

// Looping through images 
images.forEach((image) => {
const newImage = document.createElement('img');

newImage.setAttribute('src', `images/${image}`);
newImage.setAttribute('alt', altTexts[image]);
thumbBar.appendChild(newImage);

  // Adding click event listener to display the clicked image
newImage.addEventListener('click', () => {
    displayedImage.setAttribute('src', `images/${image}`);
    displayedImage.setAttribute('alt', altTexts[image]);
});
});

// Darken/Lighten
btn.addEventListener('click', () => {
if (btn.getAttribute('class') === 'dark') {
    btn.setAttribute('class', 'light');
    btn.textContent = 'Lighten';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
} else {
    btn.setAttribute('class', 'dark');
    btn.textContent = 'Darken';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0)';
}
});