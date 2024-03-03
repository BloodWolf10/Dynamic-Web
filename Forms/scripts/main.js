// Form validation

function validateForm() {
  //cache form elements/controls
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  const age = document.getElementById("age").value;
  const gender = document.querySelector('input[name="gender"]:checked');
  const country = document.getElementById("country").value;

  // Reset error
  document.querySelectorAll('.error').forEach(function (error) {
     error.textContent = '';
  });
  const spanValue = document.getElementsByClassName('error');
  spanValue.textContent= '';


  let isValid = true;

  // Validate username
  if (!username) {
    document.getElementById("usernameError").textContent =
      "Username is required";
    isValid = false;
  }

  // Validate email
  if (!email) {
    document.getElementById("emailError").textContent = "Email is required";
    isValid = false;
  } else if (!isValidEmail(email)) {
    document.getElementById("email").textContent =
      "Invalid email format needs an @ and .com";
    isValid = false;
  }

  // Validate password
  if (!password) {
    document.getElementById("passwordError").textContent =
      "Password is required";
    isValid = false;
  } else if (password.length < 8) {
    document.getElementById("passwordError").textContent =
      "Password must be at least 8 charaters long";
    isValid = false;
  }

  // Validate confirm password
  if (password !== confirmPassword) {
    document.getElementById("confirmPasswordError").textContent =
      "Passwords do not match";
    isValid = false;
  }

  // Validate age
  if (!age) {
    document.getElementById("ageError").textContent = "Age is required";
    isValid = false;
  } else if (isNaN(age) && age <= 0) {
    document.getElementById("ageError").textContent =
      "Age must be a valid number";
    isValid = false;
  }

  // Validate gender
  if (!gender) {
    alert("Please select a gender");
    document.getElementById("genderError").textContent =
      "Please select a gender";
    isValid = false;
  }

  // Validate country
  if (!country) {
    document.getElementById("countryError").textContent =
      "Please select a country";
    isValid = false;
  }

  if (isValid) {
    //Display form data in a prompt
    const registrationInfo = `Username: ${username} \nEmail: ${email} \nAge: ${age} \nGender: ${gender.value} \nCountry: ${country}`;
    alert("Registration Successful! Details Entered: \n\n" + registrationInfo);
  }

  return isValid;
}

// Email validation
function isValidEmail(email) {
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  return emailRegex.test(email);
}
