function stars() {
    let e = document.createElement("div");
    e.setAttribute("class", "star");
    document.body.appendChild(e);
    e.style.left = Math.random() * +innerWidth + "px";
  
    let size = Math.random() * 12;
    let duration = Math.random() * 3;
  
    e.style.fontSize = 5 + "px";
    e.style.animationDuration = 5 + duration + "s";
    setTimeout(function () {
      document.body.removeChild(e);
    }, 5000);
  }
  
  setInterval(function () {
    stars();
  }, 200);
  