function armarFecha(mes,anio) {

	if (mes > 9) {

		return mes + '/' + anio
	}
	return '0' + mes + '/' + anio 
}


