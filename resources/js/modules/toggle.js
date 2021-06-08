/* Toggle
   ------------------------------ */
   
var toggleSnippet = function (elem) {
    elem.classList.toggle('is-visible');
};

document.addEventListener('click', function (event) {
    if (!event.target.classList.contains('toggle')) return;
    // Prevent default link behavior
    event.preventDefault();
    var content = document.querySelector(event.target.hash);
    if (!content) return;
    toggleSnippet(content);
}, false);