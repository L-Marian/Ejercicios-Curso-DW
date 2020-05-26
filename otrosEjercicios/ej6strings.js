function contarEspacios(texto) {
		let espacios = 0
		for (i = 0; i < texto.length; i++) {
			if (texto[i] === ' ') {
			espacios += 1
			}
		}

	return espacios
}

console.log(contarEspacios('estoy muy pero muy frustrada'))

function buscarTweets (listaTweets,palabraBuscada) {
	let resultadoBusqueda = []
	for( i = 0; i < listaTweets.length; i++) {
		if (listaTweets[i].includes(palabraBuscada)) {
			resultadoBusqueda.push(listaDeTweets[i])
		}
	}
	return resultadoBusqueda
}

const listaDeTweets = ['no seas trolo man','trust no bitch', 'hola bitch']
const palabra = 'no'

console.log(buscarTweets(listaDeTweets,palabra))

function buscarTweets (listaTweets,palabraBuscada) {
	let cantidadAciertos = 0
	for( i = 0; i < listaTweets.length; i++) {
		if (listaTweets[i].includes(palabraBuscada)) {
			cantidadAciertos += 1
		}
	}
	return cantidadAciertos
}

const Tweets = ['no seas trolo man','trust no bitch', 'hola bitch']
const vocablo = 'no'

console.log(buscarTweets(Tweets,vocablo))