function submitForm() {
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const course = document.getElementById('course').value;

  // Validation Check
  if (!name || !email || !phone || !course) { 
    alert('⚠️ Please fill all required fields (marked with *)'); 
    return; 
  }

  // Show Success Message
  document.getElementById('successMsg').style.display = 'block';
  
  // Update Button Style
  const submitBtn = document.querySelector('.btn');
  submitBtn.textContent = '✔ Registered!';
  submitBtn.style.background = '#22c55e';
}