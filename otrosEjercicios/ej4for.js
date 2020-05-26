
function imprimirNumeros(numero) {
	for(let i = 0;i < numero;i++) {
		if (i !== 0) {
			console.log (i)
		}
	}
}

imprimirNumeros(15)


function imprimirOtrosNumeros(numeroDesde,numeroHasta) {
	if (numeroDesde < numeroHasta) {
		for(let i = numeroDesde + 1;i < numeroHasta;i++)
		console.log(i)
	} else {
		console.log('error en parametros')
	}
}
const numeroDesde = 13
const numeroHasta = 19
imprimirOtrosNumeros(numeroDesde,numeroHasta)


// se puede definir ambas funciones y abajo llamar a ambas, una detras de otra
o llamarlas varias veces
