let sections=document.querySelectorAll('section');
let navlinks=document.querySelectorAll('header nav a');

window.onscroll= () =>{
  sections.forEach(sec => {
    let top=window.scrollY;
    let offset= sec.offsetTop - 150;
    let height= sec.offsetHeight;
    let id= sec.getAttribute('id');

    if(top >= offset && top < offset + height){
      navlinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a [href*=' + id + ']').classList.add('active');
      });
    };
  });
};


document.addEventListener("DOMContentLoaded", function() {
  const form = document.querySelector('.contact form');

  // Adding event listener for form submission
  form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the default form submission

    // Get the form field values
    const name = form.querySelector('input[type="text"]').value;
    const email = form.querySelector('input[type="email"]').value;
    const phone = form.querySelector('input[type="tel"]').value;
    const address = form.querySelector('textarea').value;

    // Validate the form fields to ensure none are empty
    if (!name || !email || !phone || !address) {
      alert("Please fill in all the fields before submitting.");
    } else {
      // Here you can process the form data, for example, sending it to a server
      // For now, we are just simulating form submission with an alert
      alert("Form submitted successfully!");

      // Reset the form after submission
      form.reset();
    }
  });
});

