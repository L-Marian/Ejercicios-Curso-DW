const listaLibros = [
		
	{
		ISBN: '1100770033004450',
		titulo: 'Sociedad secreta',
		autor: 'Juan Perez',
		editorial: 'Milenio',
		anio: 2020,
		prestamos: [
			{
				fechaPrestamo: '01/04/2019',
				fechaDevolucion: '21/04/2019',
			},
			{
				fechaPrestamo: '22/09/2019',
				fechaDevolucion: '30/09/2019',
			},
			{
				fechaPrestamo:'16/03/2020' ,
				fechaDevolucion: '',
			},
		],
	},
	{
		ISBN: '1100220033004460',
		titulo: 'De nuevo lunes',
		autor: 'Juan Perez',
		editorial: 'Milenio',
		anio: 2020,
		prestamos: [
			{
				fechaPrestamo: '01/05/2019',
				fechaDevolucion: '21/05/2019',
			},
			{
				fechaPrestamo: '22/11/2019',
				fechaDevolucion: '30/11/2019',
			},
			{
				fechaPrestamo:'10/02/2020' ,
				fechaDevolucion: '27/02/2020',
			},
			{
				fechaPrestamo: '17/05/2020',
				fechaDevolucion: '20/05/2020',
			},
		],
	},
	{
		ISBN: '1100220833004471',
		titulo: '25 de Mayo',
		autor: 'San Martin',
		editorial: 'Haciendo Historia',
		anio: 2008,
		prestamos: [
			{
				fechaPrestamo: '01/04/2019',
				fechaDevolucion: '21/04/2019',
			},
			{
				fechaPrestamo: '22/10/2019',
				fechaDevolucion: '30/10/2019',
			},
			{
				fechaPrestamo:'16/05/2020' ,
				fechaDevolucion: '24/05/2020',
			},
		],
	},
	{
		ISBN: '1180220033004489',
		titulo: 'Polvoriento',
		autor: 'Maria Bello',
		editorial: 'Para vos',
		anio: 2015,
		prestamos: [
			{
				fechaPrestamo: '14/01/2019',
				fechaDevolucion: '27/01/2019',
			},
			{
				fechaPrestamo: '29/11/2019',
				fechaDevolucion: '10/01/2020',
			},
			{
				fechaPrestamo:'16/03/2020' ,
				fechaDevolucion: '09/04/2020',
			},
			{
				fechaPrestamo:'16/05/2020' ,
				fechaDevolucion: '',
			},
		],
	},
	{
		ISBN: '1100220033007489',
		titulo: 'Agarrate Catalina',
		autor: 'Maria Bello',
		editorial: 'Pirulo',
		anio: 2011,
		prestamos: [
			{
				fechaPrestamo: '14/01/2018',
				fechaDevolucion: '27/01/2018',
			},
			{
				fechaPrestamo: '14/06/2018',
				fechaDevolucion: '27/06/2018',
			},
			{
				fechaPrestamo: '19/07/2019',
				fechaDevolucion: '21/08/2019',
			},
			{
				fechaPrestamo:'16/03/2020' ,
				fechaDevolucion: '09/04/2020',
			},
			{
				fechaPrestamo:'16/05/2020' ,
				fechaDevolucion: '23/05/2020',
			},
		],
	},
	{
		ISBN: '1100220032227482',
		titulo: 'Seamos libres',
		autor: 'San Martin',
		editorial: 'Hagamos historia',
		anio: 2015,
		prestamos: [
			{
				fechaPrestamo: '14/01/2018',
				fechaDevolucion: '27/01/2018',
			},
			{
				fechaPrestamo: '14/06/2018',
				fechaDevolucion: '27/06/2018',
			},
			{
				fechaPrestamo: '19/07/2019',
				fechaDevolucion: '21/08/2019',
			},
			{
				fechaPrestamo:'16/03/2020' ,
				fechaDevolucion: '09/04/2020',
			},
			{
				fechaPrestamo:'16/05/2020' ,
				fechaDevolucion: '',
			},
		],
	},
	{
		ISBN: '1144220033007483',
		titulo: 'El perro',
		autor: 'Maria Bello',
		editorial: 'Pirulo',
		anio: 2010,
		prestamos: [
			{
				fechaPrestamo: '14/01/2018',
				fechaDevolucion: '27/01/2018',
			},
			{
				fechaPrestamo: '14/06/2018',
				fechaDevolucion: '27/06/2018',
			},
			{
				fechaPrestamo: '19/07/2019',
				fechaDevolucion: '21/08/2019',
			},
			{
				fechaPrestamo:'16/02/2020' ,
				fechaDevolucion: '09/03/2020',
			},
			{
				fechaPrestamo:'16/03/2020' ,
				fechaDevolucion: '09/04/2020',
			},
			{
				fechaPrestamo:'16/05/2020' ,
				fechaDevolucion: '',
			},
		],
	},
	{
		ISBN: '1100220073004404',
		titulo: 'De enero a enero',
		autor: 'Juan Perez',
		editorial: 'Milenio',
		anio: 2017,
		prestamos: [
			{
				fechaPrestamo: '01/09/2019',
				fechaDevolucion: '21/09/2019',
			},
			{
				fechaPrestamo: '22/12/2019',
				fechaDevolucion: '03/01/2020',
			},
			{
				fechaPrestamo:'16/03/2020' ,
				fechaDevolucion: '09/04/2020',
			},
			{
				fechaPrestamo:'17/05/2020' ,
				fechaDevolucion: '',
			},
		],
	},
	{
		ISBN: '1105220073504400',
		titulo: 'Estamos de acuerdo',
		autor: 'Helena Rey',
		editorial: 'Aniversario',
		anio: 2014,
		prestamos: [			
			{
				fechaPrestamo:'16/03/2020' ,
				fechaDevolucion: '09/04/2020',
			},
			{
				fechaPrestamo:'17/05/2020' ,
				fechaDevolucion: '26/05/2020',
			},
		],
	},
	{
		ISBN: '1105224073064400',
		titulo: 'La tarea',
		autor: 'Irina Lopez',
		editorial: 'Aniversario',
		anio: 2014,
		prestamos: [			
			{
				fechaPrestamo:'16/03/2019' ,
				fechaDevolucion: '09/04/2019',
			},
			{
				fechaPrestamo:'17/05/2019' ,
				fechaDevolucion: '26/05/2019',
			},
			{
				fechaPrestamo:'16/03/2020' ,
				fechaDevolucion: '09/04/2020',
			},
			{
				fechaPrestamo:'17/05/2020' ,
				fechaDevolucion: '',
			},
		],
	},
	{
		ISBN: '1300220033087405',
		titulo: 'Dias festivos',
		autor: 'Maria Bello',
		editorial: 'Milenio',
		anio: 2019,
		prestamos: [
			{
				fechaPrestamo:'16/05/2020' ,
				fechaDevolucion: '26/05/2020',
			},
		],
	},
	{
		ISBN: '1105224073079900',
		titulo: 'Alguna vez',
		autor: 'Irina Lopez',
		editorial: 'Pirulo',
		anio: 2019,
		prestamos: [			
			{
				fechaPrestamo:'16/03/2020' ,
				fechaDevolucion: '09/04/2020',
			},
			{
				fechaPrestamo:'17/05/2020' ,
				fechaDevolucion: '26/05/2020',
			},
		],
	},
	{
		ISBN: '1105224073079900',
		titulo: 'Alguna vez',
		autor: 'Irina Lopez',
		editorial: 'Pirulo',
		anio: 2019,
		prestamos: [			
			{
				fechaPrestamo:'16/03/2020' ,
				fechaDevolucion: '09/04/2020',
			},
			{
				fechaPrestamo:'17/05/2020' ,
				fechaDevolucion: '20/05/2020',
			},
		],
	},
	{
		ISBN: '1105224073079900',
		titulo: 'Alguna vez',
		autor: 'Irina Lopez',
		editorial: 'Pirulo',
		anio: 2019,
		prestamos: [			
			{
				fechaPrestamo:'16/03/2020' ,
				fechaDevolucion: '09/04/2020',
			},
			{
				fechaPrestamo:'17/05/2020' ,
				fechaDevolucion: '',
			},
		],
	},
]


console.log(listaLibros) /*control lista objetos*/

console.log(obtenerDisponiblePorISBN(listaLibros,1105224073079900)) 
console.log(obtenerDisponiblePorISBN(listaLibros,1105224073064400)) 
console.log(obtenerDisponiblePorISBN(listaLibros,1100220033007489)) 
console.log(obtenerDisponiblePorISBN(listaLibros,3030303030303010))




// const disponiblesDeAutor = obtenerDisponiblesPorAutor(listaLibros,'Bello')  /*utilice .includes() case sensitive*/
// console.log(disponiblesDeAutor)

// const elTopTenDePrestamos = obtenerLibrosMasPrestados(listaLibros)
// console.log(elTopTenDePrestamos)