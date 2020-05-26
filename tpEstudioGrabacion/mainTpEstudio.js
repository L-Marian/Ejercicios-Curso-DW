const VALOR_HORA = 100

function obtenerDeudores (clientes) {

	const deudores = []

	for(let i = 0; i < clientes.length; i++) {

		const cliente = clientes[i]

		let duracionSesionesxCliente = 0

		for (let j = 0; j < cliente.sesiones.length; j++) {

			const sesion = cliente.sesiones[j] 

			duracionSesionesxCliente += sesion.duracion
		}
		const gastadoDeCliente = duracionSesionesxCliente * VALOR_HORA  /* hasta aca lo q gasto cada cliente, estoy dentro de CADA CLIENTE*/

		let pagadoxCliente = 0

		for (j = 0; j < cliente.registroDePagos.length; j++) {

			const pago = cliente.registroDePagos[j]

			pagadoxCliente += pago.monto
		}
 
		const deudaDeCliente = gastadoDeCliente - pagadoxCliente   /*hasta aca lo adeudado por cliente, dentro de CADA CLIENTE*/

		if (deudaDeCliente > 0) {					/* dentro de CADA CLIENTE, comparo gastado y cobrado*/

			deudores.push({
				nombre: cliente.nombreBanda,
				telefono: cliente.telefono,
				deuda: deudaDeCliente,
			})
		}

	}

	return deudores         /* retorna LISTA de deudores que armo iterando CADA CLIENTE y agregandolo*/
}

function obtenerMejoresClientes(clientes) {
	const mejoresClientes = []

	for (let i = 0; i < clientes.length; i++) {

		const cliente = clientes[i]

		let horasDeCliente = 0

		for(let j = 0; j < cliente.sesiones.length; j++) {

			 const sesion = cliente.sesiones[j]

			 horasDeCliente += sesion.duracion
		}

		const gastoTotalCliente = horasDeCliente * VALOR_HORA
		
		mejoresClientes.push({
			nombre: cliente.nombreBanda,
			montoGastado: gastoTotalCliente,
		})													/*hasta aca anduvo, rever video .sort*/ 
	}
	
	function compararClientes(a,b) {
		return b.montoGastado - a.montoGastado
	}
	
	const mejoresOrdenados = mejoresClientes.sort(compararClientes)    

	
	const cincoMejoresClientes = mejoresOrdenados.slice(0,4)


	return cincoMejoresClientes
}

// function armarFecha(mes,anio) {

// 	if (mes > 9) {

// 		return mes + '/' + anio
// 	}
// 	return '0' + mes + '/' + anio 
// }

function obtenerTotalFacturado(clientes, mes, anio) {	
 
	let totalFacturacion = 0
	
	for (let i = 0; i < clientes.length; i++) {
		
		const cliente = clientes[i]
	
		for (let j = 0; j < cliente.registroDePagos.length; j++) {

			const pago = cliente.registroDePagos[j]

			if (pago.fecha.includes(armarFecha)) {       /*ACA ME MARCA ERROR*/

			totalFacturacion += pago.monto
			}
		}
	}
	return totalFacturacion
}

function obtenerProyeccionSemanal (clientes, mes, anio) {

	let horasAcumuladas = 0

	for (let i = 0; i < clientes.length; i++) {

		const cliente = clientes[i]

		for (let j = 0; j < cliente.sesiones.length; j++) {

			const sesion = cliente.sesiones[j]

			if (sesion.fecha.includes(armarFecha(mes,anio)))

				horasAcumuladas += sesion.duracion
		}
	}
	const promedioSemanal = horasAcumuladas / 4

	return promedioSemanal
}