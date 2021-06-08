/* Init responsive nav
   ------------------------------ */
var customToggle = document.getElementById("nav-toggle");
var navigation = responsiveNav(".nav-collapse", {
  customToggle: "#nav-toggle", // Selector: Specify the ID of a custom toggle
  enableFocus: true,
  enableDropdown: true,
  openDropdown: '<span class="screen-reader-text">Open sub menu</span>',
  closeDropdown: '<span class="screen-reader-text">Close sub menu</span>',
  open: function () {
    customToggle.innerHTML = "Close menu";
  },
  close: function () {
    customToggle.innerHTML = "Open menu";
  },
  resizeMobile: function () {
    customToggle.setAttribute("aria-controls", "nav");
  },
  resizeDesktop: function () {
    customToggle.removeAttribute("aria-controls");
  }
});