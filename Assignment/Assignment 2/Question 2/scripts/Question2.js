$(document).ready(function () {
  // Initialize form validation
  $("#checkoutForm").validate({
    rules: {
      billingName: {
        required: true,
      },
      billingEmail: {
        required: true,
        email: true
      },
      billingAddress: {
        required: true,
      },
      billingCity: {
        required: true,
      },
      billingState: {
        required: true,
      },
      billingPostalCode: {
        required: true,
      },
      billingCountry: {
        required: true,
      },
      paymentMethod: {
        required: true,
      },
      cardNumber: {
        required: true,
      },
      expiryDate: {
        required: true,
      },
      shippingName: {
        required: true,
      },
      shippingAddress: {
        required: true,
      },
      shippingCity: {
        required: true,
      },
      shippingState: {
        required: true,
      },
      shippingPostalCode: {
        required: true,
      },
      shippingCountry: {
        required: true,
      },
    },
    messages: {
      billingName: "Please enter your name",
      billingEmail: {
        required: "Please enter your email",
        email: "Please enter a valid email address"
      },
      billingAddress: "Please enter your address",
      billingCity: "Please enter your city",
      billingState: "Please enter your state/province",
      billingPostalCode: "Please enter your postal code",
      billingCountry: "Please select your country",
      paymentMethod: "Please select a payment method",
      cardNumber: "Please enter a valid card number",
      expiryDate: "Please enter a valid expiration date",
      email: {
        required: "Please enter your email",
        email: "Please enter a valid email address"
      }
    },
    submitHandler: function (form) {
      // Handle the form submission here
      alert('Form submitted successfully!');
      return false; // Prevent the default form submission
    }
  });

  // Toggle Card Information based on selected Payment Method
  $("input[name='paymentMethod']").change(function () {
    if ($(this).val() === 'paypal') {
      $("#cardInfo, #cardNumber, #expiryDate ").addClass("blurred");
      $("#cardNumber").prop("disabled", true); // Disable the card number input
      $("#expiryDate").prop("disabled", true); 
      
    } else {
      $("#cardInfo, #expiryDate, #cardNumber").removeClass("blurred");
      $("#cardNumber").prop("disabled", false); // Enable the card number input
      $("#expiryDate").prop("disabled", false); // Enable the expiration data
    }
  });

  // Toggle Shipping Information based on Same as Billing checkbox
  $("#sameAsBilling").change(function () {
    if ($(this).prop("checked")) {
      $("#shippingInfo").addClass("hidden");
    } else {
      $("#shippingInfo").removeClass("hidden");
    }
  });
});