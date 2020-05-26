/* Funcion que recibe una lista de libros, un valor de propiedad -isbn-, devuelve disponibilidad (true/false).
Recorrer lista de objetos libro, para cada libro, verificar igualdad de parametro con valor de propiedad ISBN.
Si coincide, verificar en el ultimo prestamo, si fue devuelto.
Segun el funcionamiento del inventario armado (lista de libros) si tiene cargada una fecha de devolucion, esta disponible.
Por el contrario, si la fecha de devolucion no esta cargada, no esta disponible, aun esta prestado.
Una vez recorridos los libros de la lista, si no se encontro el ISBN solicitado, hubo error en el ISBN a buscar o no existe
libro identificado con el ISBN ingresado en el inventario de la libreria.
*/

function obtenerDisponiblePorISBN (libros,dato) {

	for(let i = 0; i < libros.length; i++) {
		
		const libro = libros[i]

		if (libro.ISBN == dato) {

			const fechaDevolucion = obtenerUltimoPrestamo(libro)

			if (fechaDevolucion !== '') {

			return 'Disponible'
 
			}
		return 'No Disponible'
		} 
	}
	return 'El libro no esta en libreria, o el ISBN: ' + dato + ' es incorrecto.'
}

/* funcion que recibe una lista de libros y un valor de parametro, en este caso autor.
Devuelve una LISTA de libros que pertenecen al autor requerido, que se encuentran disponibles para prestar.
Igual que en la funcion anterior, se recorre la lista de libros para verificar si pertenecen al autor solicitado,
por cada libro si se verifica la coincidencia entre el autor del libro y el parametro ingresado, se verifica el 
ultimo prestamo del listado de prestamos. Igual que en la funcion anterior, si en el ultimo elemento de la lista
prestamos esta cargada la fecha de devolucion, esta disponible. Por el contrario, esta prestado.
Entonces si la fecha de devolucion se encuentra cargada en el ultimo prestamo, el libro esta disponible y se agrega
a la lista de libros disponibles del autor requerido, con los datos de interes. 
Al finalizar se obtiene la lista de libros disponibles del autor parametro, o si luego de recorrer los libros no encuentra
libros del autor que ademas esten disponibles (fecha devolucion cargada), indica que no se han hallado libros
disponibles del autor solicitado. Por caracteristicas de funcion includes, la sucesion de caracteres ingresada
debe respetar mayusculas/minusculas. */


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

/* Funcion que recibe la lista de libros y devuelve una lista de los 10 libros mas prestados del inventario, en orden descendente.
Recorrer lista de libros y para cada libro constatar la cantidad de prestamos que tuvo. De acuerdo con la estructura
del inventario creado y como se carga, la cantidad de prestamos que tuvo es igual a la cantidad de elementos de la 
propiedad prestamos (lista de prestamos).
Se van agregando a una nueva lista, los libros con los datos que sean utiles y la cantidad de prestamos constatada.
Una vez obtenida la lista con todos los libros del inventario y la cantidad de prestamos de cada uno, ordenamos la 
lista en forma descendente por cantidad de prestamos.
Posteriormente copiamos los diez primeros elementos de esa lista ordenada, obteniendo el top ten de libros mas prestados.*/


function obtenerLibrosMasPrestados (libros) {

	const librosPrestados = []

	for (let i = 0; i < libros.length; i++) {

		const libro = libros[i]

		const cantidadPrestamos = libro.prestamos.length

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

