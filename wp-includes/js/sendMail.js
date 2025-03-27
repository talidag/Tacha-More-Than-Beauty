emailjs.init("LEzUnq__HTblitSAU");

// Ensure the script runs after the page has loaded
document.addEventListener("DOMContentLoaded", function () {
  // Get the submit button
  const submitButton = document.getElementById("evf-submit-165");

  // Check if the button exists
  if (submitButton) {
    // Attach the click event listener to the button
    submitButton.addEventListener("click", function (event) {
      event.preventDefault(); // Prevent form from submitting the usual way

      // Call the sendEmail function
      sendEmail(event);
    });
  } else {
    console.error("Submit button not found!");
  }
});

// The function that handles the email sending
function sendEmail(event) {
  // Collect form data
  var formData = new FormData(document.getElementById("evf-form-165"));

  // Prepare template parameters with form data
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

  // Log template parameters for debugging
  console.log("Template Parameters:", templateParams);

  // Send the email using EmailJS
  emailjs.send("service_1roegd9", "template_bsm4qoc", templateParams).then(
    function (response) {
      console.log("Email trimis cu succes:", response);
      alert("Email trimis cu succes!");
      document.getElementById("evf-form-165").reset(); // Reset the form after submission
    },
    function (error) {
      console.error("Trimiterea emailului a eșuat:", error);
      alert(
        "Trimiterea emailului a eșuat. Vă rugăm să încercați din nou. Dacă problema persistă, sunați la telefon pentru asistență."
      );
    }
  );
}
