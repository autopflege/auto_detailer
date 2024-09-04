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


cursor.addEventListener("animationend", changePosition, true);

    function changePosition(event) {
      let circle = event.target;

      circle.style.animationName = "none";
      
      requestAnimationFrame(() => {
        circle.style.animationName = "";
      });

      let circleStyle = getComputedStyle(circle);
      let finalX = circleStyle.getPropertyValue("--xB");
      let finalY = circleStyle.getPropertyValue("--yB");

      circle.style.setProperty("--xA", finalX);
      circle.style.setProperty("--yA", finalY);

      circle.style.setProperty("--xB", getRandomNumber(-100, 600) + "px");
      circle.style.setProperty("--yB", getRandomNumber(-100, 600) + "px");

      console.log(circle);
    }

    function getRandomNumber(low, high) {
      let r = Math.floor(Math.random() * (high - low + 1)) + low;
      return r;
    }