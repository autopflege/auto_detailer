let cursor = document.querySelector('.hex_cursor');

document.addEventListener("mousemove", (e) => {
    let x = e.pageX;
    let y = e.pageY;

    cursor.style.top = y + "px";
    cursor.style.bottom = -y + "px";
    cursor.style.left = x + "px";
    cursor.style.right = -x + "px";
    cursor.style.display = "block";
});

//cursor effects when mouseout
document.addEventListener("mouseout", () => {
    cursor.style.display = "none";
});