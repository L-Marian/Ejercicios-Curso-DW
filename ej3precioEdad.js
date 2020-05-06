// function calcularPrecioTotal(precioUnitario,cantUnidades,costoEnvio) {
// 	const calcularPrecioTotal = precioUnitario * cantUnidades + costoEnvio
// 	return calcularPrecioTotal
// }
	
// const totalFactura = calcularPrecioTotal (10,40,150)
// console.log(totalFactura)



function dejarPasar(edad) {
	const esMayor = edad >= 18
	return esMayor
}

const edad = [15,25,50]
console.log(dejarPasar(edad[1]))