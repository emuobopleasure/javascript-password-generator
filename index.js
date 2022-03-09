let getPassword = document.getElementById("password-box")



function generatePassword() {
    let passwordChars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let password =""

    for (let i = 0; i < 12; i++) {
        let randomPassword = passwordChars[Math.floor(Math.random() * passwordChars.length)]
        password += randomPassword
        getPassword.textContent = password
    }
}
