/***************************/
/**********CONSTANTES*******/
/***************************/
//constantes
function Constants(){
	this.RASGO = 5;
	this.RASGOEXT = 10;
	this.MAXTRASFONDO = 5;
	this.RUTAIMG = 'img/';
	this.GRATUITOS = [];
		this.GRATUITOS.BASE = 15;
		this.GRATUITOS.ATRIB = 5;
		this.GRATUITOS.HAB = 2;
		this.GRATUITOS.TRASF = 1;
		this.GRATUITOS.DON = 7;
		this.GRATUITOS.RABIA = 1;
		this.GRATUITOS.GNOSIS = 2;
		this.GRATUITOS.FVOL = 1;
	this.EXPERIENCIA = [];
		this.EXPERIENCIA.ATRIB = 4;
		this.EXPERIENCIA.FIRSTHAB = 3;
		this.EXPERIENCIA.HAB = 2;
		this.EXPERIENCIA.DON = 5;
		this.EXPERIENCIA.DONAJENO = 7;
		this.EXPERIENCIA.RABIA = 1;
		this.EXPERIENCIA.GNOSIS = 2;
		this.EXPERIENCIA.FVOL = 1;
	this.MAXDONESRANGO = 1;
}
var CONST = new Constants();

/***************************/
/**********CLASES***********/
/***************************/
//dones según raza, auspicio y tribu
function Dones(){
	this.donesRaza = new Array();
		//hominido
		this.donesRaza[1] = new Array();
			this.donesRaza[1][1] = new Array(204,237,255);				//rango 1
			this.donesRaza[1][2] = new Array(160,186,221);				//rango 2
			this.donesRaza[1][3] = new Array(161,272);					//rango 3
			this.donesRaza[1][4] = new Array(49,266);					//rango 4
			this.donesRaza[1][5] = new Array(18,74);					//rango 5
			this.donesRaza[1][6] = new Array();							//rango 6
		//metis
		this.donesRaza[2] = new Array();
			this.donesRaza[2][1] = new Array(68,169,223,296);			//rango 1
			this.donesRaza[2][2] = new Array(203,208); 					//rango 2
			this.donesRaza[2][3] = new Array(131,144,234); 				//rango 3
			this.donesRaza[2][4] = new Array(27,98); 					//rango 4
			this.donesRaza[2][5] = new Array(88,199); 					//rango 5
			this.donesRaza[2][6] = new Array();							//rango 6
		//lupus
		this.donesRaza[3] = new Array();
			this.donesRaza[3][1] = new Array(287,293,294); 				//rango 1
			this.donesRaza[3][2] = new Array(240,298); 					//rango 2
			this.donesRaza[3][3] = new Array(55,227,259); 				//rango 3
			this.donesRaza[3][4] = new Array(263,282,323); 				//rango 4
			this.donesRaza[3][5] = new Array(43,89); 					//rango 5
			this.donesRaza[3][6] = new Array();							//rango 6
	this.donesAuspicio = new Array();
		//ragabash
		this.donesAuspicio[1] = new Array();
			this.donesAuspicio[1][1] = new Array(3,67,233,236);			//rango 1
			this.donesAuspicio[1][2] = new Array(54,121,245,293);		//rango 2
			this.donesAuspicio[1][3] = new Array(2,91,178,260,279);		//rango 3
			this.donesAuspicio[1][4] = new Array(34,70);				//rango 4
			this.donesAuspicio[1][5] = new Array(132,219,325);			//rango 5
			this.donesAuspicio[1][6] = new Array();						//rango 6
		//theurge
		this.donesAuspicio[2] = new Array();
			this.donesAuspicio[2][1] = new Array(187,281,296);			//rango 1
			this.donesAuspicio[2][2] = new Array(64,227,242,326);		//rango 2
			this.donesAuspicio[2][3] = new Array(103,115,265,291,327);	//rango 3
			this.donesAuspicio[2][4] = new Array(6,14,116,170);			//rango 4
			this.donesAuspicio[2][5] = new Array(112,198,314);			//rango 5
			this.donesAuspicio[2][6] = new Array();						//rango 6
		//philodox
		this.donesAuspicio[3] = new Array();
			this.donesAuspicio[3][1] = new Array(235,239,274,319);		//rango 1
			this.donesAuspicio[3][2] = new Array(172,175,220,277);		//rango 2
			this.donesAuspicio[3][3] = new Array(268,285,297);			//rango 3
			this.donesAuspicio[3][4] = new Array(241,262,311);			//rango 4
			this.donesAuspicio[3][5] = new Array(57,225);				//rango 5
			this.donesAuspicio[3][6] = new Array();						//rango 6
		//galliard
		this.donesAuspicio[4] = new Array();
			this.donesAuspicio[4][1] = new Array(144,174,185);			//rango 1
			this.donesAuspicio[4][2] = new Array(84,145,155,176,200);	//rango 2
			this.donesAuspicio[4][3] = new Array(44,45,231);			//rango 3
			this.donesAuspicio[4][4] = new Array(267,305);				//rango 4
			this.donesAuspicio[4][5] = new Array(114,171,310);			//rango 5
			this.donesAuspicio[4][6] = new Array();						//rango 6
		//ahroun
		this.donesAuspicio[5] = new Array();
			this.donesAuspicio[5][1] = new Array(133,159,280);			//rango 1
			this.donesAuspicio[5][2] = new Array(65,87,109,300,320);	//rango 2
			this.donesAuspicio[5][3] = new Array(62,71,134,269);		//rango 3
			this.donesAuspicio[5][4] = new Array(25,211);				//rango 4
			this.donesAuspicio[5][5] = new Array(93,102);				//rango 5
			this.donesAuspicio[5][6] = new Array();						//rango 6
	this.donesTribu = new Array();
		//camada de fenris
		this.donesTribu[1] = new Array();
			this.donesTribu[1][1] = new Array(67,133,274,284);			//rango 1
			this.donesTribu[1][2] = new Array(79,143,253,321);			//rango 2
			this.donesTribu[1][3] = new Array(214,261,288);				//rango 3
			this.donesTribu[1][4] = new Array(46,141,167,264);			//rango 4
			this.donesTribu[1][5] = new Array(101,173);					//rango 5
			this.donesTribu[1][6] = new Array();						//rango 6
		//caminantes silenciosos
		this.donesTribu[2] = new Array();
			this.donesTribu[2][1] = new Array(244,296,303,315);			//rango 1
			this.donesTribu[2][2] = new Array(121,126,166,186);			//rango 2
			this.donesTribu[2][3] = new Array(5,99,188,184);			//rango 3
			this.donesTribu[2][4] = new Array(17,78,312,316);			//rango 4
			this.donesTribu[2][5] = new Array(9,181);					//rango 5
			this.donesTribu[2][6] = new Array();						//rango 6
		//colmillos plateados
		this.donesTribu[3] = new Array();
			this.donesTribu[3][1] = new Array(7,190,232,296);			//rango 1
			this.donesTribu[3][2] = new Array(15,104,119,246);			//rango 2
			this.donesTribu[3][3] = new Array(134,168);					//rango 3
			this.donesTribu[3][4] = new Array(36,85,152);				//rango 4
			this.donesTribu[3][5] = new Array(158,318,328);				//rango 5
			this.donesTribu[3][6] = new Array();						//rango 6
		//contemplaestrellas
		this.donesTribu[4] = new Array();
			this.donesTribu[4][1] = new Array(105,280,296);				//rango 1
			this.donesTribu[4][2] = new Array(16,128);					//rango 2
			this.donesTribu[4][3] = new Array(4,52,138);				//rango 3
			this.donesTribu[4][4] = new Array(14,58,113,139);			//rango 4
			this.donesTribu[4][5] = new Array(22,81,286);				//rango 5
			this.donesTribu[4][6] = new Array();						//rango 6
		//danzantes de la espiral negra
		this.donesTribu[5] = new Array();
			this.donesTribu[5][1] = new Array(38,135,254,275,296,307);	//rango 1
			this.donesTribu[5][2] = new Array(24,28,201,258);			//rango 2
			this.donesTribu[5][3] = new Array(51,72,129,250,251,306);	//rango 3
			this.donesTribu[5][4] = new Array(1,90,151,192,317);		//rango 4
			this.donesTribu[5][5] = new Array(31,37,125,230);			//rango 5
			this.donesTribu[5][6] = new Array();						//rango 6
		//fianna
		this.donesTribu[6] = new Array();
			this.donesTribu[6][1] = new Array(202,255,275);				//rango 1
			this.donesTribu[6][2] = new Array(77,92,256,313);			//rango 2
			this.donesTribu[6][3] = new Array(69,183,189,249,272);		//rango 3
			this.donesTribu[6][4] = new Array(23,48,153,179);			//rango 4
			this.donesTribu[6][5] = new Array(61,97);					//rango 5
			this.donesTribu[6][6] = new Array();						//rango 6
		//furias negras
		this.donesTribu[7] = new Array();
			this.donesTribu[7][1] = new Array(10,257,294,296);			//rango 1
			this.donesTribu[7][2] = new Array(205,270,293);				//rango 2
			this.donesTribu[7][3] = new Array(44,136,197,309);			//rango 3
			this.donesTribu[7][4] = new Array(8,26);					//rango 4
			this.donesTribu[7][5] = new Array(83,123,180,219);			//rango 5
			this.donesTribu[7][6] = new Array();						//rango 6
		//garras rojas
		this.donesTribu[8] = new Array();
			this.donesTribu[8][1] = new Array(100,142,185,236);			//rango 1
			this.donesTribu[8][2] = new Array(20,218,290,293);			//rango 2
			this.donesTribu[8][3] = new Array(120,248,283);				//rango 3
			this.donesTribu[8][4] = new Array(13,30,130,271);			//rango 4
			this.donesTribu[8][5] = new Array(177,182);					//rango 5
			this.donesTribu[8][6] = new Array();						//rango 6
		//hijos de gaia
		this.donesTribu[9] = new Array();
			this.donesTribu[9][1] = new Array(33,56,274,281);			//rango 1
			this.donesTribu[9][2] = new Array(15,40,278);				//rango 2
			this.donesTribu[9][3] = new Array(47,76,108,322);			//rango 3
			this.donesTribu[9][4] = new Array(19,139,140,302,323);		//rango 4
			this.donesTribu[9][5] = new Array(94,148);					//rango 5
			this.donesTribu[9][6] = new Array();						//rango 6
		//moradores del cristal
		this.donesTribu[10] = new Array();
			this.donesTribu[10][1] = new Array(35,60,80,118,255);		//rango 1
			this.donesTribu[10][2] = new Array(39,86,229,295,304);		//rango 2
			this.donesTribu[10][3] = new Array(59,120,124,188,215);		//rango 3
			this.donesTribu[10][4] = new Array(17,306);					//rango 4
			this.donesTribu[10][5] = new Array(41,164,216,243);			//rango 5
			this.donesTribu[10][6] = new Array();						//rango 6
		//roehuesos
		this.donesTribu[11] = new Array();
			this.donesTribu[11][1] = new Array(53,213,238,252,275,292);	//rango 1
			this.donesTribu[11][2] = new Array(50,121,150,154);			//rango 2
			this.donesTribu[11][3] = new Array(11,95,96,195,217,272);	//rango 3
			this.donesTribu[11][4] = new Array(17,157);					//rango 4
			this.donesTribu[11][5] = new Array(276,308);				//rango 5
			this.donesTribu[11][6] = new Array();						//rango 6
		//señores de las sombras
		this.donesTribu[12] = new Array();
			this.donesTribu[12][1] = new Array(29,73,156);				//rango 1
			this.donesTribu[12][2] = new Array(15,247,75);				//rango 2
			this.donesTribu[12][3] = new Array(82,106,163,206,207,222);	//rango 3
			this.donesTribu[12][4] = new Array(1,127,137);				//rango 4
			this.donesTribu[12][5] = new Array(209,228);				//rango 5
			this.donesTribu[12][6] = new Array();						//rango 6
		//uktena
		this.donesTribu[13] = new Array();
			this.donesTribu[13][1] = new Array(187,299,307);			//rango 1
			this.donesTribu[13][2] = new Array(110,111);				//rango 2
			this.donesTribu[13][3] = new Array(117,122,162,193,289,327);//rango 3
			this.donesTribu[13][4] = new Array(12,21,191,212);			//rango 4
			this.donesTribu[13][5] = new Array(224,310);				//rango 5
			this.donesTribu[13][6] = new Array();						//rango 6
		//wendigo
		this.donesTribu[14] = new Array();
			this.donesTribu[14][1] = new Array(42,194,274);				//rango 1
			this.donesTribu[14][2] = new Array(146,210,226,324);		//rango 2
			this.donesTribu[14][3] = new Array(32,66,107,285);			//rango 3
			this.donesTribu[14][4] = new Array(17,149,196);				//rango 4
			this.donesTribu[14][5] = new Array(63,165);					//rango 5
			this.donesTribu[14][6] = new Array();						//rango 6

	this.getDonesRaza = function(aRaza, aRango){
		var resultado = new Array();
		
		if ((aRango != TRango.NONE) && (aRaza != TRaza.NONE)){
			for (var i = 1; i <= aRango.value; i++){
				resultado = resultado.concat(this.donesRaza[aRaza.value][i]);
			}
		}
		
		return resultado;
	}
	
	this.getDonesAuspicio = function(aAuspicio, aRango){
		var resultado = new Array();
		
		if ((aRango != TRango.NONE) && (aAuspicio != TAuspicio.NONE)){
			for (var i = 1; i <= aRango.value; i++){
				resultado = resultado.concat(this.donesAuspicio[aAuspicio.value][i]);
			}
		}
		
		return resultado;
	}
	
	this.getDonesTribu = function(aTribu, aRango){
		var resultado = new Array();
		
		if ((aRango != TRango.NONE) && (aTribu != TTribu.NONE)){
			for (var i = 1; i <= aRango.value; i++){
				resultado = resultado.concat(this.donesTribu[aTribu.value][i]);
			}
		}
		
		return resultado;
	}

	this.getMinRango = function(aValue){
		var resultado = 0;

		for (var i = 1; i <= 3; i++){
			for (var j = 1; j <= 6; j++){
				if (this.donesRaza[i][j].indexOf(aValue) != -1){
					if ((resultado == 0) || (j < resultado))
						resultado = j;
				}
			}
		}
		
		for (var i = 1; i <= 5; i++){
			for (var j = 1; j <= 6; j++){
				if (this.donesAuspicio[i][j].indexOf(aValue) != -1){
					if ((resultado == 0) || (j < resultado))
						resultado = j;
				}
			}
		}
		
		for (var i = 1; i <= 14; i++){
			for (var j = 1; j <= 6; j++){
				if (this.donesTribu[i][j].indexOf(aValue) != -1){
					if ((resultado == 0) || (j < resultado))
						resultado = j;
				}
			}
		}
		
		return resultado;
	}
}

//trasfondo, necesario porque hay un tipo y un valor
function Trasfondo(aTrasfondo){
	this.tipo = aTrasfondo,
	this.valor = 0
}

function Don(aDon, aCamino, aRango){
	this.tipo = aDon,
	this.camino = aCamino,
	this.rango = aRango,
	
	this.ajeno = function(aRangoMax){
		return (this.rango.value > aRangoMax.value);
	}
}

//rangos según auspicio
function Rangos(){
	this.rangoAuspicio = new Array();
		//ragabash
		this.rangoAuspicio[1] = new Array();
			this.rangoAuspicio[1][0] = {gloria: 0, honor: 0, sabiduria: 0, sinAsignar: 0}	//rango 0
			this.rangoAuspicio[1][1] = {gloria: 0, honor: 0, sabiduria: 0, sinAsignar: 3}	//rango 1
			this.rangoAuspicio[1][2] = {gloria: 0, honor: 0, sabiduria: 0, sinAsignar: 7}	//rango 2
			this.rangoAuspicio[1][3] = {gloria: 0, honor: 0, sabiduria: 0, sinAsignar: 13}	//rango 3
			this.rangoAuspicio[1][4] = {gloria: 0, honor: 0, sabiduria: 0, sinAsignar: 19}	//rango 4
			this.rangoAuspicio[1][5] = {gloria: 0, honor: 0, sabiduria: 0, sinAsignar: 25}	//rango 5
			this.rangoAuspicio[1][6] = {gloria: 0, honor: 0, sabiduria: 0, sinAsignar: 30}	//rango 6
		//theurge
		this.rangoAuspicio[2] = new Array();
			this.rangoAuspicio[2][0] = {gloria: 0, honor: 0, sabiduria: 0, sinAsignar: 0}	//rango 0
			this.rangoAuspicio[2][1] = {gloria: 0, honor: 0, sabiduria: 3, sinAsignar: 0}	//rango 1
			this.rangoAuspicio[2][2] = {gloria: 1, honor: 0, sabiduria: 5, sinAsignar: 0}	//rango 2
			this.rangoAuspicio[2][3] = {gloria: 2, honor: 1, sabiduria: 7, sinAsignar: 0}	//rango 3
			this.rangoAuspicio[2][4] = {gloria: 4, honor: 2, sabiduria: 9, sinAsignar: 0}	//rango 4
			this.rangoAuspicio[2][5] = {gloria: 4, honor: 9, sabiduria: 10, sinAsignar: 0}	//rango 5
			this.rangoAuspicio[2][6] = {gloria: 10, honor: 10, sabiduria: 10, sinAsignar: 0}//rango 6
		//philodox
		this.rangoAuspicio[3] = new Array();
			this.rangoAuspicio[3][0] = {gloria: 0, honor: 0, sabiduria: 0, sinAsignar: 0}	//rango 0
			this.rangoAuspicio[3][1] = {gloria: 0, honor: 3, sabiduria: 0, sinAsignar: 0}	//rango 1
			this.rangoAuspicio[3][2] = {gloria: 1, honor: 4, sabiduria: 1, sinAsignar: 0}	//rango 2
			this.rangoAuspicio[3][3] = {gloria: 2, honor: 6, sabiduria: 2, sinAsignar: 0}	//rango 3
			this.rangoAuspicio[3][4] = {gloria: 3, honor: 8, sabiduria: 4, sinAsignar: 0}	//rango 4
			this.rangoAuspicio[3][5] = {gloria: 4, honor: 10, sabiduria: 9, sinAsignar: 0}	//rango 5
			this.rangoAuspicio[3][6] = {gloria: 10, honor: 10, sabiduria: 10, sinAsignar: 0}//rango 6
		//galliard
		this.rangoAuspicio[4] = new Array();
			this.rangoAuspicio[4][0] = {gloria: 0, honor: 0, sabiduria: 0, sinAsignar: 0}	//rango 0
			this.rangoAuspicio[4][1] = {gloria: 2, honor: 0, sabiduria: 1, sinAsignar: 0}	//rango 1
			this.rangoAuspicio[4][2] = {gloria: 4, honor: 0, sabiduria: 2, sinAsignar: 0}	//rango 2
			this.rangoAuspicio[4][3] = {gloria: 4, honor: 2, sabiduria: 4, sinAsignar: 0}	//rango 3
			this.rangoAuspicio[4][4] = {gloria: 7, honor: 2, sabiduria: 5, sinAsignar: 0}	//rango 4
			this.rangoAuspicio[4][5] = {gloria: 9, honor: 5, sabiduria: 9, sinAsignar: 0}	//rango 5
			this.rangoAuspicio[4][6] = {gloria: 10, honor: 10, sabiduria: 10, sinAsignar: 0}//rango 6
		//ahroun
		this.rangoAuspicio[5] = new Array();
			this.rangoAuspicio[5][0] = {gloria: 0, honor: 0, sabiduria: 0, sinAsignar: 0}	//rango 0
			this.rangoAuspicio[5][1] = {gloria: 2, honor: 1, sabiduria: 0, sinAsignar: 0}	//rango 1
			this.rangoAuspicio[5][2] = {gloria: 4, honor: 1, sabiduria: 1, sinAsignar: 0}	//rango 2
			this.rangoAuspicio[5][3] = {gloria: 6, honor: 3, sabiduria: 1, sinAsignar: 0}	//rango 3
			this.rangoAuspicio[5][4] = {gloria: 9, honor: 5, sabiduria: 2, sinAsignar: 0}	//rango 4
			this.rangoAuspicio[5][5] = {gloria: 10, honor: 9, sabiduria: 4, sinAsignar: 0}	//rango 5
			this.rangoAuspicio[5][6] = {gloria: 10, honor: 10, sabiduria: 10, sinAsignar: 0}//rango 6
	
	this.getRangoAuspicio = function(aAuspicio, aRango){
		var resultado = {gloria: 0, honor: 0, sabiduria: 0, sinAsignar: 0};
		
		if ((aRango != TRango.NONE) && (aAuspicio != TAuspicio.NONE)){
			resultado = this.rangoAuspicio[aAuspicio.value][aRango.value];
		}
		
		return resultado;
	}
}

//estado individual en la creación de un garou
function Fase(){
	this.modo = TModo.FREE;
	//gratuítos
	this.gratuitosMax = CONST.GRATUITOS.BASE;
	this.gratuitosAct = 0;
	//experiencia
	this.experienciaMax = 9999;		//no tiene mucho sentido, con informar de los puntos gastados, es suficiente
	this.experienciaAct = 0;
	
	this.donesRestringidos = function(){
		return (this.isBase() || this.isGratuitos());
	}
	
	this.donesCongelados = function(){
		return (this.isGratuitos() || this.isExperiencia());
	}
	
	this.isFree = function(){
		return (this.modo == TModo.FREE);
	}
	
	this.isBase = function(){
		return (this.modo == TModo.BASE);
	}
	
	this.isGratuitos = function(){
		return (this.modo == TModo.GRATUITOS);
	}
	
	this.isExperiencia = function(){
		return (this.modo == TModo.EXPERIENCIA);
	}
}

//clase garou, base de todo esto
function Garou(){
	this.parser = new GarouParser(this);

	//cabecera
	this.nombre = "";
	this.jugador = "";
	this.cronica = "";
	this.raza = TRaza.NONE;
	this.auspicio = TAuspicio.NONE;
	this.tribu = TTribu.NONE;
	this.manada = "";
	this.totem = "";
	this.concepto = "";
	this.naturaleza = TNaturaleza.NONE;
	this.conducta = TConducta.NONE;
	//Atributos
	this.fisicos = {
		tipo : TAtributo.NONE,
		fuerza : 1,
		destreza : 1,
		resistencia : 1
	}
	this.sociales = {
		tipo : TAtributo.NONE,
		carisma : 1,
		manipulacion : 1,
		apariencia : 1
	}
	this.mentales = {
		tipo : TAtributo.NONE,
		percepcion : 1,
		inteligencia : 1,
		astucia : 1
	}
	//Habilidades
	this.talentos = {
		tipo : THabilidad.NONE,
		alerta : 0,
		atletismo : 0,
		callejeo : 0,
		empatia : 0,
		esquivar : 0,
		expresion : 0,
		impulsoPrimario : 0,
		intimidacion : 0,
		pelea : 0,
		subterfugio : 0
	}
	this.tecnicas = {
		tipo : THabilidad.NONE,
		armasCC : 0,
		armasFuego : 0,
		conducir : 0,
		etiqueta : 0,
		interpretacion : 0,
		liderazgo : 0,
		reparaciones : 0,
		sigilo : 0,
		supervivencia : 0,
		tratoAnimales : 0
	}
	this.conocimientos = {
		tipo : THabilidad.NONE,
		ciencias : 0,
		enigmas : 0,
		informatica : 0,
		investigacion : 0,
		leyes : 0,
		linguistica : 0,
		medicina : 0,
		ocultismo : 0,
		politica : 0,
		rituales : 0
	}
	
	this.trasfondos = new Array();
	this.dones = new Array();
	
	this.rango = TRango.NONE;
	this.renombre = {
		gloria : 0,
		honor : 0,
		sabiduria : 0
	}
	
	this.rabia = 0;
	this.gnosis = 0;
	this.fuerzaVoluntad = 0;
	
	this.fase = new Fase();
	
	this.vaciar = function(){
		this.nombre = "";
		this.jugador = "";
		this.cronica = "";
		this.raza = TRaza.NONE;
		this.auspicio = TAuspicio.NONE;
		this.tribu = TTribu.NONE;
		this.manada = ""
		this.totem = ""
		this.concepto = "";
		this.naturaleza = TNaturaleza.NONE;
		this.conducta = TConducta.NONE;
		this.fisicos.tipo = TAtributo.NONE;
		this.fisicos.fuerza = 1;
		this.fisicos.destreza = 1;
		this.fisicos.resistencia = 1;
		this.sociales.tipo = TAtributo.NONE;
		this.sociales.carisma = 1;
		this.sociales.manipulacion = 1;
		this.sociales.apariencia = 1;
		this.mentales.tipo = TAtributo.NONE,
		this.mentales.percepcion = 1;
		this.mentales.inteligencia = 1;
		this.mentales.astucia = 1;
		this.talentos.tipo = THabilidad.NONE;
		this.talentos.alerta = 0;
		this.talentos.atletismo = 0;
		this.talentos.callejeo = 0;
		this.talentos.empatia = 0;
		this.talentos.esquivar = 0;
		this.talentos.expresion = 0;
		this.talentos.impulsoPrimario = 0;
		this.talentos.intimidacion = 0;
		this.talentos.pelea = 0;
		this.talentos.subterfugio = 0;
		this.tecnicas.tipo = THabilidad.NONE;
		this.tecnicas.armasCC = 0;
		this.tecnicas.armasFuego = 0;
		this.tecnicas.conducir = 0;
		this.tecnicas.etiqueta = 0;
		this.tecnicas.interpretacion = 0;
		this.tecnicas.liderazgo = 0;
		this.tecnicas.reparaciones = 0;
		this.tecnicas.sigilo = 0;
		this.tecnicas.supervivencia = 0;
		this.tecnicas.tratoAnimales = 0;
		this.conocimientos.tipo = THabilidad.NONE;
		this.conocimientos.ciencias = 0;
		this.conocimientos.enigmas = 0;
		this.conocimientos.informatica = 0;
		this.conocimientos.investigacion = 0;
		this.conocimientos.leyes = 0;
		this.conocimientos.linguistica = 0;
		this.conocimientos.medicina = 0;
		this.conocimientos.ocultismo = 0;
		this.conocimientos.politica = 0;
		this.conocimientos.rituales = 0;
		this.trasfondos = new Array();
		this.dones = new Array();
		this.rango = TRango.NONE;
		this.renombre.gloria = 0;
		this.renombre.honor = 0;
		this.renombre.sabiduria = 0;		
		this.rabia = 0;
		this.gnosis = 0;
		this.fuerzaVoluntad = 0;
	}
	
	this.clone = function(){
		var resultado = new Garou();
		
		resultado.nombre = this.nombre;
		resultado.jugador = this.jugador;
		resultado.cronica = this.cronica;
		resultado.raza = clone(this.raza);
		resultado.auspicio = clone(this.auspicio);
		resultado.tribu = clone(this.tribu);
		resultado.manada = this.manada
		resultado.totem = this.totem
		resultado.concepto = clone(this.concepto);
		resultado.naturaleza = clone(this.naturaleza);
		resultado.conducta = this.conducta;
		resultado.fisicos = clone(this.fisicos);
		resultado.sociales = clone(this.sociales);
		resultado.mentales = clone(this.mentales);
		resultado.talentos = clone(this.talentos);
		resultado.tecnicas = clone(this.tecnicas);
		resultado.conocimientos = clone(this.conocimientos);
		resultado.trasfondos = clone(this.trasfondos);
		resultado.dones = clone(this.dones);
		resultado.rango = clone(this.rango);
		resultado.renombre = clone(this.renombre);		
		resultado.rabia = this.rabia;
		resultado.gnosis = this.gnosis;
		resultado.fuerzaVoluntad = this.fuerzaVoluntad;
		
		return resultado;		
		/*resultado.fisicos.tipo = this.fisicos.tipo;
		resultado.fisicos.fuerza = this.fisicos.fuerza;
		resultado.fisicos.destreza = this.fisicos.destreza;
		resultado.fisicos.resistencia = this.fisicos.resistencia;
		resultado.sociales.tipo = this.sociales.tipo;
		resultado.sociales.carisma = this.sociales.carisma;
		resultado.sociales.manipulacion = this.sociales.manipulacion;
		resultado.sociales.apariencia = this.sociales.apariencia;
		resultado.mentales.tipo = this.mentales.tipo,
		resultado.mentales.percepcion = this.mentales.percepcion;
		resultado.mentales.inteligencia = this.mentales.inteligencia;
		resultado.mentales.astucia = this.mentales.astucia;
		resultado.talentos.tipo = this.talentos.tipo;
		resultado.talentos.alerta = this.talentos.alerta;
		resultado.talentos.atletismo = this.talentos.atletismo;
		resultado.talentos.callejeo = this.talentos.callejeo;
		resultado.talentos.empatia = this.talentos.empatia;
		resultado.talentos.esquivar = this.talentos.esquivar;
		resultado.talentos.expresion = this.talentos.expresion;
		resultado.talentos.impulsoPrimario = this.talentos.impulsoPrimario;
		resultado.talentos.intimidacion = this.talentos.intimidacion;
		resultado.talentos.pelea = this.talentos.pelea;
		resultado.talentos.subterfugio = this.talentos.subterfugio;
		resultado.tecnicas.tipo = this.tecnicas.tipo;
		resultado.tecnicas.armasCC = this.tecnicas.armasCC;
		resultado.tecnicas.armasFuego = this.tecnicas.armasFuego;
		resultado.tecnicas.conducir = this.tecnicas.conducir;
		resultado.tecnicas.etiqueta = this.tecnicas.etiqueta;
		resultado.tecnicas.interpretacion = this.tecnicas.interpretacion;
		resultado.tecnicas.liderazgo = this.tecnicas.liderazgo;
		resultado.tecnicas.reparaciones = this.tecnicas.reparaciones;
		resultado.tecnicas.sigilo = this.tecnicas.sigilo;
		resultado.tecnicas.supervivencia = this.tecnicas.supervivencia;
		resultado.tecnicas.tratoAnimales = this.tecnicas.tratoAnimales;
		resultado.conocimientos.tipo = this.conocimientos.tipo;
		resultado.conocimientos.ciencias = this.conocimientos.ciencias;
		resultado.conocimientos.enigmas = this.conocimientos.enigmas;
		resultado.conocimientos.informatica = this.conocimientos.informatica;
		resultado.conocimientos.investigacion = this.conocimientos.investigacion;
		resultado.conocimientos.leyes = this.conocimientos.leyes;
		resultado.conocimientos.linguistica = this.conocimientos.linguistica;
		resultado.conocimientos.medicina = this.conocimientos.medicina;
		resultado.conocimientos.ocultismo = this.conocimientos.ocultismo;
		resultado.conocimientos.politica = this.conocimientos.politica;
		resultado.conocimientos.rituales = this.conocimientos.rituales;*/
	}
	
	//es necesaria esta función para poder obtener cualquier valor con el nombre del atributo
	//que pueda recibir puntuación
	this.get = function(aAttr){
		if (aAttr == 'fuerza')
			return this.fisicos.fuerza;
		else if (aAttr == 'destreza')
			return this.fisicos.destreza;
		else if (aAttr == 'resistencia')
			return this.fisicos.resistencia;
		else if (aAttr == 'carisma')
			return this.sociales.carisma;
		else if (aAttr == 'manipulacion')
			return this.sociales.manipulacion;
		else if (aAttr == 'apariencia')
			return this.sociales.apariencia;
		else if (aAttr == 'percepcion')
			return this.mentales.percepcion;
		else if (aAttr == 'inteligencia')
			return this.mentales.inteligencia;
		else if (aAttr == 'astucia')
			return this.mentales.astucia;
		else if (aAttr == 'alerta')
			return this.talentos.alerta;
		else if (aAttr == 'atletismo')
			return this.talentos.atletismo;
		else if (aAttr == 'callejeo')
			return this.talentos.callejeo;
		else if (aAttr == 'empatia')
			return this.talentos.empatia;
		else if (aAttr == 'esquivar')
			return this.talentos.esquivar;
		else if (aAttr == 'expresion')
			return this.talentos.expresion;
		else if (aAttr == 'impulsoPrimario')
			return this.talentos.impulsoPrimario;
		else if (aAttr == 'intimidacion')
			return this.talentos.intimidacion;
		else if (aAttr == 'pelea')
			return this.talentos.pelea;
		else if (aAttr == 'subterfugio')
			return this.talentos.subterfugio;
		else if (aAttr == 'armasCC')
			return this.tecnicas.armasCC;
		else if (aAttr == 'armasFuego')
			return this.tecnicas.armasFuego;
		else if (aAttr == 'conducir')
			return this.tecnicas.conducir;
		else if (aAttr == 'etiqueta')
			return this.tecnicas.etiqueta;
		else if (aAttr == 'interpretacion')
			return this.tecnicas.interpretacion;
		else if (aAttr == 'liderazgo')
			return this.tecnicas.liderazgo;
		else if (aAttr == 'reparaciones')
			return this.tecnicas.reparaciones;
		else if (aAttr == 'sigilo')
			return this.tecnicas.sigilo;
		else if (aAttr == 'supervivencia')
			return this.tecnicas.supervivencia;
		else if (aAttr == 'tratoAnimales')
			return this.tecnicas.tratoAnimales;
		else if (aAttr == 'ciencias')
			return this.conocimientos.ciencias;
		else if (aAttr == 'enigmas')
			return this.conocimientos.enigmas;
		else if (aAttr == 'informatica')
			return this.conocimientos.informatica;
		else if (aAttr == 'investigacion')
			return this.conocimientos.investigacion;
		else if (aAttr == 'leyes')
			return this.conocimientos.leyes;
		else if (aAttr == 'linguistica')
			return this.conocimientos.linguistica;
		else if (aAttr == 'medicina')
			return this.conocimientos.medicina;
		else if (aAttr == 'ocultismo')
			return this.conocimientos.ocultismo;
		else if (aAttr == 'politica')
			return this.conocimientos.politica;
		else if (aAttr == 'rituales')
			return this.conocimientos.rituales;
		else if (aAttr.indexOf('trasfondo') != -1)
			return this.trasfondos[aAttr.substring(9)].valor;
		else if (aAttr == 'gloria')
			return this.renombre.gloria;
		else if (aAttr == 'honor')
			return this.renombre.honor;
		else if (aAttr == 'sabiduria')
			return this.renombre.sabiduria;
		else
			return this[aAttr];
	}
	
	//es necesaria esta función para poder obtener el tipo con el nombre del atributo
	//	-1: No es de ningún tipo reconocido
	//	 0: Tipo Atributo
	//	 1: Tipo Habilidad
	//	 2: Tipo Trasfondo
	//	 3: Tipo Rabia
	//	 4: Tipo Gnosis
	//	 5: Tipo FVol
	//	 6: Tipo Renombre
	this.getType = function(aAttr){
		if ((aAttr == 'fuerza')||(aAttr == 'destreza')||(aAttr == 'resistencia')||(aAttr == 'carisma')||(aAttr == 'manipulacion')||(aAttr == 'apariencia')||(aAttr == 'percepcion')||(aAttr == 'inteligencia')||(aAttr == 'astucia'))
			return 0;
		else if ((aAttr == 'alerta')||(aAttr == 'atletismo')||(aAttr == 'callejeo')||(aAttr == 'empatia')||(aAttr == 'esquivar')||(aAttr == 'expresion')||(aAttr == 'impulsoPrimario')||(aAttr == 'intimidacion')||(aAttr == 'pelea')||(aAttr == 'subterfugio')||(aAttr == 'armasCC')||(aAttr == 'armasFuego')||(aAttr == 'conducir')||(aAttr == 'etiqueta')||(aAttr == 'interpretacion')||(aAttr == 'liderazgo')||(aAttr == 'reparaciones')||(aAttr == 'sigilo')||(aAttr == 'supervivencia')||(aAttr == 'tratoAnimales')||(aAttr == 'ciencias')||(aAttr == 'enigmas')||(aAttr == 'informatica')||(aAttr == 'investigacion')||(aAttr == 'leyes')||(aAttr == 'linguistica')||(aAttr == 'medicina')||(aAttr == 'ocultismo')||(aAttr == 'politica')||(aAttr == 'rituales'))
			return 1;
		else if (aAttr.indexOf('trasfondo') != -1)
			return 2;
		else if (aAttr == 'rabia')
			return 3;
		else if (aAttr == 'gnosis')
			return 4;
		else if (aAttr == 'fuerzaVoluntad')
			return 5;
		else if ((aAttr == 'gloria')||(aAttr == 'honor')||(aAttr == 'sabiduria'))
			return 6;
		else
			return -1;
	}
	
	//es necesaria esta función para poder asignar cualquier valor con el nombre del atributo
	//que pueda recibir puntuación
	this.set = function(aAttr, aValor){
		if (aAttr == 'fuerza')
			this.fisicos.fuerza = aValor;
		else if (aAttr == 'destreza')
			this.fisicos.destreza = aValor;
		else if (aAttr == 'resistencia')
			this.fisicos.resistencia = aValor;
		else if (aAttr == 'carisma')
			this.sociales.carisma = aValor;
		else if (aAttr == 'manipulacion')
			this.sociales.manipulacion = aValor;
		else if (aAttr == 'apariencia')
			this.sociales.apariencia = aValor;
		else if (aAttr == 'percepcion')
			this.mentales.percepcion = aValor;
		else if (aAttr == 'inteligencia')
			this.mentales.inteligencia = aValor;
		else if (aAttr == 'astucia')
			this.mentales.astucia = aValor;
		else if (aAttr == 'alerta')
			this.talentos.alerta = aValor;
		else if (aAttr == 'atletismo')
			this.talentos.atletismo = aValor;
		else if (aAttr == 'callejeo')
			this.talentos.callejeo = aValor;
		else if (aAttr == 'empatia')
			this.talentos.empatia = aValor;
		else if (aAttr == 'esquivar')
			this.talentos.esquivar = aValor;
		else if (aAttr == 'expresion')
			this.talentos.expresion = aValor;
		else if (aAttr == 'impulsoPrimario')
			this.talentos.impulsoPrimario = aValor;
		else if (aAttr == 'intimidacion')
			this.talentos.intimidacion = aValor;
		else if (aAttr == 'pelea')
			this.talentos.pelea = aValor;
		else if (aAttr == 'subterfugio')
			this.talentos.subterfugio = aValor;
		else if (aAttr == 'armasCC')
			this.tecnicas.armasCC = aValor;
		else if (aAttr == 'armasFuego')
			this.tecnicas.armasFuego = aValor;
		else if (aAttr == 'conducir')
			this.tecnicas.conducir = aValor;
		else if (aAttr == 'etiqueta')
			this.tecnicas.etiqueta = aValor;
		else if (aAttr == 'interpretacion')
			this.tecnicas.interpretacion = aValor;
		else if (aAttr == 'liderazgo')
			this.tecnicas.liderazgo = aValor;
		else if (aAttr == 'reparaciones')
			this.tecnicas.reparaciones = aValor;
		else if (aAttr == 'sigilo')
			this.tecnicas.sigilo = aValor;
		else if (aAttr == 'supervivencia')
			this.tecnicas.supervivencia = aValor;
		else if (aAttr == 'tratoAnimales')
			this.tecnicas.tratoAnimales = aValor;
		else if (aAttr == 'ciencias')
			this.conocimientos.ciencias = aValor;
		else if (aAttr == 'enigmas')
			this.conocimientos.enigmas = aValor;
		else if (aAttr == 'informatica')
			this.conocimientos.informatica = aValor;
		else if (aAttr == 'investigacion')
			this.conocimientos.investigacion = aValor;
		else if (aAttr == 'leyes')
			this.conocimientos.leyes = aValor;
		else if (aAttr == 'linguistica')
			this.conocimientos.linguistica = aValor;
		else if (aAttr == 'medicina')
			this.conocimientos.medicina = aValor;
		else if (aAttr == 'ocultismo')
			this.conocimientos.ocultismo = aValor;
		else if (aAttr == 'politica')
			this.conocimientos.politica = aValor;
		else if (aAttr == 'rituales')
			this.conocimientos.rituales = aValor;
		else if (aAttr == 'gloria')
			this.renombre.gloria = aValor;
		else if (aAttr == 'honor')
			this.renombre.honor = aValor;
		else if (aAttr == 'sabiduria')
			this.renombre.sabiduria = aValor;
		else 
			this[aAttr] = aValor;
	}
	
	this.sumaFisicos = function(){
		return  this.fisicos.fuerza + this.fisicos.destreza + this.fisicos.resistencia;
	}
	
	this.sumaSociales = function(){
		return  this.sociales.carisma + this.sociales.manipulacion + this.sociales.apariencia;
	}
	
	this.sumaMentales = function(){
		return  this.mentales.percepcion + this.mentales.inteligencia + this.mentales.astucia;
	}
	
	this.sumaTalentos = function(){
		return  this.talentos.alerta + this.talentos.atletismo + this.talentos.callejeo + this.talentos.empatia + this.talentos.esquivar + this.talentos.expresion + this.talentos.impulsoPrimario + this.talentos.intimidacion + this.talentos.pelea + this.talentos.subterfugio;
	}
	
	this.sumaTecnicas = function(){
		return  this.tecnicas.armasCC + this.tecnicas.armasFuego + this.tecnicas.conducir + this.tecnicas.etiqueta + this.tecnicas.interpretacion + this.tecnicas.liderazgo + this.tecnicas.reparaciones + this.tecnicas.sigilo + this.tecnicas.supervivencia + this.tecnicas.tratoAnimales;
	}
	
	this.sumaConocimientos = function(){
		return  this.conocimientos.ciencias + this.conocimientos.enigmas + this.conocimientos.informatica + this.conocimientos.investigacion + this.conocimientos.leyes + this.conocimientos.linguistica + this.conocimientos.medicina + this.conocimientos.ocultismo + this.conocimientos.politica + this.conocimientos.rituales;
	}
	
	this.sumaTrasfondos = function(){
		var suma = 0;
		for (var i = 0; i < this.trasfondos.length; i++){
			suma += (this.trasfondos[i].valor * 1);
		}
		return suma;
	}
	
	this.borrarTrasfondo = function(aTrasfondo){
		for(var i = 0; i < this.trasfondos.length; i++)
			if (this.trasfondos[i].tipo.value == aTrasfondo.value)
				this.trasfondos.splice(i, 1);
	}
	
	this.agregarTrasfondo = function(aTrasfondo){
		var resultado = false;
		
		if (!this.existeTrasfondo(aTrasfondo)){
			this.trasfondos.push(new Trasfondo(aTrasfondo));
			resultado = true;
		}
		
		return resultado;
	}
	
	this.existeTrasfondo = function(aTrasfondo){
		var resultado = false;
		var i = 0;
		while((i < this.trasfondos.length) && (!resultado)){
			if (this.trasfondos[i].tipo.value == aTrasfondo.value)
				resultado = true;
			i++;
		}
		
		return resultado;
	}
	
	this.borrarDon = function(aDon, aCamino, aRango){
		var camino = (aCamino === undefined) ? TCamino.NONE : aCamino;	
		var rango = (aRango === undefined) ? TRango.NONE : aRango;
	
		for(var i = 0; i < this.dones.length; i++){
			if ((this.dones[i].tipo.value == aDon.value) && ((camino == TCamino.NONE) || (this.dones[i].camino == camino)) && ((rango == TRango.NONE) || (this.dones[i].rango == rango)))
				this.dones.splice(i, 1);
		}
	}
	
	this.agregarDon = function(aDon, aCamino, aRango){
		var resultado = false;
		var camino = (aCamino === undefined) ? TCamino.NONE : aCamino;	
		var rango = (aRango === undefined) ? TRango.NONE : aRango;	
		
		if (!this.existeDon(aDon)){
			var don = new Don(aDon, camino, rango);
			this.dones.push(don);
			resultado = true;
		}
		
		return resultado;
	}

	//resulta util recibir camino y rango para el borrado más que para el agregado
	this.existeDon = function(aDon, aCamino, aRango){
		var resultado = false;
		var camino = (aCamino === undefined) ? TCamino.NONE : aCamino;	
		var rango = (aRango === undefined) ? TRango.NONE : aRango;
		
		var i = 0;
		while((i < this.dones.length) && (!resultado)){
			if ((this.dones[i].tipo.value == aDon.value) && ((camino == TCamino.NONE) || (this.dones[i].camino == camino)) && ((rango == TRango.NONE) || (this.dones[i].rango == rango)))
				resultado = true;
			i++;
		}
		
		return resultado;
	}
	
	//resulta util recibir camino y rango para el borrado más que para el agregado
	this.getDon = function(aDon, aCamino, aRango){
		var resultado = null;
		var camino = (aCamino === undefined) ? TCamino.NONE : aCamino;	
		var rango = (aRango === undefined) ? TRango.NONE : aRango;
		
		var i = 0;
		while((i < this.dones.length) && (!resultado)){
			if ((this.dones[i].tipo.value == aDon.value) && ((camino == TCamino.NONE) || (this.dones[i].camino == camino)) && ((rango == TRango.NONE) || (this.dones[i].rango == rango)))
				resultado = clone(this.dones[i]);
			i++;
		}
		
		return resultado;
	}
	
	this.numDonesCaminoRango = function(aCamino, aRango){
		var resultado = 0;

		for(var i = 0; i < this.dones.length; i++){
			if ((this.dones[i].camino.value == aCamino.value) && (this.dones[i].rango.value == aRango.value))
				resultado++;
		}
		
		return resultado;
	}
	
	this.cargar = function(aFileName){
		//cargamos el resultado
		return this.parser.cargarGarou(aFileName);
	}
	
	this.guardar = function(aFileName){
		//guardamos el garou
		return this.parser.guardarGarou(this, aFileName);
	}

	this.imprimir = function(aFileName){
		this.parser.materializarGarou(aFileName);
	}
}

//variables globales
function GlobalVars(){
	this.dones = new Dones();
	this.rangos = new Rangos();
	this.garou = new Garou();
	this.slotSelected = 0;
	this.slotMax = 0;
	this.modo = TModo.NONE;
	
	//garou temporales para almacenar las puntuaciones del garou intermedias
	this.garouBase = null;
	this.garouGratuitos = null;	
	
	this.random = new Array();
		this.random.raza = TRaza.NONE;
		this.random.auspicio = TAuspicio.NONE;
		this.random.tribu = TTribu.NONE;
		this.random.rango = TRango.NONE;
		
		this.random.listaAtributos = null;
		this.random.listaFisicos = null;
		this.random.listaSociales = null;
		this.random.listaMentales = null;
		this.random.listaHabilidades = null;
		this.random.listaTalentos = null;
		this.random.listaTecnicas = null;
		this.random.listaConocimientos = null;
		this.random.listaTrasfondos = null;
}
var global = new GlobalVars();