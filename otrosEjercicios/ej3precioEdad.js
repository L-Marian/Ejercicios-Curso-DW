function calcularPrecioTotal(precioUnitario,cantUnidades,costoEnvio) {
	const precioUnidades = precioUnitario * cantUnidades
	const precioTotal = precioUnidades + costoEnvio
	return precioTotal
}

console.log(calcularPrecioTotal (10,200,150))

const precioUnitario = 10
const cantUnidades = 400
const costoEnvio = 150
console.log(calcularPrecioTotal (precioUnitario,cantUnidades,costoEnvio))


function dejarPasar(edad) {
	const esMayor = edad >= 18
	return esMayor
}

const edad = [15,25,50]
console.log(dejarPasar(edad[0]))