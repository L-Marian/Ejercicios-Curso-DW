const listaClientes = [
	{
		nombreBanda: 'xyx',
		telefono: '55555555',
		sesiones: [
			{
			fecha: '10/07/2017',
			duracion: 5,
			},
			{
			fecha: '20/11/2019',
			duracion: 4,	
			},
			{
			fecha: '20/05/2020',
			duracion: 3,	
			},
		],
		registroDePagos: [
			{
			fecha: '12/08/2017',
			monto: 500,
			},
			{
			fecha: '03/12/2019',
			monto: 400,	
			}
		],
	}, 
	{
		nombreBanda: 'xxx',
		telefono: '33333333',
		sesiones: [
			{
			fecha: '10/07/2017',
			duracion: 5,
			},
			{
			fecha: '20/11/2019',
			duracion: 1,	
			},
			{
			fecha: '20/05/2020',
			duracion: 3,	
			},
		],
		registroDePagos: [
			{
			fecha: '15/08/2017',
			monto: 500,
			},
			{
			fecha: '03/12/2019',
			monto: 400,	
			}
		],
	},
	{
		nombreBanda: 'xyy',
		telefono: '222222222',
		sesiones: [
			{
			fecha: '29/08/2017',
			duracion: 2,
			},
			{
			fecha: '20/11/2019',
			duracion: 6,	
			},
			{
			fecha: '25/05/2020',
			duracion: 2,	
			},
		],
		registroDePagos: [
			{
			fecha: '12/08/2017',
			monto: 200,
			},
			{
			fecha: '27/02/2020',
			monto: 400,	
			},
		],
	},
]
      



listaClientes.push (
	{
	nombreBanda: 'mar',
	telefono: '11111111',
	sesiones:[],
	registroDePagos:[{fecha: '20/05/2020',
			monto: 400,}]
	})     

listaClientes[3].sesiones.push({fecha: '12/05/2020',duracion: 3}, {fecha: '12/05/2020',duracion: 4})
console.log(listaClientes[3])

console.log(listaClientes)

const misDeudores = obtenerDeudores(listaClientes)
console.log(misDeudores)
const misMejoresClientes = obtenerMejoresClientes(listaClientes)
console.log(misMejoresClientes)
// aca abajo irian la declaracion de las variables que ejecutan funciones, y los console.log(variableDeclarada) para probar
const totalFacturadoPeriodo = obtenerTotalFacturado(listaClientes, 8, 2017)
console.log(totalFacturadoPeriodo)
const estimacionHsSemana = obtenerProyeccionSemanal(listaClientes, 5, 2020)
console.log(estimacionHsSemana)