//parse an xml document
function XmlParser(){
	this.xmlDoc = null;
	
	//toma el fichero indicado y guarda en this.xmlDoc el xml asociado
	this.parseDocument = function(aName){
		var xmlhttp;
		if (window.XMLHttpRequest){
			// code for IE7+, Firefox, Chrome, Opera, Safari
			xmlhttp = new XMLHttpRequest();
		}else{
			// code for IE6, IE5
			xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
		}
		xmlhttp.open("GET",aName,false);
		xmlhttp.send();
		this.xmlDoc = xmlhttp.responseXML;	
	}

	//toma el string pasado y guarda en this.xmlDoc el xml asociado
	this.parseString = function(aTxt){
		if (window.DOMParser){
			var parser = new DOMParser();
			this.xmlDoc = parser.parseFromString(aTxt,"text/xml");
		}else{
			// Internet Explorer
			this.xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
			this.xmlDoc.async = false;
			this.xmlDoc.loadXML(aTxt);
		} 
	}

	//obtiene todos los elementos con el nombre pasado
	this.childrens = function(aName){
		var resultado = null;
		
		if (this.xmlDoc != null){
			resultado = this.xmlDoc.getElementsByTagName(aName);
		}
		
		return resultado;
	}
	
	//obtiene el primer elemento con el nombre pasado
	this.getFirst = function(aName){
		var resultado = null;
		
		if (this.xmlDoc != null){
			var data = this.childrens(aName);
			if (data != null){
				data = data[0];
			}
			
			resultado = data;
		}
	
		return resultado;
	}
	
	//obtiene el texto del primer elemento con el nombre pasado
	this.getFirstText = function(aName){
		var resultado = this.getFirst(aName);
	
		if (resultado != null){
			try{
				resultado = resultado.childNodes[0].nodeValue;
			}catch(err){
				resultado = null;
			}
		}
		
		return resultado;
	}
	
	//obtiene el atributo con el nombre Att del primer elemento con el nombre aName
	this.getFirstAtt = function(aName, aAtt){
		var resultado = this.getFirst(aName);
		
		if (resultado != null){
			try{
				resultado = resultado.attributes.getNamedItem(aAtt).nodeValue;
			}catch(err){
				resultado = null;
			}
		}
		
		return resultado;
	}

	//añade en aTexto una cabecera xml estándar
	this.generarCabeceraXml = function(aTexto){
		aTexto.push('<?xml version="1.0" encoding="UTF-8" ?>\n');
	}
	
	//añade en aTexto un elemento hoja con nombre, texto y atributos indicados
	//los atributos son un array de objetos{nombre:asdf, valor:asdf}
	this.generarElementoSimpleXml = function(aTexto, aNombre, aValor, aAtributos){
		if (!aAtributos){
			aTexto.push('<' + aNombre + '>');
		}else{
			var cad = '<' + aNombre;
			for (var i = 0; i < aAtributos.length; i++)
				cad += ' ' + aAtributos[i].nombre + '="' + aAtributos[i].valor + '"';
			cad += '>';
			aTexto.push(cad);
		}
		
		aTexto.push(escaparXML(aValor));
		aTexto.push('</' + aNombre + '>');
	}
	
	//añade en aTexto la etiqueta de apertura de un elemento aNombre con los atributos indicados
	//los atributos son un array de objetos{nombre:asdf, valor:asdf}
	this.generarAperturaElementoXml = function(aTexto, aNombre, aAtributos){
		if (!aAtributos){
			aTexto.push('<' + aNombre + '>');
		}else{
			var cad = '<' + aNombre;
			for (var i = 0; i < aAtributos.length; i++){
				cad += ' ' + aAtributos[i].nombre + '="' + aAtributos[i].valor + '"';
			}
			cad += '>';
			aTexto.push(cad);
		}
	}
	
	//añade en aTexto la etiqueta de cierre de un elemento aNombre
	this.generarCerraduraElementoXml = function(aTexto, aNombre){
		aTexto.push('</' + aNombre + '>');
	}
}

//transforma un xml con un xsl dado
function XmlTransform(){
	this.xslPath = 'data/slot.xsl';
	this.contenedor = 'areaImpresion';
	
	//carga un xml y devuelve el documento generado
	this.loadXMLDoc = function(aName){  
		var docxml;  
		 
		if (window.ActiveXObject){ 
			// code for IE 
			docxml = new ActiveXObject("Microsoft.XMLDOM");  
		}else if (document.implementation && document.implementation.createDocument){  
			// code for Mozilla, Firefox, Opera, etc.
			docxml = document.implementation.createDocument("","",null);  
		}else{  
			alert('Your browser cannot handle this script');  
		} 
		
		docxml.async=false;  
		docxml.load(aName);
		
		return(docxml);  
	}  
	
	//recibe el path xml y aplica el xsl para generar el html en el contenedor
	this.displayResult = function(aXml){    
		var xml = this.loadXMLDoc(aXml);  
		var xsl = this.loadXMLDoc(this.xslPath);  
	 
		if (window.ActiveXObject){  
			// code for IE  
			var ex = xml.transformNode(xsl);  
			getId(this.contenedor).innerHTML = ex;  
		}else if (document.implementation && document.implementation.createDocument){  
			// code for Mozilla, Firefox, Opera, etc. 
			var xsltProcessor = new XSLTProcessor();  
			xsltProcessor.importStylesheet(xsl);  
			var resultDocument = xsltProcessor.transformToFragment(xml,document);  
			getId(this.contenedor).appendChild(resultDocument);  
		}  
	}  
}

function GarouParser(aGarou){
	this.garou = aGarou;
	this.xml = new XmlParser();
	this.transform = new XmlTransform();
	this.fileName = '';
	this.dataPath = 'data/';
		
	this.guardarGarou = function(aGarou, aFileName){
		var resultado = false;
		
		this.garou = aGarou;
		this.fileName = aFileName;
		
		try{
			descargarArchivo(this.generarXmlGarou(), aFileName);
			resultado = true;
		}catch(err){
			resultado = false;
		}
		
		return resultado;
	}
	
	this.cargarGarou = function(aFileName){
		var resultado = false;
		
		try{
			//cargamos el fichero
			if (this.cargarFichero(aFileName)){
				//vaciamos el garou
				this.garou.vaciar();
			
				//cargamos los datos
				this.obtenerCabecera();
				this.obtenerAtributos();
				this.obtenerHabilidades();
				this.obtenerTrasfondos();
				this.obtenerDones();
				this.obtenerRango();
				this.obtenerDatosFinales();
				
				resultado = this.garou;
			}
		}catch(err){
			resultado = false;
		}
		
		return resultado;
	}
	
	this.materializarGarou = function(aFileName){
		this.transform.displayResult(this.getPath(aFileName));
	}
	
	/////////////////private functions/////////////////
	this.cargarFichero = function(aFileName){
		var resultado = false;
		
		try{
			this.xml.parseDocument(this.getPath(aFileName));
			this.fileName = aFileName;
			resultado = true;
		}catch(err){
			resultado = false;
			this.fileName = '';
		}
		 
		return resultado;
	}
	
	this.getPath = function(aFileName){
		return this.dataPath + aFileName;
	}
	
	this.obtenerCabecera = function(){
		this.garou.nombre = this.xml.getFirstText('nombre');
		this.garou.jugador = this.xml.getFirstText('jugador');
		this.garou.cronica = this.xml.getFirstText('cronica');
		this.garou.raza = getRazaByValue(this.xml.getFirstAtt('raza', 'id'));
		this.garou.auspicio = getAuspicioByValue(this.xml.getFirstAtt('auspicio', 'id'));
		this.garou.tribu = getTribuByValue(this.xml.getFirstAtt('tribu', 'id'));
		this.garou.manada = this.xml.getFirstText('manada');
		this.garou.totem = this.xml.getFirstText('totem');
		this.garou.concepto = this.xml.getFirstText('concepto');
		this.garou.naturaleza = getNaturalezaByValue(this.xml.getFirstAtt('naturaleza', 'id'));
		this.garou.conducta = getConductaByValue(this.xml.getFirstAtt('conducta', 'id'));
	}
	
	this.obtenerAtributos = function(){
		this.garou.fisicos.tipo = getAtributoByValue(this.xml.getFirstAtt('fisicos', 'tipo'));
		this.garou.fisicos.fuerza = this.xml.getFirstText('fuerza');
		this.garou.fisicos.destreza = this.xml.getFirstText('destreza');
		this.garou.fisicos.resistencia = this.xml.getFirstText('resistencia');
		this.garou.sociales.tipo = getAtributoByValue(this.xml.getFirstAtt('sociales', 'tipo'));
		this.garou.sociales.carisma = this.xml.getFirstText('carisma');
		this.garou.sociales.manipulacion = this.xml.getFirstText('manipulacion');
		this.garou.sociales.apariencia = this.xml.getFirstText('apariencia');
		this.garou.mentales.tipo = getAtributoByValue(this.xml.getFirstAtt('mentales', 'tipo'));
		this.garou.mentales.percepcion = this.xml.getFirstText('percepcion');
		this.garou.mentales.inteligencia = this.xml.getFirstText('inteligencia');
		this.garou.mentales.astucia = this.xml.getFirstText('astucia');
	}
	
	this.obtenerHabilidades = function(){
		this.garou.talentos.tipo = getHabilidadByValue(this.xml.getFirstAtt('talentos', 'tipo'));
		this.garou.talentos.alerta = this.xml.getFirstText('alerta');
		this.garou.talentos.atletismo = this.xml.getFirstText('atletismo');
		this.garou.talentos.callejeo = this.xml.getFirstText('callejeo');
		this.garou.talentos.empatia = this.xml.getFirstText('empatia');
		this.garou.talentos.esquivar = this.xml.getFirstText('esquivar');
		this.garou.talentos.expresion = this.xml.getFirstText('expresion');
		this.garou.talentos.impulsoPrimario = this.xml.getFirstText('impulsoPrimario');
		this.garou.talentos.intimidacion = this.xml.getFirstText('intimidacion');
		this.garou.talentos.pelea = this.xml.getFirstText('pelea');
		this.garou.talentos.subterfugio = this.xml.getFirstText('subterfugio');
		this.garou.tecnicas.tipo = getHabilidadByValue(this.xml.getFirstAtt('tecnicas', 'tipo'));
		this.garou.tecnicas.armasCC = this.xml.getFirstText('armasCC');
		this.garou.tecnicas.armasFuego = this.xml.getFirstText('armasFuego');
		this.garou.tecnicas.conducir = this.xml.getFirstText('conducir');
		this.garou.tecnicas.etiqueta = this.xml.getFirstText('etiqueta');
		this.garou.tecnicas.interpretacion = this.xml.getFirstText('interpretacion');
		this.garou.tecnicas.liderazgo = this.xml.getFirstText('liderazgo');
		this.garou.tecnicas.reparaciones = this.xml.getFirstText('reparaciones');
		this.garou.tecnicas.sigilo = this.xml.getFirstText('sigilo');
		this.garou.tecnicas.supervivencia = this.xml.getFirstText('supervivencia');
		this.garou.tecnicas.tratoAnimales = this.xml.getFirstText('tratoAnimales');
		this.garou.conocimientos.tipo = getHabilidadByValue(this.xml.getFirstAtt('conocimientos', 'tipo'));
		this.garou.conocimientos.ciencias = this.xml.getFirstText('ciencias');
		this.garou.conocimientos.enigmas = this.xml.getFirstText('enigmas');
		this.garou.conocimientos.informatica = this.xml.getFirstText('informatica');
		this.garou.conocimientos.investigacion = this.xml.getFirstText('investigacion');
		this.garou.conocimientos.leyes = this.xml.getFirstText('leyes');
		this.garou.conocimientos.linguistica = this.xml.getFirstText('linguistica');
		this.garou.conocimientos.medicina = this.xml.getFirstText('medicina');
		this.garou.conocimientos.ocultismo = this.xml.getFirstText('ocultismo');
		this.garou.conocimientos.politica = this.xml.getFirstText('politica');
		this.garou.conocimientos.rituales = this.xml.getFirstText('rituales');
	}

	this.obtenerTrasfondos = function(){
		var data = this.xml.childrens('trasfondo');
		if (data != null){
			for (var i = 0; i < data.length; i++){
				var trasfondo = new Trasfondo();
					trasfondo.tipo = getTrasfondoByValue(data[i].attributes.getNamedItem('id').nodeValue);
					trasfondo.valor = data[i].childNodes[3].childNodes[0].nodeValue;
				this.garou.trasfondos.push(trasfondo);
			}				
		}
	}
	
	this.obtenerDones = function(){
		var data = this.xml.childrens('don');
		if (data != null){
			for (var i = 0; i < data.length; i++){
				var don = new Don();
					don.tipo = getDonByValue(data[i].attributes.getNamedItem('id').nodeValue);
					don.camino = getCaminoByValue(data[i].childNodes[3].childNodes[0].nodeValue);
					don.rango = getRangoByValue(data[i].childNodes[5].childNodes[0].nodeValue);
				this.garou.dones.push(don);	
			}
		}
	}
	
	this.obtenerRango = function(){
		this.garou.rango = getRangoByValue(this.xml.getFirstAtt('rangoGarou', 'id'));
		this.garou.renombre.gloria = this.xml.getFirstText('gloria');
		this.garou.renombre.honor = this.xml.getFirstText('honor');
		this.garou.renombre.sabiduria = this.xml.getFirstText('sabiduria');
	}
	
	this.obtenerDatosFinales = function(){
		this.garou.rabia = this.xml.getFirstText('rabia');
		this.garou.gnosis = this.xml.getFirstText('gnosis');
		this.garou.fuerzaVoluntad = this.xml.getFirstText('fuerzaVoluntad');
	}
	
	this.obtenerFase = function(){
		this.garou.fase = new Fase();
		this.garou.fase.gratuitosMax = this.xml.getFirstText('gratuitosMax');
		this.garou.fase.gratuitosAct = this.xml.getFirstText('gratuitosAct');
		this.garou.fase.experienciaMax = this.xml.getFirstText('experienciaMax');
		this.garou.fase.experienciaAct = this.xml.getFirstText('experienciaAct');
	}
	
	//Genera un objeto Blob con los datos de garou en un archivo XML
	this.generarXmlGarou = function() {
		var texto = [];
		this.xml.generarCabeceraXml(texto);
		this.xml.generarAperturaElementoXml(texto, 'garou');
			this.generarCabecera(texto);
			this.generarAtributos(texto);
			this.generarHabilidades(texto);
			this.generarTrasfondos(texto);
			this.generarDones(texto);
			this.generarRango(texto);
			this.generarFinales(texto);
		this.xml.generarCerraduraElementoXml(texto, 'garou');
		
		//No olvidemos especificar el tipo MIME correcto :)
		return new Blob(texto, {
			type: 'application/xml'
		})
	}
	
	this.generarCabecera = function(aTexto){
		//cabecera
		this.xml.generarElementoSimpleXml(aTexto, 'nombre', this.garou.nombre);
		this.xml.generarElementoSimpleXml(aTexto, 'jugador', this.garou.jugador);
		this.xml.generarElementoSimpleXml(aTexto, 'cronica', this.garou.cronica);
		this.xml.generarElementoSimpleXml(aTexto, 'raza', this.garou.raza.name, new Array({'nombre':'id', 'valor':this.garou.raza.value}));
		this.xml.generarElementoSimpleXml(aTexto, 'auspicio', this.garou.auspicio.name, new Array({'nombre':'id', 'valor':this.garou.auspicio.value}));
		this.xml.generarElementoSimpleXml(aTexto, 'tribu', this.garou.tribu.name, new Array({'nombre':'id', 'valor':this.garou.tribu.value}));
		this.xml.generarElementoSimpleXml(aTexto, 'manada', this.garou.manada);
		this.xml.generarElementoSimpleXml(aTexto, 'totem', this.garou.totem);
		this.xml.generarElementoSimpleXml(aTexto, 'concepto', this.garou.concepto);
		this.xml.generarElementoSimpleXml(aTexto, 'naturaleza', this.garou.naturaleza.name, new Array({'nombre':'id', 'valor':this.garou.naturaleza.value}));
		this.xml.generarElementoSimpleXml(aTexto, 'conducta', this.garou.conducta.name, new Array({'nombre':'id', 'valor':this.garou.conducta.value}));
	}
	
	this.generarAtributos = function(aTexto){
		//atributos
		this.xml.generarAperturaElementoXml(aTexto, 'atributos');
			this.xml.generarAperturaElementoXml(aTexto, 'fisicos', new Array({'nombre':'tipo', 'valor':this.garou.fisicos.tipo.value}));
				this.xml.generarElementoSimpleXml(aTexto, 'fuerza', this.garou.fisicos.fuerza);
				this.xml.generarElementoSimpleXml(aTexto, 'destreza', this.garou.fisicos.destreza);
				this.xml.generarElementoSimpleXml(aTexto, 'resistencia', this.garou.fisicos.resistencia);
			this.xml.generarCerraduraElementoXml(aTexto, 'fisicos');
			this.xml.generarAperturaElementoXml(aTexto, 'sociales', new Array({'nombre':'tipo', 'valor':this.garou.sociales.tipo.value}));
				this.xml.generarElementoSimpleXml(aTexto, 'carisma', this.garou.sociales.carisma);
				this.xml.generarElementoSimpleXml(aTexto, 'manipulacion', this.garou.sociales.manipulacion);
				this.xml.generarElementoSimpleXml(aTexto, 'apariencia', this.garou.sociales.apariencia);
			this.xml.generarCerraduraElementoXml(aTexto, 'sociales');
			this.xml.generarAperturaElementoXml(aTexto, 'mentales', new Array({'nombre':'tipo', 'valor':this.garou.mentales.tipo.value}));
				this.xml.generarElementoSimpleXml(aTexto, 'percepcion', this.garou.mentales.percepcion);
				this.xml.generarElementoSimpleXml(aTexto, 'inteligencia', this.garou.mentales.inteligencia);
				this.xml.generarElementoSimpleXml(aTexto, 'astucia', this.garou.mentales.astucia);
			this.xml.generarCerraduraElementoXml(aTexto, 'mentales');
		this.xml.generarCerraduraElementoXml(aTexto, 'atributos');
	}
	
	this.generarHabilidades = function(aTexto){
		//Habilidades
		this.xml.generarAperturaElementoXml(aTexto, 'habilidades');
			this.xml.generarAperturaElementoXml(aTexto, 'talentos', new Array({'nombre':'tipo', 'valor':this.garou.talentos.tipo.value}));
				this.xml.generarElementoSimpleXml(aTexto, 'alerta', this.garou.talentos.alerta);
				this.xml.generarElementoSimpleXml(aTexto, 'atletismo', this.garou.talentos.atletismo);
				this.xml.generarElementoSimpleXml(aTexto, 'callejeo', this.garou.talentos.callejeo);
				this.xml.generarElementoSimpleXml(aTexto, 'empatia', this.garou.talentos.empatia);
				this.xml.generarElementoSimpleXml(aTexto, 'esquivar', this.garou.talentos.esquivar);
				this.xml.generarElementoSimpleXml(aTexto, 'expresion', this.garou.talentos.expresion);
				this.xml.generarElementoSimpleXml(aTexto, 'impulsoPrimario', this.garou.talentos.impulsoPrimario);
				this.xml.generarElementoSimpleXml(aTexto, 'intimidacion', this.garou.talentos.intimidacion);
				this.xml.generarElementoSimpleXml(aTexto, 'pelea', this.garou.talentos.pelea);
				this.xml.generarElementoSimpleXml(aTexto, 'subterfugio', this.garou.talentos.subterfugio);
			this.xml.generarCerraduraElementoXml(aTexto, 'talentos');
			this.xml.generarAperturaElementoXml(aTexto, 'tecnicas', new Array({'nombre':'tipo', 'valor':this.garou.tecnicas.tipo.value}));
				this.xml.generarElementoSimpleXml(aTexto, 'armasCC', this.garou.tecnicas.armasCC);
				this.xml.generarElementoSimpleXml(aTexto, 'armasFuego', this.garou.tecnicas.armasFuego);
				this.xml.generarElementoSimpleXml(aTexto, 'conducir', this.garou.tecnicas.conducir);
				this.xml.generarElementoSimpleXml(aTexto, 'etiqueta', this.garou.tecnicas.etiqueta);
				this.xml.generarElementoSimpleXml(aTexto, 'interpretacion', this.garou.tecnicas.interpretacion);
				this.xml.generarElementoSimpleXml(aTexto, 'liderazgo', this.garou.tecnicas.liderazgo);
				this.xml.generarElementoSimpleXml(aTexto, 'reparaciones', this.garou.tecnicas.reparaciones);
				this.xml.generarElementoSimpleXml(aTexto, 'sigilo', this.garou.tecnicas.sigilo);
				this.xml.generarElementoSimpleXml(aTexto, 'supervivencia', this.garou.tecnicas.supervivencia);
				this.xml.generarElementoSimpleXml(aTexto, 'tratoAnimales', this.garou.tecnicas.tratoAnimales);
			this.xml.generarCerraduraElementoXml(aTexto, 'tecnicas');
			this.xml.generarAperturaElementoXml(aTexto, 'conocimientos', new Array({'nombre':'tipo', 'valor':this.garou.conocimientos.tipo.value}));
				this.xml.generarElementoSimpleXml(aTexto, 'ciencias', this.garou.conocimientos.ciencias);
				this.xml.generarElementoSimpleXml(aTexto, 'enigmas', this.garou.conocimientos.enigmas);
				this.xml.generarElementoSimpleXml(aTexto, 'informatica', this.garou.conocimientos.informatica);
				this.xml.generarElementoSimpleXml(aTexto, 'investigacion', this.garou.conocimientos.investigacion);
				this.xml.generarElementoSimpleXml(aTexto, 'leyes', this.garou.conocimientos.leyes);
				this.xml.generarElementoSimpleXml(aTexto, 'linguistica', this.garou.conocimientos.linguistica);
				this.xml.generarElementoSimpleXml(aTexto, 'medicina', this.garou.conocimientos.medicina);
				this.xml.generarElementoSimpleXml(aTexto, 'ocultismo', this.garou.conocimientos.ocultismo);
				this.xml.generarElementoSimpleXml(aTexto, 'politica', this.garou.conocimientos.politica);
				this.xml.generarElementoSimpleXml(aTexto, 'rituales', this.garou.conocimientos.rituales);
			this.xml.generarCerraduraElementoXml(aTexto, 'conocimientos');
		this.xml.generarCerraduraElementoXml(aTexto, 'habilidades');
	}
	
	this.generarTrasfondos = function(aTexto){
		//trasfondos
		this.xml.generarAperturaElementoXml(aTexto, 'trasfondos');
		for (var i = 0; i < this.garou.trasfondos.length; i++){
			this.xml.generarAperturaElementoXml(aTexto, 'trasfondo', new Array({'nombre':'id', 'valor':this.garou.trasfondos[i].tipo.value}));
				this.xml.generarElementoSimpleXml(aTexto, 'nombre', this.garou.trasfondos[i].tipo.name);
				this.xml.generarElementoSimpleXml(aTexto, 'valor', this.garou.trasfondos[i].valor);
			this.xml.generarCerraduraElementoXml(aTexto, 'trasfondo');
		}
		this.xml.generarCerraduraElementoXml(aTexto, 'trasfondos');
	}
	
	this.generarDones = function(aTexto){
		//dones
		this.xml.generarAperturaElementoXml(aTexto, 'dones');
		for (var i = 0; i < this.garou.dones.length; i++){
			this.xml.generarAperturaElementoXml(aTexto, 'don', this.garou.dones[i].name, new Array({'nombre':'id', 'valor':this.garou.dones[i].tipo.value}));
				this.xml.generarElementoSimpleXml(aTexto, 'nombre', this.garou.dones[i].tipo.name);
				this.xml.generarElementoSimpleXml(aTexto, 'camino', this.garou.dones[i].camino.value);
				this.xml.generarElementoSimpleXml(aTexto, 'rango', this.garou.dones[i].rango.value);
			this.xml.generarCerraduraElementoXml(aTexto, 'don');
		}
		this.xml.generarCerraduraElementoXml(aTexto, 'dones');
	}
	
	this.generarRango = function(aTexto){
		//rango y renombre
		this.xml.generarElementoSimpleXml(aTexto, 'rangoGarou', this.garou.rango.name, new Array({'nombre':'id', 'valor':this.garou.rango.value}));
		this.xml.generarAperturaElementoXml(aTexto, 'renombre');
			this.xml.generarElementoSimpleXml(aTexto, 'gloria', this.garou.renombre.gloria);
			this.xml.generarElementoSimpleXml(aTexto, 'honor', this.garou.renombre.honor);
			this.xml.generarElementoSimpleXml(aTexto, 'sabiduria', this.garou.renombre.sabiduria);
		this.xml.generarCerraduraElementoXml(aTexto, 'renombre');
	}
	
	this.generarFinales = function(aTexto){
		//datos finales
		this.xml.generarElementoSimpleXml(aTexto, 'rabia', this.garou.rabia);
		this.xml.generarElementoSimpleXml(aTexto, 'gnosis', this.garou.gnosis);
		this.xml.generarElementoSimpleXml(aTexto, 'fuerzaVoluntad', this.garou.fuerzaVoluntad);
	}

	this.generarFase = function(aTexto){
		this.xml.generarAperturaElementoXml(aTexto, 'fase');
			this.xml.generarElementoSimpleXml(aTexto, 'gratuitosMax', this.garou.fase.gratuitosMax);
			this.xml.generarElementoSimpleXml(aTexto, 'gratuitosAct', this.garou.fase.gratuitosAct);
			this.xml.generarElementoSimpleXml(aTexto, 'experienciaMax', this.garou.fase.experienciaMax);
			this.xml.generarElementoSimpleXml(aTexto, 'experienciaAct', this.garou.fase.experienciaAct);
		this.xml.generarCerraduraElementoXml(aTexto, 'fase');
	}
}