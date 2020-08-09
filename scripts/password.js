class Password
{
	constructor() {}

	setLength(lengthPassword)
	{
		this.length = lengthPassword;
	}

	getLength()
	{
		return this.length;
	}

	getPassword()
	{
		return this.password;
	}

	getState()
	{
		return this.state;
	}

	generatePassword()
	{
		function generateRandom(min, max)
		{
			min = Math.ceil(min);
			max = Math.floor(max);
			return Math.floor(Math.random() * (1 + max - min) + min);
		}

		for (let i = 0; i < this.length; i++)
		{
			let option = generateRandom(1,3);

			if (option === 1)
			{
				this.password += String.fromCharCode(generateRandom(65,90)); //A-Z
			}

			else if (option === 2)
			{
				this.password += String.fromCharCode(generateRandom(97,122)); //a-z
			}

			else if (option === 3)
			{
				this.password += String.fromCharCode(generateRandom(48,57)); //0-9
			}

		}
	
		this.password = this.password.replace("undefined", "");
	}

	validatePassword()
	{
		let uppercase = 0;
		let lowercase = 0;
		let number = 0;

		for (let i = 0; i < this.length; i++)
		{
			if (this.password[i].charCodeAt() >= 65 && this.password[i].charCodeAt() <= 90)
			{
				uppercase += 1;
			}

			else if (this.password[i].charCodeAt() >= 97 && this.password[i].charCodeAt() <= 122)
			{
				lowercase += 1;
			}

			else if (this.password[i].charCodeAt() >= 48 && this.password[i].charCodeAt() <= 57)
			{
				number += 1;
			}
		}
		
		if (uppercase >= 2 && lowercase >= 1 && number >= 5)
		{
			this.state =  "SEGURA";
		}
		
		else
		{
			this.state =  "SEGURA";
		}
		
	}
}
