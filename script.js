   
   
   // =============================================   Form  =================================================  //
   
   const form = document.getElementById('contact-form');
    const responseMessage = document.getElementById('response-message');

    form.addEventListener('submit', async (event) => {
      event.preventDefault();

      const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
      };

      try {
        const response = await fetch('https://script.google.com/macros/s/AKfycbzqZscPhOdk8H0GNBz23W1g8i_SFaYKoc0Gt7GHbJz7-1aXx-BOrC4qJ5rjqgmpyZEjlQ/exec', {
          method: 'POST',
          body: JSON.stringify(formData)
        });

        if (response.ok) {
          responseMessage.textContent = 'Thank you! Your message has been sent.';
          form.reset();
        } else {
          responseMessage.textContent = 'Error submitting the form. Please try again.';
        }
      } catch (error) {
        responseMessage.textContent = 'An error occurred. Please try again.';
      }
    });

    //  =========================================== Copy Script ====================================================  //

    function copyText(id) {
        const text = document.getElementById(id).innerText;
        navigator.clipboard.writeText(text)
        .then(() => alert(id.charAt(0).toUpperCase() + id.slice(1) + " copied!"))
        .catch(() => alert("Failed to copy!"));
  }