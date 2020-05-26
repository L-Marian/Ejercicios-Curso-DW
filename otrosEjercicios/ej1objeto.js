const miComidaPreferida = {
		nombre: 'asado',
		cantidadDeVecesQueComi: 20,
		cantidadDeVecesQueMeCocinaron: 19,
		listaDeIngredientes: ['carne','mollejas','chorizo','morcilla','bondiola','sal','ensalada'],
		
}


miComidaPreferida.llevaMasDeCinco = miComidaPreferida.listaDeIngredientes.length > 5
miComidaPreferida.cantidadDeVecesQueMeCocine = miComidaPreferida.cantidadDeVecesQueComi - miComidaPreferida.cantidadDeVecesQueMeCocinaron
console.log(miComidaPreferida.llevaMasDeCinco)
console.log(miComidaPreferida.cantidadDeVecesQueMeCocine)

// definicion de la funcion
cantidadDeVecesQueMeCocine = function (cantidadDeVecesQueComi,cantidadDeVecesQueMeCocinaron) {
			const cantidadDeVecesQueMeCocine = cantidadDeVecesQueComi - cantidadDeVecesQueMeCocinaron
			return cantidadDeVecesQueMeCocine
		}

// llamar a la funcion asignarle parametros, imprimir resultado en consola
console.log(cantidadDeVecesQueMeCocine(50,20))