emailjs.init("N6lXPyiJkfnYF7y3t"); // Replace with your EmailJS user ID

console.log("TEST");

function sendEmail(event) {
  console.log("TEST222");
  event.preventDefault(); // Prevent form submission
  console.log("T33");

  // Collect form data
  var formData = new FormData(document.getElementById("evf-form-165"));
  var templateParams = {
    name: formData.get("everest_forms[form_fields][Bwrwo76lGf-13]"),
    phone: formData.get("everest_forms[form_fields][Kmhd0MUzbh-14]"),
    procedure: formData.get("everest_forms[form_fields][45TbpWb3Dw-8]"),
    date: formData.get("everest_forms[form_fields][kj03HNsCiW-6]"),
    time: formData.get("everest_forms[form_fields][g7UphcuBkK-11]"),
    additional_details: formData.get(
      "everest_forms[form_fields][8wGo0fuI31-9]"
    ),
  };

  // Send the email using EmailJS
  emailjs.send("service_1roegd9", "template_ukfggsw", templateParams).then(
    function (response) {
      alert("Email sent successfully!");
      document.getElementById("evf-form-165").reset(); // Reset the form
    },
    function (error) {
      alert("Failed to send email. Please try again.");
    }
  );
}
