window.addEventListener("scroll", function() {
    let header = this.document.getElementById("header");

    let stickyDiv = this.document.getElementById("sticky");
 
    if (this.window.scrollY > stickyDiv.offsetTop) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});