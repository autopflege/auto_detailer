let cursor = document.querySelector('.hex_cursor');
let hexContainer = document.querySelector('.hex_container');
let isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

if (isMobile) {
    // Automatic running and bouncing effect with random direction change for mobile screens
    let containerRect = hexContainer.getClientRects();

    let x = Math.random() * window.innerWidth;
    let y = Math.random() * window.innerHeight;
    let directionX = 1; // Initial direction along the X-axis
    let directionY = 1; // Initial direction along the Y-axis
    const speedX = 2; // Speed of movement along the X-axis
    const speedY = 2; // Speed of movement along the Y-axis

    function moveCursor() {
        // Calculate new position
        x += directionX * speedX;
        y += directionY * speedY;
        
        containerRect = hexContainer.getClientRects();

        // Bounce off the screen edges
        if (x >= hexContainer.innerWidth - cursor.offsetWidth || x <= 0) {
            directionX *= -1; // Reverse X direction
        }
        if (y >= hexContainer.innerHeight - cursor.offsetHeight || y <= 0) {
            directionY *= -1; // Reverse Y direction
        }

        // Randomly change direction
        if (Math.random() < 0.02) { // 2% chance each frame to change direction
            directionX = Math.random() > 0.5 ? 1 : -1;
            directionY = Math.random() > 0.5 ? 1 : -1;
        }

        // Update cursor position
        cursor.style.top = y + "px";
        cursor.style.left = x + "px";

        // Repeat the movement
        requestAnimationFrame(moveCursor);
    }

    // Start the movement
    moveCursor();
} else {
    // Desktop behavior
    document.addEventListener("mousemove", (e) => {
        let x = e.pageX;
        let y = e.pageY;

        cursor.style.top = y + "px";
        cursor.style.bottom = -y + "px";
        cursor.style.left = x + "px";
        cursor.style.right = -x + "px";
        cursor.style.display = "block";
    });

    // Cursor effects when mouseout
    document.addEventListener("mouseout", () => {
        cursor.style.display = "none";
    });
}
