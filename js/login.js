document.getElementById('submit-button').addEventListener('click', function () {
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    if (email === 'safayat@gmail.com' && password === 'safayat') {
        window.location.href = "bank/bank.html";
    }
    else {
        alert('invalid account')
    }
})