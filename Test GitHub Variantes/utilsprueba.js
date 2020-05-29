function ordenarLibros (a,b) {
	
	return b.prestamos - a.prestamos
}

function obtenerUltimoPrestamo (libro) {

	const ultimoPrestamo = libro.prestamos[libro.prestamos.length - 1]

	const fDevolucion = ultimoPrestamo.fechaDevolucion

	if (fDevolucion !== '') {

		return fDevolucion
	}
	return ''
}
