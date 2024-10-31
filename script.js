document.addEventListener('DOMContentLoaded', function () {
    const diyas = document.querySelectorAll('.diya');
    diyas.forEach((diya, index) => {
        diya.style.opacity = 0; // Start with diyas hidden
        setTimeout(() => {
            diya.style.opacity = 1; // Fade in effect
        }, index * 500);
    });
});
