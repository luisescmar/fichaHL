function RandomElement(aElemento, aPeso){
	this.elemento = aElemento || 0;
	//Con peso igual salen equiprobables. Con peso 0 no tienen probabilidades de salir
	this.peso = (typeof aPeso == 'undefined') ? 4: aPeso;
	
	this.getArrayPeso = function(){
		var resultado = new Array();
		
		for (var i = 0; i < this.peso; i++)
			resultado.push(this.elemento);
		
		return resultado;
	}
	
	//Dobla el peso del elemento. Si es cero se pone en el base que es 4.
	this.doblarPeso = function(){
		if (this.peso != 0){
			this.peso = this.peso * 2;
		}else{
			this.peso = 4;
		}
	}
	
	//Divide el peso del elemento. Si es 1 se pone en cero.
	this.dividirPeso = function(){
		if (this.peso != 1){
			this.peso = this.peso / 2;
		}else{
			this.peso = 0;
		}
	}
	
	//Deja el peso a cero
	this.eliminarPeso = function(){
		this.peso = 0;
	}
	
	//Pone el peso al base
	this.pesoBase = function(){
		this.peso = 4;
	}
}

function RandomElementList(){
	this.getArrayOpciones = function(){
		var resultado = new Array;
		
		for (var i = 0; i < this.length; i++){
			resultado = resultado.concat(this[i].getArrayPeso());
		}
		
		return resultado;
	}
	
	this.getNumElementosConPeso = function(){
		var resultado = 0;		
		for (var i = 0; i < this.length; i++)
			if (this[i].peso != 0)
				resultado++;
		
		return resultado;
	}
	
	this.getElement = function(aElement){
		var resultado = null;
		
		for (var i = 0; i < this.length; i++)
			if (this[i].element == aElement)
				resultado = this[i];
		
		return resultado;
	}
}
RandomElementList.prototype = new Array();

/***********************Aleatorio Cargado***********************/
//recibe un RandomElementList
function cargado(aElements){
	var resultado = 0;
	
	if (aElements.length > 0){
		var opciones = aElements.getArrayOpciones();
		var index = aleatorio(0, opciones.length - 1);
		resultado = opciones[index];
	}else{
		throw new Error("No hay opciones para generar el cargado");
	}
	
	return resultado;
}

//recibe un RandomElementList
function cargadoSinRepetir(aElements, aCantidad){
	var resultado = new Array();	

	if ((aCantidad > 0) && (aElements.length > 0)){
		if (aCantidad <= aElements.length){
			while (resultado.length < aCantidad){
				var rndm = cargado(aElements);
				if (resultado.indexOf(rndm) == -1)
					resultado.push(rndm);
			}
		}else{
			throw new Error("1. Se piden más elementos (" + aCantidad + ") que opciones sin repetir (" + aElements.length + ")");
		}
	}else{
		throw new Error("Malos parámetros para cargadoSinRepetir");
	}
	
	return resultado;
}

//recibe un RandomElementList
function repartirPuntosCargado(aPuntos, aElements, aMin, aMax){
	var resultado = new Array();

	if ((aPuntos > 0) && (aElements.length > 0) && (aMin >= 0) && (aMax > 0) && (aMin < aMax)){
		if (aPuntos > (aElements.length * aMin)){
			for (var i = 0; i < aElements.length; i++){
				resultado[i] = aMin;
			}
			var aPuntos = aPuntos - (aMin * aElements.length);
			
			for (var i = 0; i < aPuntos; i++){
				var rndm = cargado(aElements);
				if ((resultado[rndm] + 1) <= aMax){
					resultado[rndm] = resultado[rndm] + 1;
				}else{
					i--;
				}
			}
		}else{
			throw new Error("No hay puntos suficientes para llegar al mínimo");
		}
	}else{
		throw new Error("Malos parámetros para repartirPuntosCargado");
	}
	
	return resultado;
}

/*********************Completamente Aleatorio*********************/
function aleatorio(aMin, aMax) {
	var resultado = 0;
	
	if (aMin < aMax)
		resultado = Math.floor(Math.random() * (aMax - aMin + 1)) + aMin;
	else
		throw new Error("Malos parámetros para aleatorio: " + aMin + ":" + aMax);
		
	return resultado;
}

function aleatorioSinRepetir(aCantidad, aMin, aMax){
	var resultado = new Array();
	
	if ((aCantidad > 0) && (aMin < aMax)){
		if (aCantidad <= (aMax - aMin)){
			while (resultado.length < aCantidad){
				var rndm = aleatorio(aMin, aMax);
				if (resultado.indexOf(rndm) == -1)
					resultado.push(rndm);
			}
		}else{
			throw new Error("2. Se piden más elementos (" + aCantidad + ") que opciones sin repetir (" + (aMax - aMin) + ")");
		}
	}else{
		throw new Error("Malos parámetros para aleatorioSinRepetir");
	}
	
	return resultado;
}

function repartirPuntosAleatorio(aPuntos, aCantidad, aMin, aMax){
	var resultado = new Array();

	if ((aPuntos > 0) && (aCantidad > 0) && (aMin >= 0) && (aMax > 0) && (aMin < aMax)){
		if (aPuntos > (aCantidad * aMin)){
			for (var i = 0; i < aCantidad; i++){
				resultado[i] = aMin;
			}
			var aPuntos = aPuntos - (aMin * aCantidad);
			
			for (var i = 0; i < aPuntos; i++){
				var rndm = aleatorio(0, aCantidad - 1);
				if ((resultado[rndm] + 1) <= aMax){
					resultado[rndm] = resultado[rndm] + 1;
				}else{
					i--;
				}
			}
		}else{
			throw new Error("No hay puntos suficientes para llegar al mínimo");
		}
	}else{
		throw new Error("Malos parámetros para repartirPuntosAleatorio");
	}
	
	return resultado;
}

/*******************Generación Aleatoria Base*******************/
//genera un RandomElementList para atributo. De aMin a aMax
function generaRandomElementList(aMin, aMax){
	var resultado = new RandomElementList();
	
	for (var i = aMin; i <= aMax; i++){
		resultado.push(new RandomElement(i));
	}
	
	return resultado;
}

//genera un garou aleatorio por completo
function generacionAleatoriaTotal(){
	global.garou = new Garou();
	
	//genera las listas de randomElements base
	global.random.listaAtributos = generaRandomElementList(1, 3);	
	global.random.listaFisicos = generaRandomElementList(0, 2);
	global.random.listaSociales = generaRandomElementList(0, 2);
	global.random.listaMentales = generaRandomElementList(0, 2);
	global.random.listaHabilidades = generaRandomElementList(1, 3);
	global.random.listaTalentos = generaRandomElementList(0, 9);
	global.random.listaTecnicas = generaRandomElementList(0, 9);
	global.random.listaConocimientos = generaRandomElementList(0, 9);
	global.random.listaTrasfondos = generaRandomElementList(0, 9);

	generacionAleatoria(global.random.listaAtributos, global.random.listaFisicos, global.random.listaSociales, global.random.listaMentales, global.random.listaHabilidades, global.random.listaTalentos, global.random.listaTecnicas, global.random.listaConocimientos, global.random.listaTrasfondos);
}

//generación aleatoria parcial, según los valores de global.random
function generacionAleatoriaParcial(){
	//genera las listas de randomElements base
	global.random.listaAtributos = generaRandomElementList(1, 3);
	global.random.listaFisicos = generaRandomElementList(0, 2);
	global.random.listaSociales = generaRandomElementList(0, 2);
	global.random.listaMentales = generaRandomElementList(0, 2);
	global.random.listaHabilidades = generaRandomElementList(1, 3);
	global.random.listaTalentos = generaRandomElementList(0, 9);
	global.random.listaTecnicas = generaRandomElementList(0, 9);
	global.random.listaConocimientos = generaRandomElementList(0, 9);
	global.random.listaTrasfondos = generaRandomElementList(0, 9);

	switch (global.garou.raza.value){
		case TRaza.HOMINIDO.value:
			generacionAleatoriaHominido();
			break;
		case TRaza.METIS.value:
			generacionAleatoriaMetis();
			break;
		case TRaza.LUPUS.value:
			generacionAleatoriaLupus();
			break;
	}
	
	switch (global.garou.auspicio.value){
		case TAuspicio.RAGABASH.value:
			generacionAleatoriaRagabash();
			break;
		case TAuspicio.THEURGE.value:
			generacionAleatoriaTheurge();
			break;
		case TAuspicio.PHILODOX.value:
			generacionAleatoriaPhilodox();
			break;
		case TAuspicio.GALLIARD.value:
			generacionAleatoriaGalliard();
			break;
		case TAuspicio.AHROUN.value:
			generacionAleatoriaAhroun();
			break;
	}
	
	generacionAleatoria(global.random.listaAtributos, global.random.listaFisicos, global.random.listaSociales, global.random.listaMentales, global.random.listaHabilidades, global.random.listaTalentos, global.random.listaTecnicas, global.random.listaConocimientos, global.random.listaTrasfondos);
}

//se genera aleatoriamente un hominido
function generacionAleatoriaHominido(){
	//No tiene ningún tema especial el ser homínido
}

//se genera aleatoriamente un metis
function generacionAleatoriaMetis(){
	//No tiene ningún tema especial el ser metis
}

//se genera aleatoriamente un lupus
function generacionAleatoriaLupus(){
	if (global.random.rango == TRango.CACHORRO){
		//Los lupus tienen vetadas ciertas habilidades en rango 0
		global.random.listaTalentos[2].eliminarPeso();
		global.random.listaTecnicas[0].eliminarPeso();
		global.random.listaTecnicas[1].eliminarPeso();
		global.random.listaTecnicas[2].eliminarPeso();
		global.random.listaTecnicas[3].eliminarPeso();
		global.random.listaTecnicas[6].eliminarPeso();
		global.random.listaConocimientos[0].eliminarPeso();
		global.random.listaConocimientos[2].eliminarPeso();
		global.random.listaConocimientos[3].eliminarPeso();
		global.random.listaConocimientos[4].eliminarPeso();
		global.random.listaConocimientos[5].eliminarPeso();
		global.random.listaConocimientos[6].eliminarPeso();
		global.random.listaConocimientos[8].eliminarPeso();
	}else if (global.random.rango == TRango.CLIATH){
		//Los lupus tienen limitadas ciertas habilidades en rango 1
		global.random.listaTalentos[2].dividirPeso();
		global.random.listaTecnicas[0].dividirPeso();
		global.random.listaTecnicas[1].dividirPeso();
		global.random.listaTecnicas[2].dividirPeso();
		global.random.listaTecnicas[3].dividirPeso();
		global.random.listaTecnicas[6].dividirPeso();
		global.random.listaConocimientos[0].dividirPeso();
		global.random.listaConocimientos[2].dividirPeso();
		global.random.listaConocimientos[3].dividirPeso();
		global.random.listaConocimientos[4].dividirPeso();
		global.random.listaConocimientos[5].dividirPeso();
		global.random.listaConocimientos[6].dividirPeso();
		global.random.listaConocimientos[8].dividirPeso();
	}
}

//se genera aleatoriamente un ragabash
function generacionAleatoriaRagabash(){
	//damos diferente peso a las habilidades
	global.random.listaTecnicas[7].doblarPeso();
}

//se genera aleatoriamente un theurge
function generacionAleatoriaTheurge(){
	//ahora limitamos la aleatoriedad
	//no queremos elegir aleatoriamente los mentales
	global.random.listaAtributos[3].eliminarPeso(); 
	global.garou.mentales.tipo = TAtributo.PRIMARIO;
	//damos diferente peso a las habilidades
	global.random.listaConocimientos[7].doblarPeso();
}

//se genera aleatoriamente un philodox
function generacionAleatoriaPhilodox(){
	//ahora limitamos la aleatoriedad
	//no queremos elegir aleatoriamente los mentales
	global.random.listaAtributos[3].eliminarPeso(); 
	global.garou.mentales.tipo = TAtributo.PRIMARIO;
	//damos diferente peso a las habilidades
	global.random.listaHabilidades[3].eliminarPeso();
	global.garou.conocimientos.tipo = THabilidad.PRIMARIA;
	//damos diferente peso a las habilidades
	global.random.listaConocimientos[4].doblarPeso();
}

//se genera aleatoriamente un galliard
function generacionAleatoriaGalliard(){
	//ahora limitamos la aleatoriedad
	//no queremos elegir aleatoriamente los sociales
	global.random.listaAtributos[2].eliminarPeso(); 
	global.garou.sociales.tipo = TAtributo.PRIMARIO;
	//damos diferente peso a las habilidades
	global.random.listaTalentos[3].doblarPeso(); 
	global.random.listaTalentos[5].doblarPeso(); 
	global.random.listaTecnicas[4].doblarPeso();
}

//se genera aleatoriamente un ahroun
function generacionAleatoriaAhroun(){
	//ahora limitamos la aleatoriedad
	//no queremos elegir aleatoriamente los físicos
	global.random.listaAtributos[0].eliminarPeso(); 
	global.garou.fisicos.tipo = TAtributo.PRIMARIO;
	//no queremos elegir aleatoriamente los tipos de las habilidades
	global.garou.talentos.tipo = THabilidad.PRIMARIA;
	global.garou.tecnicas.tipo = THabilidad.SECUNDARIA;
	global.garou.conocimientos.tipo = THabilidad.TERCIARIA;
	
	global.random.listaTalentos[0].doblarPeso();
	global.random.listaTalentos[1].doblarPeso();
	global.random.listaTalentos[4].doblarPeso();
	global.random.listaTalentos[8].doblarPeso();
		global.random.listaTalentos[8].doblarPeso();	//lo aumentamos mucho
}

/*****************Funciones para Generación Aleatoria*****************/
//comienza la generación aleatoria
function generacionAleatoria(aListaAtributos, aListaFisicos, aListaSociales, aListaMentales, aListaHabilidades, aListaTalentos, aListaTecnicas, aListaConocimientos, aListaTrasfondos){	
	generacionRangoAleatorio();
	generacionCabeceraAleatoria();
	generacionTipoAtributos(aListaAtributos);
	generacionAtributosAleatoria(aListaFisicos, aListaSociales, aListaMentales);
	generacionTipoHabilidades(aListaHabilidades);
	generacionHabilidadesAleatoria(aListaTalentos, aListaTecnicas, aListaConocimientos);
	asignarValoresRango();
	generacionTrasfondosAleatoria(aListaTrasfondos);
	generacionDonesAleatoria();
}

//Lo que no está asignado, lo calcula aleatoriamente
function generacionCabeceraAleatoria(){
	if (global.garou.raza == TRaza.NONE)
		global.garou.raza = getRazaByValue(aleatorio(1,3));
	if (global.garou.auspicio == TAuspicio.NONE)
		global.garou.auspicio = getAuspicioByValue(aleatorio(1,5));
	if (global.garou.tribu == TTribu.NONE)
		global.garou.tribu = getTribuByValue(aleatorio(1,14));
	
	if (global.garou.naturaleza == TNaturaleza.NONE)
		global.garou.naturaleza = getNaturalezaByValue(aleatorio(1,20));
	if (global.garou.conducta == TConducta.NONE)
		global.garou.conducta = getConductaByValue(aleatorio(1,20));
}

//asigna aleatoriamente el tipo de atributos a aquellos tipos de atributo que no los tengan asignado
function generacionTipoAtributos(listaAtributos){
	var listaNum = cargadoSinRepetir(listaAtributos, listaAtributos.getNumElementosConPeso());
	var i = 0;

	if (global.garou.fisicos.tipo == TAtributo.NONE){
		global.garou.fisicos.tipo = getAtributoByValue(listaNum[i]);
		i++;
	}
	if (global.garou.sociales.tipo == TAtributo.NONE){
		global.garou.sociales.tipo = getAtributoByValue(listaNum[i]);
		i++;
	}
	if (global.garou.mentales.tipo == TAtributo.NONE){
		global.garou.mentales.tipo = getAtributoByValue(listaNum[i]);
		i++;
	}
}

//Lo calcula aleatoriamente, si se quiere equiprobabilidad, solo pasar todos con pesoBase
//eso sí, las listas deben estar completas, si no se quiere un elemento, debe estar agregado con peso eliminado
function generacionAtributosAleatoria(listaFisicos, listaSociales, listaMentales){
	var puntos = repartirPuntosCargado(global.garou.fisicos.tipo.valor - global.garou.sumaFisicos() + 3, listaFisicos, 1, 5);
	global.garou.fisicos.fuerza = puntos[0];
	global.garou.fisicos.destreza = puntos[1];
	global.garou.fisicos.resistencia = puntos[2];
	
	puntos = repartirPuntosCargado(global.garou.sociales.tipo.valor - global.garou.sumaSociales() + 3, listaSociales, 1, 5);
	global.garou.sociales.carisma = puntos[0];
	global.garou.sociales.manipulacion = puntos[1];
	global.garou.sociales.apariencia = puntos[2];
	
	puntos = repartirPuntosCargado(global.garou.mentales.tipo.valor - global.garou.sumaMentales() + 3, listaMentales, 1, 5);
	global.garou.mentales.percepcion = puntos[0];
	global.garou.mentales.inteligencia = puntos[1];
	global.garou.mentales.astucia = puntos[2];
}

//asigna aleatoriamente el tipo de habilidades a aquellos tipos de habilidades que no los tengan asignado
function generacionTipoHabilidades(listaHabilidades){
	var listaNum = cargadoSinRepetir(listaHabilidades, listaHabilidades.getNumElementosConPeso());
	var i = 0;

	if (global.garou.talentos.tipo == THabilidad.NONE){
		global.garou.talentos.tipo = getHabilidadByValue(listaNum[i]);
		i++;
	}
	if (global.garou.tecnicas.tipo == THabilidad.NONE){
		global.garou.tecnicas.tipo = getHabilidadByValue(listaNum[i]);
		i++;
	}
	if (global.garou.conocimientos.tipo == THabilidad.NONE){
		global.garou.conocimientos.tipo = getHabilidadByValue(listaNum[i]);
		i++;
	}
}

//Lo calcula aleatoriamente, si se quiere equiprobabilidad, solo pasar todos con pesoBase
//eso sí, las listas deben estar completas, si no se quiere un elemento, debe estar agregado con peso eliminado
function generacionHabilidadesAleatoria(listaTalentos, listaTecnicas, listaConocimientos){
	var puntos = repartirPuntosCargado(global.garou.talentos.tipo.valor - global.garou.sumaTalentos(), listaTalentos, 0, 5);
	global.garou.talentos.alerta = puntos[0];
	global.garou.talentos.atletismo = puntos[1];
	global.garou.talentos.callejeo = puntos[2];
	global.garou.talentos.empatia = puntos[3];
	global.garou.talentos.esquivar = puntos[4];
	global.garou.talentos.expresion = puntos[5];
	global.garou.talentos.impulsoPrimario = puntos[6];
	global.garou.talentos.intimidacion = puntos[7];
	global.garou.talentos.pelea = puntos[8];
	global.garou.talentos.subterfugio = puntos[9];
	
	puntos = repartirPuntosCargado(global.garou.tecnicas.tipo.valor - global.garou.sumaTecnicas(), listaTecnicas, 0, 5);
	global.garou.tecnicas.armasCC = puntos[0];
	global.garou.tecnicas.armasFuego = puntos[1];
	global.garou.tecnicas.conducir = puntos[2];
	global.garou.tecnicas.etiqueta = puntos[3];
	global.garou.tecnicas.interpretacion = puntos[4];
	global.garou.tecnicas.liderazgo = puntos[5];
	global.garou.tecnicas.reparaciones = puntos[6];
	global.garou.tecnicas.sigilo = puntos[7];
	global.garou.tecnicas.supervivencia = puntos[8];
	global.garou.tecnicas.tratoAnimales = puntos[9];
	
	puntos = repartirPuntosCargado(global.garou.conocimientos.tipo.valor - global.garou.sumaConocimientos(), listaConocimientos, 0, 5);
	global.garou.conocimientos.ciencias = puntos[0];
	global.garou.conocimientos.enigmas = puntos[1];
	global.garou.conocimientos.informatica = puntos[2];
	global.garou.conocimientos.investigacion = puntos[3];
	global.garou.conocimientos.leyes = puntos[4];
	global.garou.conocimientos.linguistica = puntos[5];
	global.garou.conocimientos.medicina = puntos[6];
	global.garou.conocimientos.ocultismo = puntos[7];
	global.garou.conocimientos.politica = puntos[8];
	global.garou.conocimientos.rituales = puntos[9];
}

//La única elección aleatoria es el rango (si es que no se ha seleccionado ya)
function generacionRangoAleatorio(){
	if (global.random.rango == TRango.NONE){
		global.garou.rango = getRangoByValue(aleatorio(0,6));
	}else{
		global.garou.rango = global.random.rango;
	}
}

//asignación de valores iniciales según el rango (no aleatorio)
function asignarValoresRango(){
	var rangos = global.rangos.getRangoAuspicio(global.garou.auspicio, global.garou.rango);
	global.garou.renombre.gloria = rangos.gloria;
	global.garou.renombre.honor = rangos.honor;
	global.garou.renombre.sabiduria = rangos.sabiduria;		
	global.garou.rabia = global.garou.auspicio.rabiaIni;
	global.garou.gnosis = global.garou.raza.gnosisIni;
	global.garou.fuerzaVoluntad = global.garou.tribu.fVolIni;
}

//Lo calcula aleatoriamente, si se quiere equiprobabilidad, solo pasar todos con pesoBase
//eso sí, las listas deben estar completas, si no se quiere un elemento, debe estar agregado con peso eliminado
function generacionTrasfondosAleatoria(listaTrasfondos){
	var puntos = repartirPuntosCargado(CONST.MAXTRASFONDO - global.garou.sumaTrasfondos(), listaTrasfondos, 0, 5);
	
	for (var i = 0; i < puntos.length; i++){
		var trasfondo = new Trasfondo(getTrasfondoByValue(i));
			trasfondo.valor = puntos[i];
		
		global.garou.trasfondos.push(trasfondo);
	}
}

//Aleatoriedad completa, por supuesto
function generacionDonesAleatoria(){
	for (var i = 1; i <= global.garou.rango.value; i++){
		var donesRango = global.dones.donesRaza[global.garou.raza.value][i];
	
		if (donesRango.length > 0){
			var don = getDonByValue(donesRango[aleatorio(0, donesRango.length - 1)]);	
			var existe = global.garou.existeDon(don);
			var j = 0;	//contador para evitar bucles infinitos (100 pasadas máx)
			while (existe && (j < 100)){
				don = getDonByValue(donesRango[aleatorio(0, donesRango.length)]);
				existe = global.garou.existeDon(don);
				j++;
			}
			
			if (!existe){
				var aux = new Don(don, TCamino.RAZA, getRangoByValue(i));
				global.garou.dones.push(aux);
			}
		}
		
		donesRango = global.dones.donesAuspicio[global.garou.auspicio.value][i];
		
		if (donesRango.length > 0){
			var don = getDonByValue(donesRango[aleatorio(0, donesRango.length - 1)]);	
			var existe = global.garou.existeDon(don);
			var j = 0;	//contador para evitar bucles infinitos (100 pasadas máx)
			while (existe && (j < 100)){
				don = getDonByValue(donesRango[aleatorio(0, donesRango.length)]);
				existe = global.garou.existeDon(don);
				j++;
			}
			
			if (!existe){
				var aux = new Don(don, TCamino.AUSPICIO, getRangoByValue(i));
				global.garou.dones.push(aux);
			}
		}
		
		donesRango = global.dones.donesTribu[global.garou.tribu.value][i];
		
		if (donesRango.length > 0){
			var don = getDonByValue(donesRango[aleatorio(0, donesRango.length - 1)]);	
			var existe = global.garou.existeDon(don);
			var j = 0;	//contador para evitar bucles infinitos (100 pasadas máx)
			while (existe && (j < 100)){
				don = getDonByValue(donesRango[aleatorio(0, donesRango.length)]);
				existe = global.garou.existeDon(don);
				j++;
			}
			
			if (!existe){
				var aux = new Don(don, TCamino.TRIBU, getRangoByValue(i));
				global.garou.dones.push(aux);
			}
		}
	}
}


