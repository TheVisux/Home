export function submitForm(event) {
  event.preventDefault(); // prevent the form from submitting normally

  // get the form data
  var formData = new FormData(event.target);
  var data = {};
  for (var pair of formData.entries()) {
    data[pair[0]] = pair[1];
  }

  // send the data to the server
  fetch('/save', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(response => response.json())
  .then(result => {
    // handle the response from the server
    console.log(result);
  })
  .catch(error => {
    // handle any errors
    console.error(error);
  });
} 