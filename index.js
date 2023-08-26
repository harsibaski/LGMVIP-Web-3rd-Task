document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("registrationForm");
  const submittedData = document.getElementById("submittedData");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const fullName = form.fullName.value;
    const email = form.email.value;
    const password = form.password.value;

    const userData = `
      <h3>Submitted Data</h3>
      <p><strong>Full Name:</strong> ${fullName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Password:</strong> ${password}</p>
    `;

    submittedData.innerHTML = userData;
    form.reset();
  });
});
