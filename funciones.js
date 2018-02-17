/***************************/
/*******FUNCIONALIDAD*******/
/***************************/
//arranca todo el proceso
function init(){
	global.slotMax = getSlotMax();
	nuevoGarouGuiado();
	//generacionAleatoriaTotal();
	//generacionAleatoriaAhroun();
}


/***********Generacion HTML***********/
//genera y devuelve el código para pintar círculos.
function codigoCirculos(aName, aMin, aMax){
	var min = (aMin === undefined) ? 0 : aMin;	
	var max = (aMax === undefined) ? CONST.RASGO : aMax;	
	var html = '<span class="btn_boton"  onclick="seleccion(\'' + aName + '\', 0, ' + min + ', ' + max + ')"><img src="' + CONST.RUTAIMG + 'borrar.png"></span>';
	
	for (var j = 1; j <= max; j++){
		if (j <= min){
			html += '<input type="radio" id="' + aName + j + '" name="' + aName + j + '" value="' + j + '" checked onclick="seleccion(\'' + aName + '\', ' + j + ', ' + min + ', ' + max + ')" desactivable="1"/>';
		}else{
			html += '<input type="radio" id="' + aName + j + '" name="' + aName + j + '" value="' + j + '" onclick="seleccion(\'' + aName + '\', ' + j + ', ' + min + ', ' + max + ')" desactivable="1"/>';
		}
	}
	
	return html;
}

//función genérica para pintar círculos. El código se genera en codigoCirculos
function generarCirculos(aName, aMin, aMax){
	getId('td_' + aName).innerHTML = codigoCirculos(aName, aMin, aMax);
}

//pinta el combo de raza
function generarTdRaza(){
	var html = '<select id="raza" name="raza" onchange="asignarRaza()" desactivable="1">';
		for (var dat in TRaza) {
			var raza = TRaza[dat];
			if (global.garou.raza == raza){
				html += '<option value="' + raza.value + '" selected>' + raza.name + '</option>';
			}else{
				html += '<option value="' + raza.value + '">' + raza.name + '</option>';
			}
		}
		html += '	</select>';
	getId('td_raza').innerHTML = html;
}

//pinta el combo de auspicio
function generarTdAuspicio(){
	var html = '<select id="auspicio" name="auspicio" onchange="asignarAuspicio()" desactivable="1">';
		for (var dat in TAuspicio) {
			var auspicio = TAuspicio[dat];
			if (global.garou.auspicio == auspicio){
				html += '<option value="' + auspicio.value + '" selected>' + auspicio.name + '</option>';
			}else{
				html += '<option value="' + auspicio.value + '">' + auspicio.name + '</option>';
			}
		}
		html += '	</select>';
	getId('td_auspicio').innerHTML = html;
}

//pinta el combo de tribu
function generarTdTribu(){
	var html = '<select id="tribu" name="tribu" onchange="asignarTribu();" desactivable="1">';
		for (var dat in TTribu) {
			var tribu = TTribu[dat];
			if (global.garou.tribu == tribu){
				html += '<option value="' + tribu.value + '" selected>' + tribu.name + '</option>';
			}else{
				html += '<option value="' + tribu.value + '">' + tribu.name + '</option>';
			}
		}
		html += '	</select>';
	getId('td_tribu').innerHTML = html;
}

//pinta el combo de rango
function generarTdRango(){
	var html = '<select id="rango" name="rango" onchange="asignarRango();" desactivable="1">';
		for (var dat in TRango) {
			var rango = TRango[dat];
			if (global.garou.rango == rango){
				html += '<option value="' + rango.value + '" selected>' + rango.name + '</option>';
			}else{
				html += '<option value="' + rango.value + '">' + rango.name + '</option>';
			}
		}
		html += '	</select>';
	getId('td_rango').innerHTML = html;
}

//pinta el combo de naturaleza
function generarTdNaturaleza(){
	var html = '<select id="naturaleza" name="naturaleza" onchange="asignarNaturaleza();" desactivable="1">';
		for (var dat in TNaturaleza) {
			var naturaleza = TNaturaleza[dat];
			if (global.garou.naturaleza == naturaleza){
				html += '<option value="' + naturaleza.value + '" selected>' + naturaleza.name + '</option>';
			}else{
				html += '<option value="' + naturaleza.value + '">' + naturaleza.name + '</option>';
			}
		}
		html += '	</select>';
	getId('td_naturaleza').innerHTML = html;
}

//pinta el combo de conducta
function generarTdConducta(){
	var html = '<select id="conducta" name="conducta" onchange="asignarConducta();" desactivable="1">';
		for (var dat in TConducta) {
			var conducta = TConducta[dat];
			if (global.garou.conducta == conducta){
				html += '<option value="' + conducta.value + '" selected>' + conducta.name + '</option>';
			}else{
				html += '<option value="' + conducta.value + '">' + conducta.name + '</option>';
			}
		}
		html += '	</select>';
	getId('td_conducta').innerHTML = html;
}

//pinta todos los datos de la cabecera
function generarCabecera(){
	getId('nombre').value = global.garou.nombre;
	getId('jugador').value = global.garou.jugador;
	getId('cronica').value = global.garou.cronica;
	generarTdRaza();
	generarTdAuspicio();
	generarTdTribu();
	getId('manada').value = global.garou.manada;
	getId('totem').value = global.garou.totem;
	getId('concepto').value = global.garou.concepto;
	generarTdNaturaleza();
	generarTdConducta();
}

function generarTdAtribFisicos(){
	var html = '<select id="atribFisicos" onchange="asignarAtribFisicos();" desactivable="1">';
		for (var dat in TAtributo) {
			var tipo = TAtributo[dat];
			if (global.garou.fisicos.tipo == tipo){
				html += '<option value="' + tipo.value + '" selected>' + tipo.name + '</option>';
			}else{
				html += '<option value="' + tipo.value + '">' + tipo.name + '</option>';
			}
		}
		html += '	</select>';
	getId('td_atribFisicos').innerHTML = html;
}

function generarTdAtribSociales(){
	var html = '<select id="atribSociales" onchange="asignarAtribSociales();" desactivable="1">';
		for (var dat in TAtributo) {
			var tipo = TAtributo[dat];
			if (global.garou.sociales.tipo == tipo){
				html += '<option value="' + tipo.value + '" selected>' + tipo.name + '</option>';
			}else{
				html += '<option value="' + tipo.value + '">' + tipo.name + '</option>';
			}
		}
		html += '	</select>';
	getId('td_atribSociales').innerHTML = html;
}

function generarTdAtribMentales(){
	var html = '<select id="atribMentales" onchange="asignarAtribMentales();" desactivable="1">';
		for (var dat in TAtributo) {
			var tipo = TAtributo[dat];
			if (global.garou.mentales.tipo == tipo){
				html += '<option value="' + tipo.value + '" selected>' + tipo.name + '</option>';
			}else{
				html += '<option value="' + tipo.value + '">' + tipo.name + '</option>';
			}
		}
		html += '	</select>';
	getId('td_atribMentales').innerHTML = html;
}

//pinta los atributos
function generarAtributos(aNuevo){
	generarTdAtribFisicos();
	generarTdAtribSociales();
	generarTdAtribMentales();

	generarCirculos('fuerza', 1);
	generarCirculos('carisma', 1);
	generarCirculos('percepcion', 1);
	generarCirculos('destreza', 1);
	generarCirculos('manipulacion', 1);
	generarCirculos('inteligencia', 1);
	generarCirculos('resistencia', 1);
	generarCirculos('apariencia', 1);
	generarCirculos('astucia', 1);

	if (!aNuevo){
		seleccion('fuerza', global.garou.fisicos.fuerza, 1, CONST.RASGO);
		seleccion('carisma', global.garou.sociales.carisma, 1, CONST.RASGO);
		seleccion('percepcion', global.garou.mentales.percepcion, 1, CONST.RASGO);
		seleccion('destreza', global.garou.fisicos.destreza, 1, CONST.RASGO);
		seleccion('manipulacion', global.garou.sociales.manipulacion, 1, CONST.RASGO);
		seleccion('inteligencia', global.garou.mentales.inteligencia, 1, CONST.RASGO);
		seleccion('resistencia', global.garou.fisicos.resistencia, 1, CONST.RASGO);
		seleccion('apariencia', global.garou.sociales.apariencia, 1, CONST.RASGO);
		seleccion('astucia', global.garou.mentales.astucia, 1, CONST.RASGO);
	}
}

function generarTdHabTalentos(){
	var html = '<select id="habTalentos" onchange="asignarHabTalentos();" desactivable="1">';
		for (var dat in THabilidad) {
			var tipo = THabilidad[dat];
			if (global.garou.talentos.tipo == tipo){
				html += '<option value="' + tipo.value + '" selected>' + tipo.name + '</option>';
			}else{
				html += '<option value="' + tipo.value + '">' + tipo.name + '</option>';
			}
		}
		html += '	</select>';
	getId('td_habTalentos').innerHTML = html;
}

function generarTdHabTecnicas(){
	var html = '<select id="habTecnicas" onchange="asignarHabTecnicas();" desactivable="1">';
		for (var dat in THabilidad) {
			var tipo = THabilidad[dat];
			if (global.garou.tecnicas.tipo == tipo){
				html += '<option value="' + tipo.value + '" selected>' + tipo.name + '</option>';
			}else{
				html += '<option value="' + tipo.value + '">' + tipo.name + '</option>';
			}
		}
		html += '	</select>';
	getId('td_habTecnicas').innerHTML = html;
}

function generarTdHabConocimientos(){
	var html = '<select id="habConocimientos" onchange="asignarHabConocimientos();" desactivable="1">';
		for (var dat in THabilidad) {
			var tipo = THabilidad[dat];
			if (global.garou.conocimientos.tipo == tipo){
				html += '<option value="' + tipo.value + '" selected>' + tipo.name + '</option>';
			}else{
				html += '<option value="' + tipo.value + '">' + tipo.name + '</option>';
			}
		}
		html += '	</select>';
	getId('td_habConocimientos').innerHTML = html;
}

//pinta las habilidades, usa generarTalentos, generarTecnicas y generarConocimientos
function generarHabilidades(){
	generarTdHabTalentos();
	generarTdHabTecnicas();
	generarTdHabConocimientos();
	
	generarTalentos();
	generarTecnicas();
	generarConocimientos();
}

//pinta los talentos
function generarTalentos(aNuevo){
	generarCirculos('alerta');
	generarCirculos('atletismo');
	generarCirculos('callejeo');
	generarCirculos('empatia');
	generarCirculos('esquivar');
	generarCirculos('expresion');
	generarCirculos('impulsoPrimario');
	generarCirculos('intimidacion');
	generarCirculos('pelea');
	generarCirculos('subterfugio');
	
	if (!aNuevo){
		seleccion('alerta', global.garou.talentos.alerta, 0, CONST.RASGO);
		seleccion('atletismo', global.garou.talentos.atletismo, 0, CONST.RASGO);
		seleccion('callejeo', global.garou.talentos.callejeo, 0, CONST.RASGO);
		seleccion('empatia', global.garou.talentos.empatia, 0, CONST.RASGO);
		seleccion('esquivar', global.garou.talentos.esquivar, 0, CONST.RASGO);
		seleccion('expresion', global.garou.talentos.expresion, 0, CONST.RASGO);
		seleccion('impulsoPrimario', global.garou.talentos.impulsoPrimario, 0, CONST.RASGO);
		seleccion('intimidacion', global.garou.talentos.intimidacion, 0, CONST.RASGO);
		seleccion('pelea', global.garou.talentos.pelea, 0, CONST.RASGO);
		seleccion('subterfugio', global.garou.talentos.subterfugio, 0, CONST.RASGO);
	}
}

//pinta las tecnicas
function generarTecnicas(aNuevo){
	generarCirculos('armasCC');
	generarCirculos('armasFuego');
	generarCirculos('conducir');
	generarCirculos('etiqueta');
	generarCirculos('interpretacion');
	generarCirculos('liderazgo');
	generarCirculos('reparaciones');
	generarCirculos('sigilo');
	generarCirculos('supervivencia');
	generarCirculos('tratoAnimales');
	
	if (!aNuevo){
		seleccion('armasCC', global.garou.tecnicas.armasCC, 0, CONST.RASGO);
		seleccion('armasFuego', global.garou.tecnicas.armasFuego, 0, CONST.RASGO);
		seleccion('conducir', global.garou.tecnicas.conducir, 0, CONST.RASGO);
		seleccion('etiqueta', global.garou.tecnicas.etiqueta, 0, CONST.RASGO);
		seleccion('interpretacion', global.garou.tecnicas.interpretacion, 0, CONST.RASGO);
		seleccion('liderazgo', global.garou.tecnicas.liderazgo, 0, CONST.RASGO);
		seleccion('reparaciones', global.garou.tecnicas.reparaciones, 0, CONST.RASGO);
		seleccion('sigilo', global.garou.tecnicas.sigilo, 0, CONST.RASGO);
		seleccion('supervivencia', global.garou.tecnicas.supervivencia, 0, CONST.RASGO);
		seleccion('tratoAnimales', global.garou.tecnicas.tratoAnimales, 0, CONST.RASGO);
	}
}

//pinta los conocimientos
function generarConocimientos(aNuevo){
	generarCirculos('ciencias');
	generarCirculos('enigmas');
	generarCirculos('informatica');
	generarCirculos('investigacion');
	generarCirculos('leyes');
	generarCirculos('linguistica');
	generarCirculos('medicina');
	generarCirculos('ocultismo');
	generarCirculos('politica');
	generarCirculos('rituales');
	
	if (!aNuevo){
		seleccion('ciencias', global.garou.conocimientos.ciencias, 0, CONST.RASGO);
		seleccion('enigmas', global.garou.conocimientos.enigmas, 0, CONST.RASGO);
		seleccion('informatica', global.garou.conocimientos.informatica, 0, CONST.RASGO);
		seleccion('investigacion', global.garou.conocimientos.investigacion, 0, CONST.RASGO);
		seleccion('leyes', global.garou.conocimientos.leyes, 0, CONST.RASGO);
		seleccion('linguistica', global.garou.conocimientos.linguistica, 0, CONST.RASGO);
		seleccion('medicina', global.garou.conocimientos.medicina, 0, CONST.RASGO);
		seleccion('ocultismo', global.garou.conocimientos.ocultismo, 0, CONST.RASGO);
		seleccion('politica', global.garou.conocimientos.politica, 0, CONST.RASGO);
		seleccion('rituales', global.garou.conocimientos.rituales, 0, CONST.RASGO);
	}	
}

//pinta las ventajas, usa generarTrasfondo y generarDon
function generarVentajas(){
	generarTrasfondos();
	generarDones();
}

function generarTrasfondos(){
	var html = '<table>';
	html += '<tr>';
		html += '<td>Seleccionar trasfondo</td><td>' + generarTdTrasfondo() + '</td>';
	html += '</tr>';
	for (var i = 0; i < global.garou.trasfondos.length; i++){	
		html += '<tr>';
			var ocultar = (isTrasfondoCongelado(global.garou.trasfondos[i].tipo)) ? " style='display:none;'" : "";
			html += '<td><span><input type="image" id="btn_trasfondo' + i + '" class="btn_boton" src="' + CONST.RUTAIMG + 'destroy.jpg" desactivable="1" onclick="borrarTrasfondo(\'' + global.garou.trasfondos[i].tipo.value + '\');"' + ocultar + '></span>' + global.garou.trasfondos[i].tipo.name + '</td>';
			html += '<td>' + codigoCirculos('trasfondo' + i, global.garou.trasfondos[i].valor) + '</td>';
		html += '</tr>';
	}
	html += '</table>';
	
	getId('td_trasfondos').innerHTML = html;
}

//pinta los trasfondos
function generarTdTrasfondo(){
	var html = '<select onchange="seleccionarTrasfondo(this)">';
	for (var dat in TTrasfondo) {
		var trasfondo = TTrasfondo[dat];
		if (!global.garou.existeTrasfondo(trasfondo)){
			html += '<option value="' + trasfondo.value + '">' + trasfondo.name + '</option>';
		}
	}
	html += '	</select>';
	
	return html;	
}

function generarDones(){
	var html = '<table>';
	html += '<tr>';
		html += '<td>Raza</td><td>' + generarTdDonRaza() + '</td>';
		html += '<td>Auspicio</td><td>' + generarTdDonAuspicio() + '</td>';
		html += '<td>Tribu</td><td>' + generarTdDonTribu() + '</td>';
	html += '</tr>';
	for (var i = 0; i < global.garou.dones.length; i++){	
		html += '<tr>';
			var donClass = (global.garou.dones[i].ajeno(global.garou.rango)) ? " class='optionDonAjeno'" : "";
			var ocultar = (isDonCongelado(global.garou.dones[i].tipo)) ? " style='display:none;'" : "";
			html += '<td colspan="2"' + donClass + '><span><input type="image" id="btn_don' + i + '" class="btn_boton" src="' + CONST.RUTAIMG + 'destroy.jpg" desactivable="1" onclick="borrarDon(' + global.garou.dones[i].tipo.value + ', ' + global.garou.dones[i].camino.value + ', ' + global.garou.dones[i].rango.value + ');"' + ocultar + '></span>' + global.garou.dones[i].tipo.name + '</td>';
			html += '<td colspan="4">' + global.garou.dones[i].tipo.descripcion + '</td>';
		html += '</tr>';
	}
	html += '</table>';
	
	getId('td_dones').innerHTML = html;
}

//pinta los dones
function generarTdDonRaza(){
	var html = '<select id="newDonRaza" onchange="seleccionarDonRaza(this)">';
		html += '<option value="' + TDon.NONE.value + '">' + TDon.NONE.name + '</option>';
	
	if ((global.garou.raza != TRaza.NONE) && (global.garou.rango != TRango.NONE)){
		var rangoMax = (global.garou.fase.donesRestringidos()) ? global.garou.rango.value : TRango.SEXTO.value;
		for (var i = 1; i <= rangoMax; i++){
			var optionClass = (i > global.garou.rango.value) ? ' class="optionDonAjeno"' : '';
			html += '<optgroup' + optionClass + ' label="' + getRangoByValue(i).name + '">';
			var donesRango = global.dones.donesRaza[global.garou.raza.value][i];
			for (var j = 0; j < donesRango.length; j++){
				var don = getDonByValue(donesRango[j]);
				if (!global.garou.existeDon(don)){
					html += '<option' + optionClass + ' value="' + don.value + '" rango="' + i + '">' + don.name + '</option>';
				}
			}			
			html += '</optgroup>';
		}
	}
	
	return html;
}

function generarTdDonAuspicio(){
	var html = '<select id="newDonAuspicio" onchange="seleccionarDonAuspicio(this)">';
		html += '<option value="' + TDon.NONE.value + '">' + TDon.NONE.name + '</option>';
	
	if ((global.garou.auspicio != TAuspicio.NONE) && (global.garou.rango != TRango.NONE)){
		var rangoMax = (global.garou.fase.donesRestringidos()) ? global.garou.rango.value : TRango.SEXTO.value;
		for (var i = 1; i <= rangoMax; i++){
			var optionClass = (i > global.garou.rango.value) ? ' class="optionDonAjeno"' : '';
			html += '<optgroup' + optionClass + ' label="' + getRangoByValue(i).name + '">';
			var donesRango = global.dones.donesAuspicio[global.garou.auspicio.value][i];
			for (var j = 0; j < donesRango.length; j++){
				var don = getDonByValue(donesRango[j]);
				if (!global.garou.existeDon(don)){
					html += '<option' + optionClass + ' value="' + don.value + '" rango="' + i + '">' + don.name + '</option>';
				}
			}			
			html += '</optgroup>';
		}
	}
	
	return html;
}

function generarTdDonTribu(){
	var html = '<select id="newDonTribu" onchange="seleccionarDonTribu(this)">';
		html += '<option value="' + TDon.NONE.value + '">' + TDon.NONE.name + '</option>';
	
	if ((global.garou.tribu != TTribu.NONE) && (global.garou.rango != TRango.NONE)){
		var rangoMax = (global.garou.fase.donesRestringidos()) ? global.garou.rango.value : TRango.SEXTO.value;
		for (var i = 1; i <= rangoMax; i++){
			var optionClass = (i > global.garou.rango.value) ? ' class="optionDonAjeno"' : '';
			html += '<optgroup' + optionClass + ' label="' + getRangoByValue(i).name + '">';
			var donesRango = global.dones.donesTribu[global.garou.tribu.value][i];
			for (var j = 0; j < donesRango.length; j++){
				var don = getDonByValue(donesRango[j]);
				if (!global.garou.existeDon(don)){
					html += '<option' + optionClass + ' value="' + don.value + '" rango="' + i + '">' + don.name + '</option>';
				}
			}			
			html += '</optgroup>';
		}
	}
	
	return html;
}

//pinta la parte de renombre y finales
function generarToquesFinales(aNuevo){
	generarRenombre(aNuevo);
	generarSobrenatural(aNuevo);
}

//pinta el renombre
function generarRenombre(aNuevo){
	var renombre = global.rangos.getRangoAuspicio(global.garou.auspicio, global.garou.rango);

	generarCirculos('gloria', renombre.gloria, CONST.RASGOEXT);
	generarCirculos('honor', renombre.honor, CONST.RASGOEXT);
	generarCirculos('sabiduria', renombre.sabiduria, CONST.RASGOEXT);

	if (!aNuevo){
		seleccion('gloria', global.garou.renombre.gloria, renombre.gloria, CONST.RASGOEXT);
		seleccion('honor', global.garou.renombre.honor, renombre.honor, CONST.RASGOEXT);
		seleccion('sabiduria', global.garou.renombre.sabiduria, renombre.sabiduria, CONST.RASGOEXT);
	}
}

//pinta rabia, gnosis y fv
function generarSobrenatural(aNuevo){
	generarCirculos('rabia', global.garou.auspicio.rabiaIni, CONST.RASGOEXT);
	generarCirculos('gnosis', global.garou.raza.gnosisIni, CONST.RASGOEXT);
	generarCirculos('fuerzaVoluntad', global.garou.tribu.fVolIni, CONST.RASGOEXT);
	
	if (!aNuevo){
		seleccion('rabia', global.garou.rabia, global.garou.auspicio.rabiaIni, CONST.RASGOEXT);
		seleccion('gnosis', global.garou.gnosis, global.garou.raza.gnosisIni, CONST.RASGOEXT);
		seleccion('fuerzaVoluntad', global.garou.fuerzaVoluntad, global.garou.tribu.fVolIni, CONST.RASGOEXT);
	}
}

//funcion que llama a toda la generación de la plantilla
function generarPlantilla(aNuevo){
	generarCabecera(aNuevo);
	generarAtributos(aNuevo);
	generarHabilidades(aNuevo);
	generarVentajas();
	generarToquesFinales(aNuevo);
	generarTdRango();
}

/***********Ventanas y clicks barra herramientas***********/
//Comienza un garou en modo Free
function nuevoGarouFree(){
	global.garou.fase = new Fase();
	global.garou.fase.modo = TModo.FREE;
	nuevoGarou();
}

//Comienza un garou en modo Guiado
function nuevoGarouGuiado(){
	global.garou.fase = new Fase();
	global.garou.fase.modo = TModo.BASE;
	nuevoGarou();
}

//Genera y muestra un garou aleatorio con los elementos que haya seleccionados
function nuevoGarouRandom(){
	global.garou = new Garou();
	global.garou.raza = global.random.raza;
	global.garou.auspicio = global.random.auspicio;
	global.garou.tribu = global.random.tribu;
	global.garou.rango = global.random.rango;
	
	generacionAleatoriaParcial();
	nuevoGarouCargado();
}

//Muestra un garou cargado y lo abre en modo Experiencia
function nuevoGarouCargado(){
	global.garou.fase = new Fase();
	//global.garou.fase.modo = TModo.EXPERIENCIA;
	//guardamos el estado actual
	global.garouGratuitos = global.garou.clone();

	//actualizamos la fase
	global.garou.fase.modo = TModo.EXPERIENCIA;

	ventanaGarou(false);
	
	//desactivamos todas las opciones que ya han sido seleccionadas
	desactivar();
	
	mostrarBotoneraPlantilla();
}

//Abre la ventana de plantilla de garou
function nuevoGarou(){
	global.slotSelected = 0;
	global.garou.vaciar();
	ventanaGarou(true);
	activar();
}

//guarda los datos del garou en el slot seleccionado
function guardarDatos(aNewSlot){	
	if (global.slotSelected > 0){
		var nameFile = generarNombreSlot(global.slotSelected);
		if (global.garou.guardar(nameFile)){
			alert('Guardado correctamente en ' + nameFile);
			if (aNewSlot){
				global.slotMax++;
			}
			ventanaGarou();
		}else{
			alert('Se ha producido un error en el guardado de ' + nameFile + '. Los datos no se han guardado.');
		}
	}else{
		alert('Debe seleccionar un slot');
	}
}

//carga los datos del slot seleccionado
function cargarDatos(){
	if (global.slotSelected > 0){
		if (global.garou.cargar(generarNombreSlot(global.slotSelected))){
			alert('El garou se ha cargado correctamente');
			nuevoGarouCargado();
		}else{
			alert('No ha podido cargarse el garou');
		}
	}else{
		alert('Debe seleccionar un slot');
	}
}

//Imprime el garou
function imprimir(){
	global.garou.imprimir(generarNombreSlot(global.slotSelected));
	var contenido = getId('areaImpresion').innerHTML;
	var ventana=window.open('','_blank');  //abrimos una ventana vacía nueva
		ventana.document.write(contenido);  //imprimimos el HTML del objeto en la nueva ventana
		ventana.document.close();  //cerramos el documento
		ventana.print();  //imprimimos la ventana
		ventana.close();  //cerramos la ventana
}

//prepara la ventana de plantilla de garou
function ventanaGarou(aNuevo){
	generarPlantilla(aNuevo);
	mostrarBotoneraPlantilla();
	mostrarPlantilla();
}

//prepara la ventana de seleccion de nuevo garou
function ventanaNuevoGarou(){
	mostrarNuevo();
	global.slotSelected = 0;
}

//prepara la ventana de cargar
function ventanaCargar(){
	mostrarCargar();
	global.slotSelected = 0;
	pintarSlots(0);
}

//prepara la ventana de guardar
function ventanaGuardar(){
	mostrarGuardar();
	global.slotSelected = 0;
	pintarSlots(1);
}

//prepara la ventana de opciones de generación aleatoria
function ventanaNuevoGarouRandom(){
	deseleccionarBtnAleatorio('raza');
	deseleccionarBtnAleatorio('auspicio');
	deseleccionarBtnAleatorio('tribu');
	deseleccionarBtnAleatorio('rango');

	mostrarNuevoRandom();
	global.slotSelected = 0;
	//inicializamos el random
	global.random.raza = TRaza.NONE;
	global.random.auspicio = TAuspicio.NONE;
	global.random.tribu = TTribu.NONE;
	global.random.rango = TRango.NONE;
	global.random.listaAtributos = null;
	global.random.listaFisicos = null;
	global.random.listaSociales = null;
	global.random.listaMentales = null;
	global.random.listaHabilidades = null;
	global.random.listaTalentos = null;
	global.random.listaTecnicas = null;
	global.random.listaConocimientos = null;
	global.random.listaTrasfondos = null;
}

//oculta todo y muestra la pantalla de plantilla
function mostrarPlantilla(){
	mostrar('p_plantilla');
	ocultar('p_cargar');
	ocultar('p_guardar');
	ocultar('p_nuevo');
}

//oculta todo y muestra la pantalla de cargar
function mostrarCargar(){
	ocultar('p_plantilla');
	mostrar('p_cargar');
	ocultar('p_guardar');
	ocultar('p_nuevo');
}

//oculta todo y muestra la pantalla de guardar
function mostrarGuardar(){
	ocultar('p_plantilla');
	ocultar('p_cargar');
	mostrar('p_guardar');
	ocultar('p_nuevo');
}

//muestra las opciones de nueva plantilla
function mostrarNuevo(){
	ocultar('p_plantilla');
	ocultar('p_cargar');
	ocultar('p_guardar');
	mostrar('p_nuevo');
	ocultar('p_seleccionAleatoria');
}

//muestra las opciones de nueva plantilla aleatoria
function mostrarNuevoRandom(){
	ocultar('p_plantilla');
	ocultar('p_cargar');
	ocultar('p_guardar');
	mostrar('p_nuevo');
	mostrar('p_seleccionAleatoria');
}

//prepara la botonera superior de la plantilla para cambiar entre fases
function mostrarBotoneraPlantilla(){	
	if (global.garou.fase.isFree()){
		ocultar('btn_plantilla');
		ocultar('btn_free');
	}else if (global.garou.fase.isBase()){
		ocultar('btn_plantilla_anterior');
		mostrar('btn_plantilla_siguiente');
		getId('btn_plantilla_siguiente').title = 'Ir a ' + TModo.GRATUITOS.name;
		getId('btn_plantilla_texto').innerHTML = global.garou.fase.modo.name;
		mostrarTabla('btn_plantilla');
		mostrar('btn_free');
	}else if (global.garou.fase.isGratuitos()){
		mostrar('btn_plantilla_anterior');
		getId('btn_plantilla_siguiente').title = 'Ir a ' + TModo.BASE.name;
		mostrar('btn_plantilla_siguiente');
		getId('btn_plantilla_siguiente').title = 'Ir a ' + TModo.EXPERIENCIA.name;
		getId('btn_plantilla_texto').innerHTML = global.garou.fase.modo.name + '[' + global.garou.fase.gratuitosAct + ' de ' + global.garou.fase.gratuitosMax + ']';
		mostrarTabla('btn_plantilla');
		mostrar('btn_free');
	}else if (global.garou.fase.isExperiencia()){
		mostrar('btn_plantilla_anterior');
		getId('btn_plantilla_siguiente').title = 'Ir a ' + TModo.GRATUITOS.name;
		ocultar('btn_plantilla_siguiente');
		if (global.garou.fase.experienciaMax != 9999){
			getId('btn_plantilla_texto').innerHTML = global.garou.fase.modo.name + ' [' + global.garou.fase.experienciaAct + ' de ' + global.garou.fase.experienciaMax + ']';
		}else{
			getId('btn_plantilla_texto').innerHTML = global.garou.fase.modo.name + ' gastados [' + global.garou.fase.experienciaAct + ']';
		}
		mostrarTabla('btn_plantilla');
		mostrar('btn_free');
	}
}

/***********Slots Carga y Guardado***********/
//genera el nombre de slot estándar según un número identificador
function generarNombreSlot(aIndex){
	return 'slot' + aIndex + '.xml';
}

//buscamos el máximo valor de slot que tenemos
//se basa en no poder tener un garou sin nombre
//va intentando cargar hasta que hay algún slot que no tiene elemento
function getSlotMax(){
	var end = false;
	var i = 1;
	while (!end){
		if (!global.garou.cargar(generarNombreSlot(i))){
			end = true;
		}else if ((global.garou.nombre == undefined) || (global.garou.nombre == "")){
			end = true;
		}
		
		i++;
	}
	i--;

	return i;
}

//pinta los slots según el tipo:
//tipo = 0 --> cargar				tipo = 1 --> guardar
function pintarSlots(tipo){
	var html = '';
	
	for (var i = 1; i < (global.slotMax); i++){
		if (i == global.slotSelected){
			html += '<input type="button" style="background-color:red;" value="' + i + '" onclick="selectSlot(' + i + ', ' + tipo + ');"/>';
		}else{
			html += '<input type="button" value="' + i + '" onclick="selectSlot(' + i + ');"/>';
		}
	}
	
	if (tipo == 1){
		html += '<input type="button" value="New Slot" onclick="selectSlot(' + i + '); guardarDatos(true);"/>';
		getId('td_guardar').innerHTML = html;
	}else{
		getId('td_cargar').innerHTML = html;
	}
}

//selecciona un slot y los repinta
function selectSlot(aIndex, aTipo){
	global.slotSelected = aIndex;
	
	pintarSlots(aTipo);
}

/***********Funcionalidad Formulario Plantilla***********/
//asigna un valor plano de una caja de texto
function asignarValorPlano(aElement){
	global.garou.set(aElement.id, aElement.value);
}

//obtenemos la lista de dones que sean válidos según tribu, auspicio, raza y rango
function getDonesValidos(){
	var donesValidos = new Array();
	//donesValidos.push(TDon.NONE.value);
	donesValidos = donesValidos.concat(global.dones.getDonesRaza(global.garou.raza, global.garou.rango));
	donesValidos = donesValidos.concat(global.dones.getDonesAuspicio(global.garou.auspicio, global.garou.rango));
	donesValidos = donesValidos.concat(global.dones.getDonesTribu(global.garou.tribu, global.garou.rango));
	donesValidos = eliminarRepetidos(donesValidos);
	return donesValidos;
}

//recorremos la lista de dones y borramos aquellos que no sean válidos según tribu, auspicio, raza y rango
//sólo si estamos en una fase en la que haya que validarlos
function validarListaDones(){
	if (global.garou.fase.donesRestringidos()){
		var donesValidos = getDonesValidos();
		//for (var i = 0; i < global.garou.dones; i++){
		for (var i = global.garou.dones.length - 1; i >= 0; i--){
			if (donesValidos.indexOf(global.garou.dones[i].tipo) == -1){
				//donesValidos.splice(i, 1);
				global.garou.dones.splice(i, 1);
			}
		}
	}
}

//asignamos una raza al garou y volvemos a generar ventajas y finales
function asignarRaza(){
	var value = getListBoxSelectedValue(getId('raza'));
	global.garou.raza = getRazaByValue(value);
	
	validarListaDones();
	generarDones();
	generarCirculos('gnosis', global.garou.raza.gnosisIni,10);
	seleccion('gnosis', global.garou.gnosis, global.garou.raza.gnosisIni, CONST.RASGOEXT);
}

//asignamos un auspicio al garou y volvemos a generar ventajas y finales
function asignarAuspicio(){
	var value = getListBoxSelectedValue(getId('auspicio'));
	global.garou.auspicio = getAuspicioByValue(value);
	asignarRenombre();
	
	validarListaDones();
	generarDones();
	//cuenta como true porqeu se borra lo que haya y pone los mínimos por auspicio y rango
	generarRenombre(true);
	generarCirculos('rabia', global.garou.raza.rabiaIni,10);
	seleccion('rabia', global.garou.rabia, global.garou.auspicio.rabiaIni, CONST.RASGOEXT);
}

//asignamos una tribu al garou y volvemos a generar ventajas y finales
function asignarTribu(){
	var value = getListBoxSelectedValue(getId('tribu'));
	global.garou.tribu = getTribuByValue(value);
	
	validarListaDones();
	generarDones();
	generarCirculos('fuerzaVoluntad', global.garou.raza.fVolIni,10);
	seleccion('fuerzaVoluntad', global.garou.fuerzaVoluntad, global.garou.tribu.fVolIni, CONST.RASGOEXT);
}

//asignamos un rango al garou y volvemos a generar ventajas y finales
function asignarRango(){
	var value = getListBoxSelectedValue(getId('rango'));
	global.garou.rango = getRangoByValue(value);
	asignarRenombre();
	
	validarListaDones();
	generarDones();
	//cuenta como true porqeu se borra lo que haya y pone los mínimos por auspicio y rango
	generarRenombre(true);
}

//asignamos los datos asociados al garou según el renombre
function asignarRenombre(){
	var renombre = global.rangos.getRangoAuspicio(global.garou.auspicio, global.garou.rango);
	
	global.garou.renombre.gloria = renombre.gloria;
	global.garou.renombre.honor = renombre.honor;
	global.garou.renombre.sabiduria = renombre.sabiduria;
}

//asignamos la naturaleza al garou
function asignarNaturaleza(){
	var value = getListBoxSelectedValue(getId('naturaleza'));
	global.garou.naturaleza = getNaturalezaByValue(value);
}

//asignamos el tipo de fisicos al garou
function asignarAtribFisicos(){
	var value = getListBoxSelectedValue(getId('atribFisicos'));
	global.garou.fisicos.tipo = getAtributoByValue(value);
}

//asignamos el tipo de sociales al garou
function asignarAtribSociales(){
	var value = getListBoxSelectedValue(getId('atribSociales'));
	global.garou.sociales.tipo = getAtributoByValue(value);
}

//asignamos el tipo de mentales al garou
function asignarAtribMentales(){
	var value = getListBoxSelectedValue(getId('atribMentales'));
	global.garou.mentales.tipo = getAtributoByValue(value);
}

//asignamos el tipo de talentos al garou
function asignarHabTalentos(){
	var value = getListBoxSelectedValue(getId('habTalentos'));
	global.garou.talentos.tipo = getHabilidadByValue(value);
}

//asignamos el tipo de tecnicas al garou
function asignarHabTecnicas(){
	var value = getListBoxSelectedValue(getId('habTecnicas'));
	global.garou.tecnicas.tipo = getHabilidadByValue(value);
}

//asignamos el tipo de conocimientos al garou
function asignarHabConocimientos(){
	var value = getListBoxSelectedValue(getId('habConocimientos'));
	global.garou.conocimientos.tipo = getHabilidadByValue(value);
}

//asignamos la conducta al garou
function asignarConducta(){
	var value = getListBoxSelectedValue(getId('conducta'));
	global.garou.conducta = getConductaByValue(value);
}

//borramos los tr de las ventajas (que recordemos se crean dinamicamente en la tabla)
function borrarFilasVentajas(){
	var filas = getElementsByRegexId(/ventaja_.*/, "tr");
	for (var i = 0; i < filas.length; i++){
		(elem=document.getElementById(filas[i].id)).parentNode.removeChild(elem)
	}
}

//selecciona un valor de tipo circulos
function seleccion(aNombre, aValor, aMin, aMax){
	var min = aMin || 0;
	var max = aMax || CONST.RASGOEXT;
	
	//el valor real que se va a asignar se guardará en la variable 'valor'
	var valor = 0;
	for (var i = 1; i <= max; i++){
		if (!getId(aNombre + i).disabled){
			if ((i <= aValor) || (i <= min)){
				getId(aNombre + i).checked = true;
				valor = i;
			}else{
				getId(aNombre + i).checked = false;
			}
		}else{
			valor = i;
		}
	}
	
	if (aNombre.indexOf('trasfondo') == -1){
		//puede ser que esta asignación cueste puntos gratuítos o de experiencia
		calcularCoste(aNombre, valor);
		//ahora guardamos
		global.garou.set(aNombre, valor);
	}else if ((aNombre.indexOf('trasfondo') == 0) && (global.garou.trasfondos.length > 0) && (global.garou.trasfondos.length > aNombre.substring(9))){
		//puede ser que esta asignación cueste puntos gratuítos o de experiencia
		calcularCoste(aNombre, valor);
		//Los trasfondos se guardan de forma especial
		global.garou.trasfondos[aNombre.substring(9)].valor = valor;
	}
	
	mostrarBotoneraPlantilla();
	validarGarou();
}

//seleccionamos un trasfondo y volvemos a generar las ventajas
function seleccionarTrasfondo(aCombo){
	var trasfondo = getTrasfondoByValue(aCombo.value);
	
	if (trasfondo != TTrasfondo.NONE){
		if (global.garou.agregarTrasfondo(trasfondo)){
			generarTrasfondos();
		}else{
			aCombo.value = 0;
			alert('El trasfondo ya existe');
		}
	}
}

//borramos un trasfondo y volvemos a generar las ventajas
function borrarTrasfondo(aTrasfondo){
	var trasfondo = getTrasfondoByValue(aTrasfondo);
	global.garou.borrarTrasfondo(trasfondo);
	generarTrasfondos();
}

//seleccionamos un don y volvemos a generar las ventajas
function seleccionarDonRaza(aCombo){
	var don = getDonByValue(aCombo.value);
		
	if (don != TDon.NONE){
		var rango = getRangoByValue(aCombo.options[aCombo.selectedIndex].getAttribute('rango'));
		if ((global.garou.numDonesCaminoRango(TCamino.RAZA, rango) < CONST.MAXDONESRANGO) || (!global.garou.fase.isBase())){
			if (global.garou.agregarDon(don, TCamino.RAZA, rango)){
				generarDones();
				calcularCosteDon(rango, 1);
			}else{
				aCombo.value = 0;
				alert('El don ya existe');
			}
		}else{
			aCombo.value = 0;
			alert('Ya ha alcanzado el máximo número de dones de ' + global.garou.raza.name + ' para rango ' + rango.value);
		}
	}
}

//seleccionamos un don y volvemos a generar las ventajas
function seleccionarDonAuspicio(aCombo){
	var don = getDonByValue(aCombo.value);
		
	if (don != TDon.NONE){
		var rango = getRangoByValue(aCombo.options[aCombo.selectedIndex].getAttribute('rango'));
		if ((global.garou.numDonesCaminoRango(TCamino.AUSPICIO, rango) < CONST.MAXDONESRANGO) || (!global.garou.fase.isBase())){
			if (global.garou.agregarDon(don, TCamino.AUSPICIO, rango)){
				generarDones();
				calcularCosteDon(rango, 1);
			}else{
				aCombo.value = 0;
				alert('El don ya existe');
			}
		}else{
			aCombo.value = 0;
			alert('Ya ha alcanzado el máximo número de dones de ' + global.garou.auspicio.name + ' para rango ' + rango.value);
		}
	}
}

//seleccionamos un don y volvemos a generar las ventajas
function seleccionarDonTribu(aCombo){
	var don = getDonByValue(aCombo.value);
		
	if (don != TDon.NONE){
		var rango = getRangoByValue(aCombo.options[aCombo.selectedIndex].getAttribute('rango'));
		if ((global.garou.numDonesCaminoRango(TCamino.TRIBU, rango) < CONST.MAXDONESRANGO) || (!global.garou.fase.isBase())){
			if (global.garou.agregarDon(don, TCamino.TRIBU, rango)){
				generarDones();
				calcularCosteDon(rango, 1);
			}else{
				aCombo.value = 0;
				alert('El don ya existe');
			}
		}else{
			aCombo.value = 0;
			alert('Ya ha alcanzado el máximo número de dones de ' + global.garou.tribu.name + ' para rango ' + rango.value);
		}
	}
}

//borramos un don y volvemos a generar las ventajas
function borrarDon(aDon, aCamino, aRango){
	var don = getDonByValue(aDon);
	var camino = (aCamino === undefined) ? TCamino.NONE : getCaminoByValue(aCamino);	
	var rango = (aRango === undefined) ? TRango.NONE : getRangoByValue(aRango);	

	global.garou.borrarDon(don, camino, rango);
	generarDones();
	calcularCosteDon(rango, 0);
}

//comprueba si el don estaba ya en alguna versión anterior del garou
function isDonCongelado(aDon){
	var resultado = false;
	
	if (global.garou.fase.isGratuitos()){
		resultado = global.garouBase.existeDon(aDon);
	}else if (global.garou.fase.isExperiencia()){
		resultado = global.garouGratuitos.existeDon(aDon);
	}
	
	return resultado;
}

//comprueba si el trasfondo estaba ya en alguna versión anterior del garou
function isTrasfondoCongelado(aTrasfondo){
	var resultado = false;
	
	if (global.garou.fase.isGratuitos()){
		resultado = global.garouBase.existeTrasfondo(aTrasfondo);
	}else if (global.garou.fase.isExperiencia()){
		resultado = global.garouGratuitos.existeTrasfondo(aTrasfondo);
	}
	
	return resultado;
}

/****************************Para random***********************/
//deselecciona todas las razas
function deseleccionarBtnAleatorio(aTipo){
	var elements = getId('p_seleccionAleatoria').getElementsByTagName('img');
	
	for (var i = 0; i < elements.length; i++){
		var element = elements[i];
		if (element.getAttribute('tipo') == aTipo){	
			vaciarClass(element);
			addClass(element, 'btn_random');
		}
	}
}

//boton para seleccionar la raza
function btnRandomRaza(elemento, aRaza){
	deseleccionarBtnAleatorio('raza');
	
	addClass(elemento, 'btn_random btn_random_sel');
	mostrarElemento(elemento);
	
	this.global.random.raza = aRaza;
}

//boton para seleccionar el auspicio
function btnRandomAuspicio(elemento, aAuspicio){
	deseleccionarBtnAleatorio('auspicio');
	
	addClass(elemento, 'btn_random btn_random_sel');
	mostrarElemento(elemento);
	
	this.global.random.auspicio = aAuspicio;
}

//boton para seleccionar la tribu
function btnRandomTribu(elemento, aTribu){
	deseleccionarBtnAleatorio('tribu');
	
	addClass(elemento, 'btn_random btn_random_sel');
	mostrarElemento(elemento);
	
	this.global.random.tribu = aTribu;
}

//boton para seleccionar el rango
function btnRandomRango(elemento, aRango){
	deseleccionarBtnAleatorio('rango');
	
	addClass(elemento, 'btn_random btn_random_sel');
	mostrarElemento(elemento);
	
	this.global.random.rango = aRango;
}

/****************************Entre fases***********************/
function free(){
    if(confirm("Este paso no tiene vuelta atrás. ¿Está seguro?")) {
		//repintamos la pantalla (eso va a arreglar posibles elementos vacíos y demás)
		generarPlantilla(false);
		//el modo free no desactiva nada
		//actualizamos la fase
		global.garou.fase.modo = TModo.FREE;
		mostrarBotoneraPlantilla();
    }
}

function siguiente(){	
	if (global.garou.fase.isBase()){
		//guardamos el estado actual
		global.garouBase = global.garou.clone();
		//actualizamos la fase
		global.garou.fase.modo = TModo.GRATUITOS;
		//repintamos la pantalla (eso va a arreglar posibles elementos vacíos y demás)
		generarPlantilla(false);
		//desactivamos todas las opciones que ya han sido seleccionadas
		desactivar();
		
		mostrarBotoneraPlantilla();
	}else if (global.garou.fase.isGratuitos()){
		//guardamos el estado actual
		global.garouGratuitos = global.garou.clone();
		//actualizamos la fase
		global.garou.fase.modo = TModo.EXPERIENCIA;
		//repintamos la pantalla (eso va a arreglar posibles elementos vacíos y demás)
		generarPlantilla(false);	
		//desactivamos todas las opciones que ya han sido seleccionadas
		desactivar();
		
		mostrarBotoneraPlantilla();	
	}
}

function anterior(){
	activar();
	
	if (global.garou.fase.isGratuitos()){
		//guardamos el estado actual
		global.garou = global.garouBase.clone();
		//actualizamos la fase
		global.garou.fase.modo = TModo.BASE;
		//repintamos la pantalla (eso va a arreglar posibles elementos vacíos y demás)
		generarPlantilla(false);	
		//desactivamos todas las opciones que ya han sido seleccionadas
		desactivar();
		
		mostrarBotoneraPlantilla();	
	}else if (global.garou.fase.isExperiencia()){
		//guardamos el estado actual
		global.garou = global.garouGratuitos.clone();
		//actualizamos la fase
		global.garou.fase.modo = TModo.GRATUITOS;
		//repintamos la pantalla (eso va a arreglar posibles elementos vacíos y demás)
		generarPlantilla(false);	
		//desactivamos todas las opciones que ya han sido seleccionadas
		desactivar();
		
		mostrarBotoneraPlantilla();	
	}
}

function activar(){
	var elements = getId('tabla_plantilla').getElementsByTagName('*');

	for (var i = 0; i < elements.length; i++){
		var element = elements[i];
		if (element.getAttribute('desactivable') == "1"){
			if (element.type.indexOf('image') != -1){
				if ((element.id.indexOf('btn_trasfondo') != -1) || (element.id.indexOf('btn_don') != -1)){
					ocultar(element.id);
				}
			}else{
				element.disabled = false;
			}
		}
	}
}

function desactivar(){
	var elements = getId('tabla_plantilla').getElementsByTagName('*');

	for (var i = 0; i < elements.length; i++){
		var element = elements[i];
		if (element.getAttribute('desactivable') == "1"){		
			if (element.type.indexOf('text') != -1){
				element.disabled = true;
			}else if (element.type.indexOf('select') != -1){
				//desahabilito todos salvo los defecto de trasfondo y don
				if (element.id.indexOf('trasfondo') != -1){
					element.disabled = getTrasfondoByValue(element.value) != TTrasfondo.NONE;
				}else if (element.id.indexOf('don') != -1){
					element.disabled = getDonByValue(element.value) != TDon.NONE;
				}else{
					element.disabled = true;
				}
			}else if (element.type.indexOf('radio') != -1){
				element.disabled = element.checked;
			}else if (element.type.indexOf('image') != -1){
				if ((element.id.indexOf('btn_trasfondo') != -1) || (element.id.indexOf('btn_don') != -1)){
					ocultar(element.id);
				}
			}
		}
	}
}

function calcularCoste(aNombre, aValor){
	var oldValue = global.garou.get(aNombre);
	var type = global.garou.getType(aNombre);
	var coste = 0;
	
	if (global.garou.fase.isGratuitos()){
		var costeBase = 0;
		switch (type){
			case 0: costeBase = CONST.GRATUITOS.ATRIB; break;
			case 1: costeBase = CONST.GRATUITOS.HAB; break;
			case 2: costeBase = CONST.GRATUITOS.TRASF; break;
			case 3: costeBase = CONST.GRATUITOS.RABIA; break;
			case 4: costeBase = CONST.GRATUITOS.GNOSIS; break;
			case 5: costeBase = CONST.GRATUITOS.FVOL; break;
		}

		coste += (aValor - oldValue) * costeBase;

		//actualizamos los puntos gratuítos
		global.garou.fase.gratuitosAct += coste;
	}else if (global.garou.fase.isExperiencia()){
		var costeBase = 0;
		switch (type){
			case 0: costeBase = CONST.EXPERIENCIA.ATRIB; break;
			case 1: costeBase = CONST.EXPERIENCIA.HAB; break;
			//case 2: costeBase = CONST.EXPERIENCIA.TRASF; break;
			case 3: costeBase = CONST.EXPERIENCIA.RABIA; break;
			case 4: costeBase = CONST.EXPERIENCIA.GNOSIS; break;
			case 5: costeBase = CONST.EXPERIENCIA.FVOL; break;
		}
		
		if (aValor > oldValue){
			for (var i = oldValue; i < aValor; i++){
				if (i == 0){
					if (type == 1){
						coste += CONST.EXPERIENCIA.FIRSTHAB;
					}else{
						coste += costeBase;
					}
				}else{
					coste += i * costeBase;
				}
			}
		}else if (aValor < oldValue){
			for (var i = aValor; i < oldValue; i++){				
				if (i == 0){
					if (type == 1){
						coste -= CONST.EXPERIENCIA.FIRSTHAB;
					}else{
						coste -= costeBase;
					}
				}else{
					coste -= i * costeBase;
				}
			}
		}

		//actualizamos los puntos de experiencia
		global.garou.fase.experienciaAct += coste;
	}
}

//aTipo: 0 --> se está quitando el don
//	   : 1 --> se está añadiendo el don
function calcularCosteDon(aRango, aTipo){	
	if (global.garou.fase.isGratuitos()){
		var coste = 0;

		if (aTipo == 0){
			coste -= aRango.value * CONST.GRATUITOS.DON;
		}else if (aTipo == 1){
			coste += aRango.value * CONST.GRATUITOS.DON;
		}
		
		//actualizamos los puntos gratuítos
		global.garou.fase.gratuitosAct += coste;
	}else if (global.garou.fase.isExperiencia()){
		var coste = 0;
		var costeBase = (aRango.value > global.garou.rango.value) ? CONST.EXPERIENCIA.DONAJENO : CONST.EXPERIENCIA.DON;
	
		if (aTipo == 0){
			coste -= aRango.value * costeBase;
		}else if (aTipo == 1){
			coste += aRango.value * costeBase;
		}
		
		//actualizamos los puntos de experiencia
		global.garou.fase.experienciaAct += coste;
	}
	
	mostrarBotoneraPlantilla();
	validarGarou();
}



//TO DO
//-------------------
//Imágen de personaje
//Historial, méritos, defectos y demás
//tótem con listados
//generación aleatoria de personajes según tipos estándar (madero, profesor...)



//DONE
//-------------------------
//Método de rellenar la hoja con puntos (de base, con gratuítos y con experiencia)
//    esto implica otro problema a mayores, y es que hay que tener un modo de almacenar qué puntos son por gratuítos, cuales por px y cuales base
//con experiencia deben poder comprarse dones ajenos (la restricción de rango sigue existiendo

//entre fase y fase hay que "congelar" el estado del garou para que no pueda ser modificado:
//de base pasamos a gratuítos (y no puede modificarse el base)
//de gratuítos pasamos a experiencia (y no puede modificarse el gratuítos)
//de gratuítos pasamos a free (y puede modificarse todo)

//New: 	Base -> Gratuitos -> Experiencia -> Free
//		Free
//Load:	Experiencia -> Free

//cada vez que añades/quitas puntos, trasfondos o dones, debe actualizarse la puntuación de gratuítos o experiencia

//poder tomar dones ajenos (sólo en fase de experiencia y free)

//poder cargar un pijote y asignarle modo experiencia para poder subirle la experiencia normalmente
//		¿esto implica que en modo experiencia se puede subir el rango, etc...? (los trasfondos se pueden subir sin gasto de px...
//La diferencia con el modo FREE es que los valores cargados deben estar bloqueados (salvo rango etc que no tenga coste en pxs)

//cuando seleccionas nuevos dones/trasfondos, los que estaban bloqueados, se desbloquean T_T

//generación aleatoria de personajes según tipos de garou (ahroun, galliard, etc...)


function garouTest(){
	global.garou.nombre = "qwer";
	global.garou.jugador = "asdf";
	global.garou.cronica = "zxcv";
	global.garou.raza = TRaza.HOMINIDO;
	global.garou.auspicio = TAuspicio.AHROUN;
	global.garou.tribu = TTribu.ROEHUESOS;
	global.garou.manada = "erty"
	global.garou.totem = "dfgh"
	global.garou.concepto = "cvnn";
	global.garou.naturaleza = TNaturaleza.ARQUITECTO;
	global.garou.conducta = TConducta.BRAVUCON;
	global.garou.fisicos.tipo = TAtributo.PRIMARIO;
	global.garou.fisicos.fuerza = 2;
	global.garou.fisicos.destreza = 4;
	global.garou.fisicos.resistencia = 2;
	global.garou.sociales.tipo = TAtributo.SECUNDARIO;
	global.garou.sociales.carisma = 4;
	global.garou.sociales.manipulacion = 2;
	global.garou.sociales.apariencia = 4;
	global.garou.mentales.tipo = TAtributo.TERCIARIO,
	global.garou.mentales.percepcion = 5;
	global.garou.mentales.inteligencia = 5;
	global.garou.mentales.astucia = 3;
	global.garou.talentos.tipo = THabilidad.PRIMARIA;
	global.garou.talentos.alerta = 1;
	global.garou.talentos.atletismo = 0;
	global.garou.talentos.callejeo = 0;
	global.garou.talentos.empatia = 0;
	global.garou.talentos.esquivar = 4;
	global.garou.talentos.expresion = 0;
	global.garou.talentos.impulsoPrimario = 0;
	global.garou.talentos.intimidacion = 0;
	global.garou.talentos.pelea = 0;
	global.garou.talentos.subterfugio = 2;
	global.garou.tecnicas.tipo = THabilidad.SECUNDARIA;
	global.garou.tecnicas.armasCC = 0;
	global.garou.tecnicas.armasFuego = 0;
	global.garou.tecnicas.conducir = 2;
	global.garou.tecnicas.etiqueta = 0;
	global.garou.tecnicas.interpretacion = 0;
	global.garou.tecnicas.liderazgo = 0;
	global.garou.tecnicas.reparaciones = 4;
	global.garou.tecnicas.sigilo = 0;
	global.garou.tecnicas.supervivencia = 0;
	global.garou.tecnicas.tratoAnimales = 3;
	global.garou.conocimientos.tipo = THabilidad.TERCIARIA;
	global.garou.conocimientos.ciencias = 0;
	global.garou.conocimientos.enigmas = 0;
	global.garou.conocimientos.informatica = 1;
	global.garou.conocimientos.investigacion = 1;
	global.garou.conocimientos.leyes = 1;
	global.garou.conocimientos.linguistica = 1;
	global.garou.conocimientos.medicina = 0;
	global.garou.conocimientos.ocultismo = 0;
	global.garou.conocimientos.politica = 0;
	global.garou.conocimientos.rituales = 0;
	var trasfondo1 = new Trasfondo(TTrasfondo.CONTACTOS);
		trasfondo1.valor = 2;
	var trasfondo2 = new Trasfondo(TTrasfondo.FETICHE);
		trasfondo2.valor = 2;
	global.garou.trasfondos = new Array(trasfondo1, trasfondo2);
	global.garou.dones = new Array(TDon.ABRIRHERIDAS, TDon.ALIENTOKAOS);
	global.garou.rango = TRango.CLIATH;
	global.garou.renombre.gloria = 3;
	global.garou.renombre.honor = 2;
	global.garou.renombre.sabiduria = 1;		
	global.garou.rabia = 3;
	global.garou.gnosis = 4;
	global.garou.fuerzaVoluntad = 7;
}