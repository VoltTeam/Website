function invert() {
    localStorage.lightMode = localStorage.lightMode === "dark" ? "light" : "dark";
    document.getElementsByTagName("body")[0].setAttribute("mode", localStorage.lightMode === "dark" ? "light" : "dark");
}