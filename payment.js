document.getElementById('rzp-button1').onclick = function (e) {
    fetch('/get-razorpay-key')
      .then(response => response.json())
      .then(data => {
        var options = {
          "key": data.key, // Use the key fetched from the server
          "amount": "50000", // Amount in paise (50000 paise = INR 500)
          "currency": "INR",
          "name": "Your Company Name",
          "description": "Test Transaction",
          "image": "https://example.com/your_logo", // Replace with your logo URL
          "handler": function (response){
              alert("Payment ID: " + response.razorpay_payment_id);
              console.log(response);
              // Optionally, send the payment ID to the server for verification
          },
          "prefill": {
              "name": "John Doe",
              "email": "john.doe@example.com",
              "contact": "9999999999"
          },
          "notes": {
              "address": "Razorpay Corporate Office"
          },
          "theme": {
              "color": "#3399cc"
          }
        };
  
        var rzp1 = new Razorpay(options);
  
        rzp1.on('payment.failed', function (response){
          alert("Payment failed: " + response.error.description);
          console.log(response);
        });
  
        rzp1.open();
      })
      .catch(error => {
        console.error('Error fetching Razorpay key:', error);
      });
  
    e.preventDefault();
  };
  