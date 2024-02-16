const openBtn = document.querySelector('.open');
const closeBtn = document.querySelector('.close');
const modal = document.getElementById('modal');

openBtn.addEventListener('click', () => {
    modal.style.display = 'flex'; // Display the modal when the button is clicked
    modal.classList.add('modal')
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none'; // Hide the modal when the close button is clicked
});
