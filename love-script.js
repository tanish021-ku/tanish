// Wait for the page to load
window.onload = function() {
    const brokenHeart = document.querySelector(".broken-heart");
    const repairedHeart = document.querySelector(".repaired-heart");
    const messageContainer = document.querySelector(".message-container");

    // Simulate the heart repairing animation
    setTimeout(() => {
        brokenHeart.style.display = "none"; // Hide broken heart
        repairedHeart.style.display = "block"; // Show repaired heart
    }, 1000); // After 1 second

    // Show the love message after the heart is repaired
    setTimeout(() => {
        messageContainer.style.display = "block"; // Show love message
    }, 2000); // After 2 seconds
};
