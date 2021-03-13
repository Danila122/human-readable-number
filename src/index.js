module.exports = function toReadable(x) {

	let unitsObj = {
		0: 'zero',
		1: 'one',
		2: 'two',
		3: 'three',
		4: 'four',
		5: 'five',
		6: 'six',
		7: 'seven',
		8: 'eight',
		9 : 'nine',
	}

	let tensObj = {
		10: 'ten',
		20: 'twenty',
		30: 'thirty',
		40: 'forty',
		50: 'fifty',
		60: 'sixty',
		70: 'seventy',
		80: 'eighty',
		90: 'ninety',
	}

	let tensExceptionsObj = {
		10: 'ten',
		11: 'eleven',
		12: 'twelve',
		13: 'thirteen',
		14: 'fourteen',
		15: 'fifteen',
		16: 'sixteen',
		17: 'seventeen',
		18: 'eighteen',
		19: 'nineteen',
	}

	let hundredsObj = {
		100: 'one hundred',
		200: 'two hundred',
		300: 'three hundred',
		400: 'four hundred',
		500: 'five hundred',
		600: 'six hundred',
		700: 'seven hundred',
		800: 'eight hundred',
		900: 'nine hundred',
	}

	let n = x

	function hundreds(n) {
		return Number(`${Math.floor(x / 100)}00`)
	}

	function tens(n) {
		
			
		return Number(`${Math.floor((n - hundreds(n)) / 10)}0`)
	}

	function units(n) {
		
		let x = Number(`${Math.floor((n - (tens(n) + hundreds(n))))}`) 

		return x 
	}

	
	if (n < 10) {
		
		return	unitsObj[units(n)]
	}
	

	if (n < 20 && n > 9){
		return	 tensExceptionsObj[n]
	}
	

	if (n > 19 && n < 100) {
		
		if(n.toString().split('')[1] == 0){
		
			return `${tensObj[tens(n)]}`
		}
		return `${tensObj[tens(n)]} ${unitsObj[units(n)]}` 
	}
	
	if (n => 100 && n < 1000) {
		
		if(n.toString().split('')[1]==0 && n.toString().split('')[2] > 0){
				
			return `${hundredsObj[hundreds(n)]} ${unitsObj[units(n)]}`	
		}
		
		if(n.toString().split('')[2]==0 && n.toString().split('')[1]>0){
			
			return `${hundredsObj[hundreds(n)]} ${tensObj[tens(n)]}`	
		}
	
		if(n.toString().split('')[1]==0 && n.toString().split('')[2]==0){
			
			return `${hundredsObj[hundreds(n)]}`	
		}
		
		if(n.toString().split('')[1]==1){
			
			let arr = n.toString().split('').slice(1, 3).join('')
			 
			return `${hundredsObj[hundreds(n)]} ${tensExceptionsObj[arr]}`	
		}

		return `${hundredsObj[hundreds(n)]} ${tensObj[tens(n)]} ${unitsObj[units(n)]}`
	}

	
	
}