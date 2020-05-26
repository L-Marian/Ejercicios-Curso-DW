
function duplicarNumeros(numeros) {
	const nuevosNumeros = []
	for (let i = 0; i < numeros.length; i++) {
	numeros[i] = numeros[i] * 2
	nuevosNumeros.push(numeros[i])
	}
	return nuevosNumeros
}

function multiplicar(numeros) {
	let resultado = 1
	for(let i = 0; i < numeros.length; i++) {
		resultado = (resultado * numeros[i])
	}
	return resultado
}

function calcularPromedio(numeros) {
	let suma = 0
	for(let i = 0; i < numeros.length; i++) {
		suma = suma + numeros[i]
	}
	promedio = suma / numeros.length
	return promedio
}

console.log(duplicarNumeros([1,2,3]))   
console.log(multiplicar([1, 2, 3]))
console.log(calcularPromedio([2,10,9]))