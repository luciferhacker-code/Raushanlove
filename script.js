// Login form functionality
document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Hardcoded credentials (customize as needed)
    if (username === 'raushan' && password === 'iloveyou') {
        // Hide login and show home page
        navigateTo('home-page');
    } else {
        alert('Incorrect username or password');
    }
});

// Navigation function to switch between pages
function navigateTo(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.classList.add('hidden');
        page.classList.remove('active');
    });
    document.getElementById(pageId).classList.remove('hidden');
    document.getElementById(pageId).classList.add('active');
}
