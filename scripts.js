document.getElementById('userForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the default form submission
    // Validate the form
    if (!this.checkValidity()) {
      // If the form is invalid, trigger native HTML5 form validation UI
      this.reportValidity();
    } else {
      // If the form is valid, collect form data and display in Bootstrap card
      displayUserData(this);
      this.reset(); // Reset the form
    }
  });
  
  document.getElementById('resetBtn').addEventListener('click', function () {
    const confirmation = confirm('Are you sure you want to clear the form?');
    if (confirmation) {
      document.getElementById('userForm').reset(); // Reset the form
      document.getElementById('outputContainer').innerHTML = ''; // Clear the displayed data
    }
  });
  
  function displayUserData(form) {
    const userData = {
      fullName: `${form.elements.firstName.value} ${form.elements.lastName.value}`,
      email: form.elements.email.value,
      phone: form.elements.phone.value,
      dob: form.elements.dob.value,
      gender: form.elements.gender.value,
      address: form.elements.address.value
    };
  
    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');
  
    for (const key in userData) {
      const row = document.createElement('div');
      row.classList.add('row', 'mb-2');
  
      const labelCol = document.createElement('div');
      labelCol.classList.add('col-sm-4', 'font-weight-bold');
      labelCol.textContent = key.charAt(0).toUpperCase() + key.slice(1);
  
      const valueCol = document.createElement('div');
      valueCol.classList.add('col-sm-8');
      valueCol.textContent = userData[key];
  
      row.appendChild(labelCol);
      row.appendChild(valueCol);
      cardBody.appendChild(row);
    }
  
    const card = document.createElement('div');
    card.classList.add('card', 'mt-4');
    card.appendChild(cardBody);
  
    const outputContainer = document.getElementById('outputContainer');
    outputContainer.innerHTML = ''; // Clear previous card
    outputContainer.appendChild(card);
  }
  