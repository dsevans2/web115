window.addEventListener('DOMContentLoaded', function() {
  // Retrieve the form element
  var form = document.getElementById('myForm');

  // Add event listener to handle form submission
  form.addEventListener('submit', function(event) {
      // Prevent the form from submitting
      event.preventDefault();

      // Retrieve the input field value
      var inputField = document.getElementById('inputField').value;

      // Regular expression pattern for alphanumeric input
      var alphanumericPattern = /^[a-z0-9]+$/;

      // Check if the input value matches the pattern
      if (alphanumericPattern.test(inputField)) {
          // Valid input: display confirmation and (simulate) submit the form
          alert('Input is valid. Form has been submitted.');
          // Here, you would typically submit the form. For example:
          // form.submit();
          // Since the server is not set up to handle submissions, we show an alert instead.
      } else {
          // Invalid input: display error message
          alert('Error: Input must be alphanumeric (A-Z or 0-9).');
      }
  });
});
    // JavaScript code for form validation
	// Prevent form from submitting

      // Retrieve the input field value

      // Regular expression pattern for alphanumeric input

      // Check if the input value matches the pattern

        // Valid input: display confirmation and submit the form

        // Invalid input: display error message