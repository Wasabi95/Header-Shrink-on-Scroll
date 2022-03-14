// When the user scrolls down 50px from the top of the document, resize the header's font size
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
    document.getElementById("header").style = "color: white; font-size: 30px";
  } else {
    document.getElementById("header").style.fontSize = "90px";
    document.getElementById("header").style.color = "green";
  }
}
