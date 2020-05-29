function obtenerDisponiblePorISBN (libros,dato) {

	let librosxISBN = []

	for(let i = 0; i < libros.length; i++) {
		
		const libro = libros[i]
		
		if (libro.ISBN == dato) {

			librosxISBN.push(libro)
		}

	}
	if (librosxISBN.length > 0) {


		let nroEjemplares = 0

		for(let i = 0; i < librosxISBN.length; i++) { 

			const libroDuplicado = librosxISBN[i]

			const fechaDevolucion = obtenerUltimoPrestamo(libroDuplicado)
			
			if (fechaDevolucion !== '') {

			nroEjemplares += 1
			
			}
		}

		if (nroEjemplares > 0) {
					
			return 'Disponible: ' + nroEjemplares 
		}
			
		return 'No Disponible'
	}
	
	return 'El libro no esta en libreria, o el ISBN: ' + dato + ' es incorrecto.'
}

	



function obtenerDisponiblesPorAutor (libros,autor) {

	const disponiblesPorAutor = []

	for(let i = 0; i < libros.length; i++) {

		const libro = libros[i]

		if (libro.autor.includes(autor)) { 

			const fechaDevolucion = obtenerUltimoPrestamo(libro)

			if(fechaDevolucion !== '') {
			
				disponiblesPorAutor.push(
					{
					ISBN: libro.ISBN,
					titulo: libro.titulo,
					editorial: libro.editorial,
					anio: libro.anio,
					devuelto: fechaDevolucion          /* esto es un agregado mio para testear function*/
					}
				)
			}
		}
	}
	if (disponiblesPorAutor.length > 0) {
		
		return disponiblesPorAutor
	}

	return 'No se encontraron libros disponibles del autor requerido.'
}


function obtenerLibrosMasPrestados (libros) {

	const librosPrestados = []

	for (let i = 0; i < libros.length; i++) {

		const libro = libros[i]

		let cantidadPrestamos = 0

		for(let j = 0; j < libro.prestamos.length; j++) {

			const prestamos = libro.prestamos[j]

			if (prestamos.fechaDevolucion !== '') {

				cantidadPrestamos += 1
			}
		}

		if (cantidadPrestamos > 0) {

			librosPrestados.push(
				{
				ISBN: libro.ISBN,
				titulo: libro.titulo,
				autor: libro.autor,
				editorial: libro.editorial,
				anio: libro.anio,
				prestamos: cantidadPrestamos,
				}
			)
		}
	}
	librosPrestados.sort(ordenarLibros)
	
	return los10MasPrestados = librosPrestados.slice(0,10)
}
