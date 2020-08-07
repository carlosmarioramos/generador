const main = () =>
{
	let passwordLength = document.getElementById('password-length').value;

	let myPassword = new Password();
	
	myPassword.setLength(passwordLength);
	myPassword.generatePassword();
	myPassword.validatePassword();


	let passwordValue = document.getElementById('password-value').innerText = myPassword.getPassword();
	let stateValue = document.getElementById('state-value').innerText = myPassword.getState();
}