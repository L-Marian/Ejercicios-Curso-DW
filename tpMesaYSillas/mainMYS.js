window.onload = function () {

	const botonMas = document.querySelector('.mas')
	const botonMenos = document.querySelector('.menos')
	const silla1 = document.querySelector('#silla1')
	const silla2 = document.querySelector('#silla2')
	const silla3 = document.querySelector('#silla3')
	const silla4 = document.querySelector('#silla4')
	const silla5 = document.querySelector('#silla5')
	const silla6 = document.querySelector('#silla6')
	const silla7 = document.querySelector('#silla7')
	const silla8 = document.querySelector('#silla8')

	const todasLasSillas = [silla1,silla2,silla3,silla4,silla5,silla6,silla7,silla8]

	
	function hacerVisible(listaDeObjetos) {

		
		for(let i=0; i<todasLasSillas.length; i++) {

			const silla = todasLasSillas[i]

			if (silla.classList.contains("silla")) {

				silla.classList.remove('silla')

				return
			}
		}
		
	}

	function hacerInvisible(listaDeObjetos) {

		for(let i=0; i<todasLasSillas.length; i++) {

			const silla = todasLasSillas[i]

			if (!silla.classList.contains("silla")) {

				silla.classList.add('silla')

				return
			}
		}
		
	}


	botonMas.addEventListener('click',hacerVisible)
	botonMenos.addEventListener('click',hacerInvisible)

}