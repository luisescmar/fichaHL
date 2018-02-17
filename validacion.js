//printea el array de errores en su sitio
function generarCadenaErrores(aTexto){
	var errores = '';
	
	if (aTexto.length > 0){
		errores = '<ul>';
			for (var i = 0; i < aTexto.length; i++)
				errores += '<li>' + aTexto[i] + '</li>';
		errores += '</ul>';
	}

	getId('validacion').innerHTML = errores;
}

//debe asegurarse de que no nos pasamos de los puntos que se pueden asignar
function validarGarou(){
	var resultado = false;
	var texto = [];
	
	if (global.garou.fase.isBase()){
		validarCabecera(texto);
		validarAtributos(texto);
		validarHabilidades(texto);
		validarTrasfondos(texto);
		validarDones(texto);
		validarRenombre(texto);
		validarSobrenatural(texto);
	}else if (global.garou.fase.isGratuitos()){
		var suma = 0;
		suma += gratuitosAtributos();
		suma += gratuitosHabilidades();
		suma += gratuitosTrasfondos();
		suma += gratuitosDones();
		suma += gratuitosSobrenatural();
		validarRenombre(texto);
		
		if (suma > global.garou.fase.gratuitosMax){
			texto.push('El número de puntos gratuítos gastados (' + suma + ') supera el máximo permitido (' + global.garou.fase.gratuitosMax + ')');
		}
	}else if (global.garou.fase.isExperiencia()){
		var suma = 0;
		suma += experienciaAtributos();
		suma += experienciaHabilidades();
		//los trasfondos no se pueden subir con xp, pero no validamos para que se pueda poner cuanto se quiera
		suma += experienciaDones();
		suma += experienciaSobrenatural();
		//el renombre no se puede subir con xp, pero no validamos para que se pueda poner cuanto se quiera
		
		if (suma > global.garou.fase.experienciaMax){
			texto.push('El número de puntos experiencia gastados (' + suma + ') supera el máximo permitido (' + global.garou.fase.experienciaMax + ')');
		}
	}
	
	//ya tenemos el mensaje general, vamos a printearlo
	generarCadenaErrores(texto);
	
	return texto.length > 0;
}

function validarCabecera(aTexto){
	//validamos que tenga los datos básicos
	if (global.garou.raza == TRaza.NONE)
		aTexto.push('No hay una raza asignada');
	if (global.garou.auspicio == TAuspicio.NONE)
		aTexto.push('No hay un auspicio asignado');
	if (global.garou.tribu == TTribu.NONE)
		aTexto.push('No hay una tribu asignada');
}

function validarAtributos(aTexto){
	//validamos que estén bien asignados los tipos
	var lista = [global.garou.fisicos.tipo, global.garou.sociales.tipo, global.garou.mentales.tipo];
	lista = lista.repes();
	if (lista.length > 0)
		aTexto.push('El tipo de los atributos no puede estar repetido');

	//validamos que tenga los puntos básicos bien asignados
	if (global.garou.fisicos.tipo == TAtributo.NONE){
		aTexto.push('Los atributos físicos no tienen asignado un tipo');
	}else{
		var suma = global.garou.sumaFisicos();
		if (global.garou.fisicos.tipo.valor < suma)
			aTexto.push('Demasiados puntos asignados a los atributos físicos [max: ' + global.garou.fisicos.tipo.valor + ']');
	}
	if (global.garou.sociales.tipo == TAtributo.NONE){
		aTexto.push('Los atributos sociales no tienen asignado un tipo');
	}else{
		var suma = global.garou.sumaSociales();
		if (global.garou.sociales.tipo.valor < suma)
			aTexto.push('Demasiados puntos asignados a los atributos sociales [max: ' + global.garou.sociales.tipo.valor + ']');
	}
	if (global.garou.mentales.tipo == TAtributo.NONE){
		aTexto.push('Los atributos mentales no tienen asignado un tipo');
	}else{
		var suma = global.garou.sumaMentales();
		if (global.garou.mentales.tipo.valor < suma)
			aTexto.push('Demasiados puntos asignados a los atributos mentales [max: ' + global.garou.mentales.tipo.valor + ']');
	}
}

function validarHabilidades(aTexto){
	//validamos que estén bien asignados los tipos
	var lista = [global.garou.talentos.tipo, global.garou.tecnicas.tipo, global.garou.conocimientos.tipo];
	lista = lista.repes();
	if (lista.length > 0)
		aTexto.push('El tipo de las habilidades no puede estar repetida');
		
	//validamos que tenga los puntos básicos bien asignados
	if (global.garou.talentos.tipo == THabilidad.NONE){
		aTexto.push('Los talentos no tienen asignado un tipo');
	}else{
		var suma = global.garou.sumaTalentos();
		if (global.garou.talentos.tipo.valor < suma)
			aTexto.push('Demasiados puntos asignados a los talentos [max: ' + global.garou.talentos.tipo.valor + ']');
	}
	if (global.garou.tecnicas.tipo == THabilidad.NONE){
		aTexto.push('Las técnicas no tienen asignado un tipo');
	}else{
		var suma = global.garou.sumaTecnicas();
		if (global.garou.tecnicas.tipo.valor < suma)
			aTexto.push('Demasiados puntos asignados a las técnicas [max: ' + global.garou.tecnicas.tipo.valor + ']');
	}
	if (global.garou.conocimientos.tipo == THabilidad.NONE){
		aTexto.push('Los conocimientos no tienen asignado un tipo');
	}else{
		var suma = global.garou.sumaConocimientos();
		if (global.garou.conocimientos.tipo.valor < suma)
			aTexto.push('Demasiados puntos asignados a los conocimientos [max: ' + global.garou.conocimientos.tipo.valor + ']');
	}
}

function validarTrasfondos(aTexto){
	if (global.garou.sumaTrasfondos() > CONST.MAXTRASFONDO){
		aTexto.push('Demasiados puntos asignados a los trasfondos [max: ' + CONST.MAXTRASFONDO + ']');
	}
}

function validarDones(aTexto){
	//Dependiendo del rango
	//Se permiten 3 dones por cada rango: 1 por raza, 1 por auspicio y 1 por tribu
	if ((global.garou.rango != TRango.NONE) && (global.garou.rango != TRango.CACHORRO)){
		var lista = new Array();
		for (var i = 0; i < global.garou.dones.length; i++){
			lista.push(global.garou.dones[i].value);
		}
		lista = lista.unique();
		
		if (global.garou.raza != TRaza.NONE){		
			for (var i = 1; i <= global.garou.rango.value; i++){
				if (global.garou.numDonesCaminoRango(TCamino.RAZA, getRangoByValue(i)) > CONST.MAXDONESRANGO){
					aTexto.push('Demasiados dones de ' + global.garou.raza.name + ' de rango ' + i);
				}
			}
		}
		
		if (global.garou.auspicio != TAuspicio.NONE){
			for (var i = 1; i <= global.garou.rango.value; i++){
				if (global.garou.numDonesCaminoRango(TCamino.AUSPICIO, getRangoByValue(i)) > CONST.MAXDONESRANGO){
					aTexto.push('Demasiados dones de ' + global.garou.auspicio.name + ' de rango ' + i);
				}
			}
		}
		
		if (global.garou.tribu != TTribu.NONE){
			for (var i = 1; i <= global.garou.rango.value; i++){
				if (global.garou.numDonesCaminoRango(TCamino.TRIBU, getRangoByValue(i)) > CONST.MAXDONESRANGO){
					aTexto.push('Demasiados dones de ' + global.garou.tribu.name + ' de rango ' + i);
				}
			}
		}
	}else{
		//no puede tener ningún don
		if (global.garou.dones.length > 0){
			aTexto.push('A rango 0 no está permitido tener dones.');
		}
	}
}

function validarDonesBase(aTexto){
	//Se comprueba que tenga tantos dones como rango * 3
	if (global.garou.rango != TRango.NONE){
		var numDonesExigidos = global.garou.rango * 3;
		if (global.garou.dones.length == numDonesExigidos){
			aTexto.push('Le faltan ' + (numDonesExigidos - global.garou.dones.length) + ' dones por seleccionar.');
		}
	}
}

function validarRenombre(aTexto){
	//el renombre tiene que ser el básico
	var renombre = global.rangos.getRangoAuspicio(global.garou.auspicio, global.garou.rango);

	if (global.garou.renombre.gloria != renombre.gloria)
		aTexto.push('La puntuación de gloria no es la adecuada para rango ' + global.garou.rango.value);	
	if (global.garou.renombre.honor != renombre.honor)
		aTexto.push('La puntuación de honor no es la adecuada para rango ' + global.garou.rango.value);	
	if (global.garou.renombre.sabiduria != renombre.sabiduria)
		aTexto.push('La puntuación de sabiduría no es la adecuada para rango ' + global.garou.rango.value);
}

function validarSobrenatural(aTexto){
	//lo que queda deben ser los valores básicos
	if (global.garou.rabia != global.garou.auspicio.rabiaIni)
		aTexto.push('La rabia supera la puntuación base para ' + global.garou.auspicio.name);	
	if (global.garou.gnosis != global.garou.raza.gnosisIni)
		aTexto.push('La gnosis supera la puntuación base para ' + global.garou.raza.name);	
	if (global.garou.fuerzaVoluntad != global.garou.tribu.fVolIni)
		aTexto.push('La fuerza de voluntad supera la puntuación base para ' + global.garou.tribu.name);
}

//gratuítos
function gratuitosAtributos(){
	var gratuitos = 0;
	
	var suma = global.garou.sumaFisicos();
	var sumaOld = global.garouBase.sumaFisicos();
	gratuitos += suma - sumaOld;
	
	suma = global.garou.sumaSociales();
	sumaOld = global.garouBase.sumaSociales();
	gratuitos += suma - sumaOld;
	
	suma = global.garou.sumaMentales();
	sumaOld = global.garouBase.sumaMentales();
	gratuitos += suma - sumaOld;

	return gratuitos * CONST.GRATUITOS.ATRIB;
}

function gratuitosHabilidades(){
	var gratuitos = 0;
	
	var suma = global.garou.sumaTalentos();
	var sumaOld = global.garouBase.sumaTalentos();
	gratuitos += suma - sumaOld;
	
	suma = global.garou.sumaTecnicas();
	sumaOld = global.garouBase.sumaTecnicas();
	gratuitos += suma - sumaOld;
	
	suma = global.garou.sumaConocimientos();
	sumaOld = global.garouBase.sumaConocimientos();
	gratuitos += suma - sumaOld;

	return gratuitos * CONST.GRATUITOS.HAB;
}

function gratuitosTrasfondos(){
	var gratuitos = 0;
	
	var suma = global.garou.sumaTrasfondos();
	var sumaOld = global.garouBase.sumaTrasfondos();
	gratuitos += suma - sumaOld;
	
	return gratuitos * CONST.GRATUITOS.TRASF;
}

function gratuitosDones(){
	var gratuitos = global.garou.dones.length - global.garouBase.dones.length;
	
	return gratuitos * CONST.GRATUITOS.DON;
}

function gratuitosSobrenatural(){
	var gratuitos = 0;
	
	var puntos = global.garou.rabia - global.garouBase.rabia;
	gratuitos += puntos * CONST.GRATUITOS.RABIA;
	
	var puntos = global.garou.gnosis - global.garouBase.gnosis;
	gratuitos += puntos * CONST.GRATUITOS.GNOSIS;
	
	var puntos = global.garou.fuerzaVoluntad - global.garouBase.fuerzaVoluntad;
	gratuitos += puntos * CONST.GRATUITOS.FVOL;
	
	return gratuitos;
}

//experiencia
function experienciaAtributos(){
	var experiencia = 0;
	
	for (var i = global.garouGratuitos.fisicos.fuerza; i < global.garou.fisicos.fuerza; i++){
		experiencia += i * CONST.EXPERIENCIA.ATRIB;
	}
	for (var i = global.garouGratuitos.fisicos.destreza; i < global.garou.fisicos.destreza; i++){
		experiencia += i * CONST.EXPERIENCIA.ATRIB;
	}
	for (var i = global.garouGratuitos.fisicos.resistencia; i < global.garou.fisicos.resistencia; i++){
		experiencia += i * CONST.EXPERIENCIA.ATRIB;
	}
	
	for (var i = global.garouGratuitos.sociales.carisma; i < global.garou.sociales.carisma; i++){
		experiencia += i * CONST.EXPERIENCIA.ATRIB;
	}
	for (var i = global.garouGratuitos.sociales.manipulacion; i < global.garou.sociales.manipulacion; i++){
		experiencia += i * CONST.EXPERIENCIA.ATRIB;
	}
	for (var i = global.garouGratuitos.sociales.apariencia; i < global.garou.sociales.apariencia; i++){
		experiencia += i * CONST.EXPERIENCIA.ATRIB;
	}
	
	for (var i = global.garouGratuitos.mentales.percepcion; i < global.garou.mentales.percepcion; i++){
		experiencia += i * CONST.EXPERIENCIA.ATRIB;
	}
	for (var i = global.garouGratuitos.mentales.inteligencia; i < global.garou.mentales.inteligencia; i++){
		experiencia += i * CONST.EXPERIENCIA.ATRIB;
	}
	for (var i = global.garouGratuitos.mentales.astucia; i < global.garou.mentales.astucia; i++){
		experiencia += i * CONST.EXPERIENCIA.ATRIB;
	}

	return experiencia;
}

function experienciaHabilidades(){
	var experiencia = 0;
	
	for (var i = global.garouGratuitos.talentos.alerta; i < global.garou.talentos.alerta; i++){
		experiencia += i * CONST.EXPERIENCIA.HAB;
	}
	for (var i = global.garouGratuitos.talentos.atletismo; i < global.garou.talentos.atletismo; i++){
		experiencia += i * CONST.EXPERIENCIA.HAB;
	}
	for (var i = global.garouGratuitos.talentos.callejeo; i < global.garou.talentos.callejeo; i++){
		experiencia += i * CONST.EXPERIENCIA.HAB;
	}
	for (var i = global.garouGratuitos.talentos.empatia; i < global.garou.talentos.empatia; i++){
		experiencia += i * CONST.EXPERIENCIA.HAB;
	}
	for (var i = global.garouGratuitos.talentos.esquivar; i < global.garou.talentos.esquivar; i++){
		experiencia += i * CONST.EXPERIENCIA.HAB;
	}
	for (var i = global.garouGratuitos.talentos.expresion; i < global.garou.talentos.expresion; i++){
		experiencia += i * CONST.EXPERIENCIA.HAB;
	}
	for (var i = global.garouGratuitos.talentos.impulsoPrimario; i < global.garou.talentos.impulsoPrimario; i++){
		experiencia += i * CONST.EXPERIENCIA.HAB;
	}
	for (var i = global.garouGratuitos.talentos.intimidacion; i < global.garou.talentos.intimidacion; i++){
		experiencia += i * CONST.EXPERIENCIA.HAB;
	}
	for (var i = global.garouGratuitos.talentos.pelea; i < global.garou.talentos.pelea; i++){
		experiencia += i * CONST.EXPERIENCIA.HAB;
	}
	for (var i = global.garouGratuitos.talentos.subterfugio; i < global.garou.talentos.subterfugio; i++){
		experiencia += i * CONST.EXPERIENCIA.HAB;
	}	
	
	for (var i = global.garouGratuitos.tecnicas.armasCC; i < global.garou.tecnicas.armasCC; i++){
		experiencia += i * CONST.EXPERIENCIA.HAB;
	}
	for (var i = global.garouGratuitos.tecnicas.armasFuego; i < global.garou.tecnicas.armasFuego; i++){
		experiencia += i * CONST.EXPERIENCIA.HAB;
	}
	for (var i = global.garouGratuitos.tecnicas.conducir; i < global.garou.tecnicas.conducir; i++){
		experiencia += i * CONST.EXPERIENCIA.HAB;
	}
	for (var i = global.garouGratuitos.tecnicas.etiqueta; i < global.garou.tecnicas.etiqueta; i++){
		experiencia += i * CONST.EXPERIENCIA.HAB;
	}
	for (var i = global.garouGratuitos.tecnicas.interpretacion; i < global.garou.tecnicas.interpretacion; i++){
		experiencia += i * CONST.EXPERIENCIA.HAB;
	}
	for (var i = global.garouGratuitos.tecnicas.liderazgo; i < global.garou.tecnicas.liderazgo; i++){
		experiencia += i * CONST.EXPERIENCIA.HAB;
	}
	for (var i = global.garouGratuitos.tecnicas.reparaciones; i < global.garou.tecnicas.reparaciones; i++){
		experiencia += i * CONST.EXPERIENCIA.HAB;
	}
	for (var i = global.garouGratuitos.tecnicas.sigilo; i < global.garou.tecnicas.sigilo; i++){
		experiencia += i * CONST.EXPERIENCIA.HAB;
	}
	for (var i = global.garouGratuitos.tecnicas.supervivencia; i < global.garou.tecnicas.supervivencia; i++){
		experiencia += i * CONST.EXPERIENCIA.HAB;
	}
	for (var i = global.garouGratuitos.tecnicas.tratoAnimales; i < global.garou.tecnicas.tratoAnimales; i++){
		experiencia += i * CONST.EXPERIENCIA.HAB;
	}
	
	for (var i = global.garouGratuitos.conocimientos.ciencias; i < global.garou.conocimientos.ciencias; i++){
		experiencia += i * CONST.EXPERIENCIA.HAB;
	}
	for (var i = global.garouGratuitos.conocimientos.enigmas; i < global.garou.conocimientos.enigmas; i++){
		experiencia += i * CONST.EXPERIENCIA.HAB;
	}
	for (var i = global.garouGratuitos.conocimientos.informatica; i < global.garou.conocimientos.informatica; i++){
		experiencia += i * CONST.EXPERIENCIA.HAB;
	}
	for (var i = global.garouGratuitos.conocimientos.investigacion; i < global.garou.conocimientos.investigacion; i++){
		experiencia += i * CONST.EXPERIENCIA.HAB;
	}
	for (var i = global.garouGratuitos.conocimientos.leyes; i < global.garou.conocimientos.leyes; i++){
		experiencia += i * CONST.EXPERIENCIA.HAB;
	}
	for (var i = global.garouGratuitos.conocimientos.linguistica; i < global.garou.conocimientos.linguistica; i++){
		experiencia += i * CONST.EXPERIENCIA.HAB;
	}
	for (var i = global.garouGratuitos.conocimientos.medicina; i < global.garou.conocimientos.medicina; i++){
		experiencia += i * CONST.EXPERIENCIA.HAB;
	}
	for (var i = global.garouGratuitos.conocimientos.ocultismo; i < global.garou.conocimientos.ocultismo; i++){
		experiencia += i * CONST.EXPERIENCIA.HAB;
	}
	for (var i = global.garouGratuitos.conocimientos.politica; i < global.garou.conocimientos.politica; i++){
		experiencia += i * CONST.EXPERIENCIA.HAB;
	}
	for (var i = global.garouGratuitos.conocimientos.rituales; i < global.garou.conocimientos.rituales; i++){
		experiencia += i * CONST.EXPERIENCIA.HAB;
	}
	
	return experiencia;
}

function experienciaDones(){
	var experiencia = 0;
	
	if ((global.garou.rango != TRango.NONE) && (global.garou.rango != TRango.CACHORRO)){
		var lista = new Array();
		for (var i = 0; i < global.garou.dones.length; i++){
			//lista.push(global.garou.dones[i].value);
			lista.push(global.garou.dones[i]);
		}
		for (var i = 0; i < global.garouGratuitos.dones.length; i++){
			//lista.push(global.garouGratuitos.dones[i].value);
			lista.push(global.garou.dones[i]);
		}
		lista = lista.unique();
		
		for (var i = 0; i < lista.length; i++){
			var don = lista[i];
			
			if (don.rango != TRango.NONE){
				var costeBase = (don.rango.value > global.garou.rango.value) ? CONST.EXPERIENCIA.DONAJENO : CONST.EXPERIENCIA.DON;
				experiencia += costeBase * don.rango.value;
			}else{
				//aquí hay dos opciones porque no tenemos el rango: tomamos el rango mínimo o no lo tenemos en cuenta para la experiencia
				//por ahora no lo vamos a tener en cuenta. Si cambiaramos de opinion, con descomentar las lineas siguientes vale
				//var rango = global.dones.getMinRango(don.tipo.value);
				//var costeBase = (rango > global.garou.rango.value) ? CONST.EXPERIENCIA.DONAJENO : CONST.EXPERIENCIA.DON;
				//experiencia += costeBase * rango;
			}
		}
	}
	
	return experiencia;
}

function experienciaSobrenatural(){
	var experiencia = 0;
	
	for (var i = global.garouGratuitos.rabia; i < global.garou.rabia; i++){
		experiencia += i * CONST.EXPERIENCIA.RABIA;
	}
	
	for (var i = global.garouGratuitos.gnosis; i < global.garou.gnosis; i++){
		experiencia += i * CONST.EXPERIENCIA.GNOSIS;
	}
	
	for (var i = global.garouGratuitos.fuerzaVoluntad; i < global.garou.fuerzaVoluntad; i++){
		experiencia += i * CONST.EXPERIENCIA.FVOL;
	}
	
	return experiencia;
}
