function checkPasswordStrength() {
    const password = document.getElementById('password').value;
    const result = document.getElementById('result');
    const regexUpper = /[A-Z]/;
    const regexNumber = /\d/;
    const regexSymbol = /[!@#$%^&*(),.?":{}_|<>]/;
    let strength = 0;
    let message = '';

    // Check password length
    if (password.length >= 8) strength++;

    // Check for uppercase letter
    if (regexUpper.test(password)) strength++;

    // Check for number
    if (regexNumber.test(password)) strength++;

    // Check for special symbol
    if (regexSymbol.test(password)) strength++;

    // Determine password strength
    if (strength === 4) {
        message = 'Strong password';
    } else if (strength === 3) {
        message = 'Medium password';
    } else {
        message = 'Weak password';
    }

    result.innerHTML = message;
}
