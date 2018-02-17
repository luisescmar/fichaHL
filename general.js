/**************************************************************************/
/***************************General functions******************************/
/**************************************************************************/
function getId(aId){
	return document.getElementById(aId);
}

function ocultar(aId){
	getId(aId).style.display = 'none';
}

function mostrar(aId){
	getId(aId).style.display = 'block';
}

function activar(aId){
	getId(aId).style.disabled = true;
}

function desactivar(aId){
	getId(aId).style.disabled = false;
}

function mostrarElemento(aElemento){
	aElemento.style.display = 'block';
}

/*añade a capa la clase nombre*/
function addClass(capa, nombre){
    var clase='';
    if (navigator.appName.indexOf("Explorer") != -1){
        clase=capa.getAttribute('className');
        if(clase==null){
            clase=nombre;
        }else{
            clase+=' '+nombre;
        }
        capa.setAttribute('className',clase);
    }else{
        clase=capa.getAttribute('class');
        if(clase==null){
            clase=nombre;
        }else{
            clase+=' '+nombre;
        }
        capa.setAttribute('class',clase);
    }
}

/*esta funcion kita la clase nombre de capa*/
function deleteClass(capa, nombre){
    var clase='';
    if (navigator.appName.indexOf("Explorer") != -1){
        clase=capa.getAttribute('className');
        if(clase==null){
            clase='';
        }else{
            //clase=clase.substr(0,(clase.length-(nombre.length+1)));
            var lista=clase.split(" ");
            clase="";
            for (var cont=0; cont<lista.length; cont++){
                if (lista[cont]!=nombre){
                    clase+=lista[cont]+" ";
                }
            }
        }
        capa.setAttribute('className',clase);
    }else{
        clase=capa.getAttribute('class');
        if(clase==null){
            clase='';
        }else{
            //clase=clase.substr(0,(clase.length-(nombre.length+1)));
            var lista=clase.split(" ");
            clase="";
            for (var cont=0; cont<lista.length; cont++){
                if (lista[cont]!=nombre){
                    clase+=lista[cont]+" ";
                }
            }
        }
        capa.setAttribute('class',clase);
    }
}

/*esta funcion quita todas las clases nombre de capa*/
function vaciarClass(capa){
    if (navigator.appName.indexOf("Explorer") != -1){
        capa.setAttribute('className',"");
    }else{
        capa.setAttribute('class',"");
    }
}

/*le pasas un control tipo listbox y lo recorre devolviendo el valor que corresponda.
En caso de no tener ninguno, devuelve la cadena vacía*/
function getListBoxSelectedValue(ctrl){
    var resultado="";
    for(i=0;i<ctrl.length;i++){
        if(ctrl[i].selected){
            resultado=ctrl[i].value;
        }
    }
    
    return resultado;
}

/*funcion que nos permite realizar la clonación de objetos y funciones (en vez de crear referencias)*/
function clone(obj){
    if(obj == null || typeof(obj) != 'object')
        return obj;

    var temp = new obj.constructor(); // changed (twice)
    for(var key in obj)
        temp[key] = clone(obj[key]);

    return temp;
}

function include_once (filename) {
	// http://kevin.vanzonneveld.net
	// +   original by: Legaev Andrey
	// +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
	// +   improved by: Michael White (http://getsprink.com)
	// +      input by: Brett Zamir (http://brett-zamir.me)
	// +   bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
	// +   bugfixed by: Brett Zamir (http://brett-zamir.me)
	// -    depends on: include
	// %        note 1: Uses global: php_js to keep track of included files (though private static variable in namespaced version)
	// *     example 1: include_once('http://www.phpjs.org/js/phpjs/_supporters/pj_test_supportfile_2.js');
	// *     returns 1: true
	var cur_file = {};
	cur_file[this.window.location.href] = 1;

	// BEGIN STATIC
	try { // We can't try to access on window, since it might not exist in some environments, and if we use "this.window"
		//    we risk adding another copy if different window objects are associated with the namespaced object
		php_js_shared; // Will be private static variable in namespaced version or global in non-namespaced
		//   version since we wish to share this across all instances
	} catch (e) {
		php_js_shared = {};
	}
	// END STATIC
	if (!php_js_shared.includes) {
		php_js_shared.includes = cur_file;
	}
	if (!php_js_shared.includes[filename]) {
		if (this.include(filename)) {
			return true;
		}
	} else {
		return true;
	}
	return false;
}

/*tamaño completo del area de ventana (SI que pilla lo que se esconde si hay barras de desplazamiento)*/
function completeSizes(){ //get window viewpoint numbers
    var ie=document.all && !window.opera;
    var domclientWidth=document.documentElement && parseInt(document.documentElement.clientWidth, 10) || 100000; //Preliminary doc width in non IE browsers

    var standardbody = (document.compatMode=="CSS1Compat")? document.documentElement : document.body; //create reference to common "body" across doctypes
    var scroll_top = (ie)? standardbody.scrollTop : window.pageYOffset;
    var scroll_left = (ie)? standardbody.scrollLeft : window.pageXOffset;
    var docwidth = (ie)? standardbody.clientWidth : (/Safari/i.test(navigator.userAgent))? window.innerWidth : Math.min(domclientWidth, window.innerWidth-16);
    var docheight = (ie)? standardbody.clientHeight: window.innerHeight;                //altura qeu solo tiene en cuenta la altura QUE SE VE
    //var docheightcomplete = (standardbody.offsetHeight>standardbody.scrollHeight)? standardbody.offsetHeight : standardbody.scrollHeight    //altura que tiene en cuenta TAMBIEN LO QUE NO SE VE
    var docheightcomplete = 0;
    
    //altura y anchura que tiene en cuenta TAMBIEN LO QUE NO SE VE
    //Feb'13: Modificación de Javi que recalcula correctamente los tamaños (anchura y fix Chrome)
    var esMovil = (navigator.platform == 'iPad' || navigator.platform == 'iPhone' || navigator.platform == 'iPod');
    if ((!esMovil) && (typeof window.innerWidth != 'undefined')){ 
        //Get witdth from vertical & horizontal scroll, with 0px has no scroll   
        var scroll_verti = (standardbody.scrollHeight > window.innerHeight)? window.innerWidth - standardbody.clientWidth : 0; 
        var scroll_horiz = (standardbody.scrollWidth > window.innerWidth)? window.innerWidth - standardbody.clientWidth : 0;
        docheightcomplete = (scroll_verti)? standardbody.scrollHeight : window.innerHeight - scroll_horiz;     
        docwidth = (scroll_horiz)? standardbody.scrollWidth : window.innerWidth - scroll_verti;
    }else{  // para navegadores como IExplorer que no conocesn el innerWidth
        docheightcomplete = (standardbody.offsetHeight>standardbody.scrollHeight)? standardbody.offsetHeight : standardbody.scrollHeight;
        if (standardbody.offsetWidth<standardbody.scrollWidth) docwidth = standardbody.scrollWidth;
    } 
        
    return{
        standardBody: standardbody,
        scrollTop: scroll_top,
        scrollLeft: scroll_left,
        docWidth: docwidth,
        docHeight: docheight,
        docHeightComplete: docheightcomplete
    }
}

function getPath(){
	var path = document.URL;

	var index = path.lastIndexOf('appLC_Simplex/');
	if (index != -1){
		index += 14;
	}
	path = path.substring(0, index);

	return path;
}

function getParameters(){
	var cadGET = location.search.substr(1,location.search.length);
	var arrGET = cadGET.split("&");
	var asocGET = new Array();
	var variable = "";
	var valor = "";
	for (var i = 0; i < arrGET.length; i++){
		var aux = arrGET[i].split("=");
		variable = aux[0];
		valor = aux[1];
		asocGET[variable] = valor;
	}
	return asocGET;
} 

function eliminarRepetidos(arr) {
	var out = [];
	var obj = {};

	for (var i = 0; i < arr.length; i++) {
		obj[arr[i]] = 0;
	}
	for (var i in obj) {
		out.push(i);
	}
	return out;
}

/*le pasas un control tipo listbox y lo recorre devolviendo el valor que corresponda.
En caso de no tener ninguno, devuelve la cadena vacía*/
function getListBoxSelectedValue(ctrl){
    var resultado="";
    for(i=0;i<ctrl.length;i++){
        if(ctrl[i].selected){
            resultado=ctrl[i].value;
        }
    }
    
    return resultado;
}

/*le pasas un control tipo radio button y lo recorre devolviendo el valor que corresponda.
En caso de no tener ninguno, devuelve la cadena vacía*/
function getRadioButtonSelectedValue(ctrl){
    var resultado="";
    for(i=0;i<ctrl.length;i++){
        if(ctrl[i].checked){
            resultado=ctrl[i].value;
        }
    }
    
    return resultado;
}

/*buscar lista de elementos por una expresión regular sobre los ids.
Ejemplos de uso:
	var divCuadros = getElementsByRegexId(/_cuadro.* /, "div");   
	var tousLesCuadros = getElementsByRegexId(/_cuadro.* /);*/
function getElementsByRegexId(regexpParam, tagParam) {   
	// Si no se especifica el nombre de una etiqueta, se busca en todas las etiquetas   
	tagParam = (tagParam === undefined) ? '*' : tagParam;   
	var elementsTable = new Array();   
	for(var i=0 ; i<document.getElementsByTagName(tagParam).length ; i++) {   
			if(document.getElementsByTagName(tagParam)[i].id && document.getElementsByTagName(tagParam)[i].id.match(regexpParam)) {   
			elementsTable.push(document.getElementsByTagName(tagParam)[i]);   
		}   
	}   
	return elementsTable;   
}

//Función de ayuda: "escapa" las entidades XML necesarias para los valores (y atributos) del archivo XML
function escaparXML(cadena) {
	if (typeof cadena !== 'string') {
		if (typeof cadena !== 'number')
			return '';
		else
			return cadena + '';
	};
	cadena = cadena.replace('&', '&amp;')
		.replace('<', '&lt;')
		.replace('>', '&gt;')
		.replace('"', '&quot;');
	return cadena;
}

/* Genera y sirve un fichero

Ejemplo de uso:

1. Se genera el texto que vamos a crear
	var texto = [];
		texto.push('<?xml version="1.0" encoding="UTF-8" ?>\n');
		texto.push('<garou>\n');
		texto.push('\t<nombre>');
		texto.push('asdf');
		texto.push('</nombre>\n');
		texto.push('</garou>');
		//El contructor de Blob requiere un Array en el primer parámetro
		//asíue no es necesario usar toString. el segundo parámetro
		//es el tipo MIME del archivo
		return new Blob(texto, {
			type: 'application/xml'
		});
		//No olvidemos especificar el tipo MIME correcto, sea xml, texto... :)
		return new Blob(texto, {
			type: 'text/plain'
		});

2. Así se asigna al botón
document.getElementById('boton-xml').addEventListener('click', function () {
    var datos = obtenerDatos();
    descargarArchivo(generarXml(datos), 'archivo.xml');
}, false);*/		
function descargarArchivo(contenidoEnBlob, nombreArchivo) {
	var reader = new FileReader();
	reader.onload = function (event) {
		var save = document.createElement('a');
		save.href = event.target.result;
		save.target = '_blank';
		save.download = nombreArchivo || 'archivo.dat';
		var clicEvent = new MouseEvent('click', {
			'view': window,
				'bubbles': true,
				'cancelable': true
		})
		save.dispatchEvent(clicEvent);
		(window.URL || window.webkitURL).revokeObjectURL(save.href);
	}
	reader.readAsDataURL(contenidoEnBlob);
}

function mostrarTabla(tabla){
    if (navigator.appName.indexOf("Explorer") != -1) {
        getId(tabla).style.display="block";
    }else{
        getId(tabla).style.display="table";
    }
}