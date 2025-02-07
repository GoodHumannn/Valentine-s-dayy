document.getElementById('revealBtn').addEventListener('click', function() {
    document.getElementById('message').classList.remove('hidden');
    document.getElementById('backgroundMusic').play(); // Start playing music
});

document.getElementById('acceptBtn').addEventListener('click', function() {
    alert('Yay! Can’t wait to celebrate together, Devanshi! ❤️');
});

document.getElementById('declineBtn').addEventListener('click', function() {
    // Make the "Yes!" button grow
    const yesButton = document.getElementById('acceptBtn');
    let currentScale = parseFloat(yesButton.style.transform.replace('scale(', '').replace(')', '')) || 1;
    yesButton.style.transform = `scale(${currentScale + 0.2})`; // Increase size

    // Optional: Disable after a certain number of clicks if you want to limit it
    this.dataset.clicks = (parseInt(this.dataset.clicks) || 0) + 1;
});
