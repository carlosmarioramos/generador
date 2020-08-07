const validateForm = () =>
{
	let passwordLength = document.getElementById('password-length').value;

	if (passwordLength === "" || passwordLength === 0)
	{
		alert("Ingrese una longitud de caracteres");
		return false;
	}

	else
	{
		main();
		return false;
	}
}