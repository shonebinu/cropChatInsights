document.getElementById('getStarted').addEventListener('click', function() {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
});


// Get references to the container divs
const githubContainer = document.querySelector('.githubContainer');
const mailContainer = document.querySelector('.mailContainer');
const linkedinContainer = document.querySelector('.linkedinContainer');

// Add click event listeners
githubContainer.addEventListener('click', function() {
    const url = this.getAttribute('data-url');
    window.open(url, '_blank'); // Open the link in a new tab
});

mailContainer.addEventListener('click', function() {
    const url = this.getAttribute('data-url');
    window.open(url, '_blank'); // Open the link in a new tab
});

linkedinContainer.addEventListener('click', function() {
    const url = this.getAttribute('data-url');
    window.open(url, '_blank'); // Open the link in a new tab
});
