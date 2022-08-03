(function () {
  emailjs.init("dWgwfT7lNtveSBNgz");
})();

window.onload = function () {
  document
    .getElementById("modal-body")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      this.contact_number.value = (Math.random() * 100000) | 0;
      emailjs.sendForm("contact_service", "contact_form", this).then(
        function () {
          console.log("SUCCESS!");
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );
    });
};
