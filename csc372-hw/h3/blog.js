const images = document.querySelectorAll('.dish-img');
const descBox = document.getElementById('dish-description');
const dishName = document.getElementById('dish-name');
const dishInfo = document.getElementById('dish-info');
const dishPrice = document.getElementById('dish-price');
const dishCredit = document.getElementById('dish-credit');

images.forEach(img => {
    img.addEventListener('click', () => {
        // Remove active from all
        images.forEach(i => i.classList.remove('active'));
        // Add to clicked
        img.classList.add('active');

        // Fill in description
        dishName.textContent = img.dataset.name;
        dishInfo.textContent = img.dataset.desc;
        dishPrice.textContent = img.dataset.price;
        dishCredit.textContent = img.dataset.credit;
        descBox.style.display = 'block';
    });
});

const tatesImages = document.querySelectorAll('.tates-img');
const tatesBox = document.getElementById('tates-description');
const tatesName = document.getElementById('tates-name');
const tatesInfo = document.getElementById('tates-info');
const tatesPrice = document.getElementById('tates-price');
const tatesCredit = document.getElementById('tates-credit');

tatesImages.forEach(img => {
    img.addEventListener('click', () => {
        tatesImages.forEach(i => i.classList.remove('active')); // remove highlight
        img.classList.add('active'); // highlight selected

        // Fill in the info box
        tatesName.textContent = img.dataset.name;
        tatesInfo.textContent = img.dataset.desc;
        tatesPrice.textContent = img.dataset.price;
        tatesCredit.textContent = img.dataset.credit;
        tatesBox.style.display = 'block';
    });
});

const mexicanImages = document.querySelectorAll('.mexican-img');
const mexicanBox = document.getElementById('mexican-description');
const mexicanName = document.getElementById('mexican-name');
const mexicanInfo = document.getElementById('mexican-info');
const mexicanPrice = document.getElementById('mexican-price');
const mexicanCredit = document.getElementById('mexican-credit');

mexicanImages.forEach(img =>{
    img.addEventListener('click', ()=>{
        mexicanImages.forEach(i => i.classList.remove('active'));
        img.classList.add('active');
        mexicanName.textContent = img.dataset.name;
        mexicanInfo.textContent = img.dataset.desc;
        mexicanPrice.textContent = img.dataset.price;
        mexicanCredit.textContent = img.dataset.credit;
        mexicanBox.style.display = 'block';
    })
})