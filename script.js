document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contactForm');
  const contactTable = document.getElementById('contactTable');
  const contactList = document.getElementById('contactList');

  let contactCounter = 1;

  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const nameInput = document.getElementById('name');
    const phoneInput = document.getElementById('phone');

    const name = nameInput.value;
    const phone = phoneInput.value;

    if (name && phone) {
      const row = document.createElement('tr');
      const numberCell = document.createElement('td');
      const nameCell = document.createElement('td');
      const phoneCell = document.createElement('td');

      numberCell.textContent = contactCounter++;
      nameCell.textContent = name;
      phoneCell.textContent = phone;

      row.appendChild(numberCell);
      row.appendChild(nameCell);
      row.appendChild(phoneCell);
      
      contactList.appendChild(row);

      nameInput.value = '';
      phoneInput.value = '';
    }
  });
});