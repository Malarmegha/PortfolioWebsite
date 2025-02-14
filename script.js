document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent page refresh
    alert('Form Submitted!');
});
if (document.getElementById('name').value === '' || document.getElementById('email').value === '') {
    alert('Please fill out all fields.');
} else {
    alert('Form Submitted!');
}
// Get the form element by ID
const form = document.getElementById('contact-form');

// Add event listener for the form submission
form.addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent the form from refreshing the page
    
    // Get the values of the form fields
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    // Check if the form fields are filled
    if (name === '' || email === '') {
        alert('Please fill out all fields.');
    } else {
        alert('Form Submitted!\nName: ' + name + '\nEmail: ' + email);
    }
});
