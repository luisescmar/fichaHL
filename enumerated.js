/***************************/
/******ENUMERATED TYPES*****/
/***************************/
var TAtributo = {
	NONE : {value: 0, name: "No asignado", valor: 0},
	PRIMARIO : {value: 1, name: "Primario", valor: 10}, 
	SECUNDARIO : {value: 2, name: "Secundario", valor: 8}, 
	TERCIARIO : {value: 3, name: "Terciario", valor: 6}
};

var THabilidad = {
	NONE : {value: 0, name: "No asignada", valor: 0},
	PRIMARIA : {value: 1, name: "Primaria", valor: 13}, 
	SECUNDARIA : {value: 2, name: "Secundaria", valor: 9}, 
	TERCIARIA : {value: 3, name: "Terciaria", valor: 5}
};

var TRaza = {
	NONE : {value: 0, name: "No asignada", gnosisIni: 0, tipoDones: 0},
	HOMINIDO : {value: 1, name: "Homínido", gnosisIni: 1, tipoDones: 0}, 
	METIS : {value: 2, name: "Metis", gnosisIni: 3, tipoDones: 1}, 
	LUPUS : {value: 3, name: "Lupus", gnosisIni: 5, tipoDones: 2}
}

var TAuspicio = {
	NONE : {value: 0, name: "No asignado", rabiaIni: 0, tipoDones: 0},
	RAGABASH : {value: 1, name: "Ragabash", rabiaIni: 1, tipoDones: 3}, 
	THEURGE : {value: 2, name: "Theurge", rabiaIni: 2, tipoDones: 4}, 
	PHILODOX : {value: 3, name: "Philodox", rabiaIni: 3, tipoDones: 5},
	GALLIARD : {value: 4, name: "Galliard", rabiaIni: 4, tipoDones: 6},
	AHROUN : {value: 5, name: "Ahroun", rabiaIni: 5, tipoDones: 7}
}

var TTribu = {
	NONE : {value: 0, name: "No asignada", fVolIni: 0, tipoDones: 0},
	CAMADA : {value: 1, name: "Camada de Fenris", fVolIni: 3, tipoDones: 8}, 
	CAMINANTE : {value: 2, name: "Caminante Silencioso", fVolIni: 3, tipoDones: 9}, 
	COLMILLO : {value: 3, name: "Colmillo Plateado", fVolIni: 3, tipoDones: 10},
	CONTEMPLAESTRELLAS : {value: 4, name: "Contemplaestrellas", fVolIni: 3, tipoDones: 11},
	DANZANTE : {value: 5, name: "Danzante de la Espiral Negra", fVolIni: 3, tipoDones: 12},
	FIANNA : {value: 6, name: "Fianna", fVolIni: 3, tipoDones: 13}, 
	FURIANEGRA : {value: 7, name: "Furia Negra", fVolIni: 3, tipoDones: 14}, 
	GARRAROJA : {value: 8, name: "Garra Roja", fVolIni: 3, tipoDones: 15}, 
	HIJOGAIA : {value: 9, name: "Hijo de Gaia", fVolIni: 3, tipoDones: 16}, 
	MORADOR : {value: 10, name: "Morador del Cristal", fVolIni: 3, tipoDones: 17}, 
	ROEHUESOS : {value: 11, name: "Roehuesos", fVolIni: 3, tipoDones: 18}, 
	SENORSOMBRAS : {value: 12, name: "Señor de las Sombras", fVolIni: 3, tipoDones: 19}, 
	UKTENA : {value: 13, name: "Uktena", fVolIni: 3, tipoDones: 20}, 
	WENDIGO : {value: 14, name: "Wendigo", fVolIni: 3, tipoDones: 21}
}

var TTrasfondo = {
	NONE : {value: 0, name: "No asignado"},
	ALIADOS : {value: 1, name: "Aliados"}, 
	CONTACTOS : {value: 2, name: "Contactos"}, 
	FETICHE : {value: 3, name: "Fetiche"},
	PARENTELA : {value: 4, name: "Parentela"},
	MENTOR : {value: 5, name: "Mentor"},
	PURARAZA : {value: 6, name: "Pura Raza"},
	RECURSOS : {value: 7, name: "Recursos"},
	RITOS : {value: 8, name: "Ritos"},
	TOTEM : {value: 9, name: "Tótem"},
	VIDAPASADA : {value: 10, name: "Vida Pasada"}
};

var TRango = {
	NONE : {value: 7, name: "No asignado"},
	CACHORRO: {value: 0, name: "Cachorro"},
	CLIATH : {value: 1, name: "Cliath"},
	FOSTERN : {value: 2, name: "Fostern"},
	ADREN : {value: 3, name: "Adren"},
	ATHRO : {value: 4, name: "Athro"},
	ANCIANO : {value: 5, name: "Anciano"},
	SEXTO : {value: 6, name: "Leyenda"}
}

var TDon = {
	NONE : {value: 0, name: "No asignado", descripcion: "No asignado"},
	ABRIRHERIDAS : {value: 1, name: "Abrir heridas", descripcion: "El Lupino consigue que la siguiente herida que provoque a un enemigo sangre sin parar."},
	ABRIRPUENTELUNAR : {value: 2, name: "Abrir puente lunar", descripcion: "El Garou puede abrir un puente que comunique Túmulos entre sí."},
	ABRIRSELLO : {value: 3, name: "Abrir sello", descripcion: "El Garou puede abrir casi cualquier dispositivo cerrado con o sin llave."},
	ACERTIJO : {value: 4, name: "Acertijo", descripcion: "El Contemplaestrellas puede llevar a otro ser a un proceso de meditación constante al proponerle un enigma imposible de resolver."},
	ADAPTACION : {value: 5, name: "Adaptación", descripcion: "El Garou es capaz de sobrevivir en cualquier entorno hostil, sea cual sea su presión, temperatura, etc. Los venenos o las enfermedades tampoco le afectan."},
	AFERRARMASALLA : {value: 6, name: "Aferrar el más allá", descripcion: "Con este poder, el Lupino puede trasladar objetos hacia o desde la Umbra sin tener que utilizar ningún Rito. También puede transportar personas o animales."},
	AGARREHALCON : {value: 7, name: "Agarre del halcón", descripcion: "El Lupino realiza una presa con sus manos o sus mandíbulas del que es imposible escapar. "},
	AGUIJONAVISPA : {value: 8, name: "Aguijón de avispa", descripcion: "La Furia puede arrojar sus garras a distancia contra un enemigo."},
	ALCANZARUMBRA : {value: 9, name: "Alcanzar la umbra", descripcion: "El Garou puede pasar a la Umbra de inmediato sin necesidad de una superficie reflectante."},
	ALIENTOKAOS : {value: 10, name: "Aliento del Kaos", descripcion: "La Lupina es capaz de insuflar una gran vitalidad en un ser vivo."},
	AMIGONECESITADO : {value: 11, name: "Amigo necesitado", descripcion: "El Roehuesos es capaz de entregar a un compañero de manada cuanto necesite (Dones, Rabia, Fuerza de Voluntad...) para que se salve de una situación de vida o muerte."},
	APUNTARHUESO : {value: 12, name: "Apuntar al hueso", descripcion: "Algunos místicos oscuros de la Tribu realizan ataques devastadores con huesos que han robado de cadáveres."},
	ARENASMOVEDIZAS : {value: 13, name: "Arenas movedizas", descripcion: "El Garou puede convertir un terreno en una masa resbaladiza en la que sus oponentes se quedan atrapados."},
	ARGUMENTODEFINITIVO : {value: 14, name: "Argumento definitivo", descripcion: "Quienes hablan con el Hombre Lobo se marchan convencidos de algo que, en otras circunstancias, no habrían creído."},
	ARMADURASELENE : {value: 15, name: "Armadura de Selene", descripcion: "El Hombre Lobo invoca a la protección de Selene para lograr una mayor resistencia ante los ataques dirigidos hacia él."},
	ARMONIASUPERFICIE : {value: 16, name: "Armonía con la superficie", descripcion: "El Hombre Lobo entra en comunión con el hábitat que le rodea y puede caminar sobre cualquier superficie sin caer ni dejar huellas."},
	ARMONIZACION : {value: 17, name: "Armonización", descripcion: "El Lupino puede comunicarse con los Espíritus de una zona en concreto y hacerse una idea global de cuanto ha sucedido en el lugar, asó como de sus características (poblacón, sucesos, rutas secretas...)"},
	ASIMILACION : {value: 18, name: "Asimilación", descripcion: "El Garou es capaz de mezclarse con una cultura o sociedad en concreto sin llamar en nada la atención, por rara que sea dicha cultura."},
	ASPECTOANGEL : {value: 19, name: "Aspecto de ángel", descripcion: "Cuando el Garou toma la forma Crinos los mortales no huyen presas del Delirio, sino que ven en él una figura celestial."},
	ASPIRARLLAMAS : {value: 20, name: "Aspirar llamas", descripcion: "El Garou puede apagar cualquier fuego que está en su campo de visión. "},
	ATACARLADO : {value: 21, name: "Atacar de lado", descripcion: "El Uktena es capaz de atacar a un enemigo en la Penumbra sin necesidad de salir del mundo físico."},
	ATAQUECIRCULAR : {value: 22, name: "Ataque circular", descripcion: "Este Don permite al Garou enfrentarse a distintos oponentes a la misma vez sin restar su eficacia e incluso dirigiendo los ataques de sus enemigos para que se golpeen entre sí."},
	ATAQUEPERVERSION : {value: 23, name: "Ataque de perversión", descripcion: "El Hombre Lobo desprende tal calor que los materiales inflamables que haya cerca de él entran en combustión."},
	ATERRORIZAR : {value: 24, name: "Aterrorizar", descripcion: "El Danzante puede resultar más intimidante y aterrador de lo normal."},
	ATIZARFUEGOFURIA : {value: 25, name: "Atizar el fuego de la furia", descripcion: "El Garou con este Don canaliza, controla y utiliza su Rabia mejor que otros Lupinos."},
	ATORMENTARCUERPO : {value: 26, name: "Atormentar el cuerpo", descripcion: "La Garou puede concentrar en su blanco un enorme dolor."},
	ATROFIAREXTREMIDAD : {value: 27, name: "Atrofiar extremidad", descripcion: "Con este poder, el Lupino logra que una extremidad de un oponente quede inútil."},
	AULLIDOBANSHEE : {value: 28, name: "Aullido del Banshee", descripcion: "El Garou genera un aullido que desquicia a quien lo escucha."},
	AURACONFIANZA : {value: 29, name: "Aura de confianza", descripcion: "El Garou irradia un aura de fuerza y dominio de modo que es inmune al espionaje místico."},
	AVALANCHA : {value: 30, name: "Avalancha", descripcion: "El Hombre Lobo provoca un desprendimiento de tierra y rocas sobre sus enemigos."},
	AVATARWYRM : {value: 31, name: "Avatar del Wyrm", descripcion: "Otra variante del Don anterior con la que el Danzante toma una forma del Wyrm puro, convirtiéndose en un monstruo agresivo, demoníaco y terrorífico. "},
	BANQUETESANGRIENTO : {value: 32, name: "Banquete sangriento", descripcion: "El Wendigo puede adquirir fuerza adicional gracias a la carne y a la sangre de un enemigo."},
	BENDICIONEVA : {value: 33, name: "Bendición de Eva", descripcion: "El Garou puede asegurar que un parto va a salir bien, tanto para la madre como para el bebé."},
	BENDICIONSELENE : {value: 34, name: "Bendición de Selene", descripcion: "Cuando la luna es visible en el cielo, el Garou es inmune al daño que provoca la plata."},
	BENDICIONHERRERO : {value: 35, name: "Bendición del herrero", descripcion: "El Protector es capaz de convertir una herramienta o arma desgastada u oxidada en una nueva."},
	BLOQUEOMENTAL : {value: 36, name: "Bloqueo mental", descripcion: "Con este poder, el Lupino aumenta la dificultad de cualquier intento de atacarle o manipularle mentalmente."},
	BOLAFUEGO : {value: 37, name: "Bola de fuego", descripcion: "El Garou puede lanzar bolas de fuego verdoso a sus oponentes. Suelen provocar graves daños y mutaciones."},
	CABEZARATA : {value: 38, name: "Cabeza de rata", descripcion: "El Danzante logra que su cabeza pueda pasar por casi cualquier abertura."},
	CALENTARMETAL : {value: 39, name: "Calentar metal", descripcion: "El Garou puede calentar este material hasta hacerlo maleable o peligroso para un enemigo."},
	CALMA : {value: 40, name: "Calma", descripcion: "El Garou puede apaciguar la ira de los demás."},
	CALMARREBANO : {value: 41, name: "Calmar al rebaño", descripcion: "El Garou se mueve entre los humanos sin provocar ningún tipo de reacción adversa ni el Delirio."},
	CAMUFLAJE : {value: 42, name: "Camuflaje", descripcion: "El Garou no puede ser detectado en el bosque, ya que se mezcla con la vegetación."},
	CANCIONGRANBESTIA : {value: 43, name: "Canción de la Gran Bestia", descripcion: "Este Don funciona sólo cuando el Lupino está en lo más profundo de la naturaleza. Si es así, puede invocar con sus aullidos a una gran bestia mitológica (unicornios, tigres dientes de sable, el yeti, dinosaurios...)"},
	CANCIONSIRENA : {value: 44, name: "Canción de la sirena", descripcion: "Hace el efecto contrario al Don anterior. Quien oiga este sonido cae en un trance repentino."},
	CANCIONRABIA : {value: 45, name: "Canción de rabia", descripcion: "Este Don libera la Bestia que hay en los demás, obligando por ejemplo a un Garou a pasar a Crinos o a un Vampiro a irse al Frenesí. Utilizado contra un humano, lo convierte en un maníaco peligroso y potencialmente homicida."},
	CANCIONBERSERKER : {value: 46, name: "Canción del berserker", descripcion: "El Hombre Lobo entra en un Frenesí voluntario en el que resiste las heridas, es inmune a muchos Dones y puede tomar la forma Crinos de inmediato. A diferencia del Frenesí normal, puede salir de él cuando desee."},
	CANTOMORFEO : {value: 47, name: "Canto de Morfeo", descripcion: "El Hijo de Gaia puede inducir un sueño repentino y reparador en su objetivo."},
	CANTOSALVAJE : {value: 48, name: "Canto salvaje", descripcion: "El cántico del Fianna insufla mayor valor al resto de sus camaradas, quienes se lanzan al ataque convencidos de su victoria."},
	CAPULLO : {value: 49, name: "Capullo", descripcion: "El Garou se cubre con una epidermis gruesa y opaca que le hace inmune a casi cualquier ataque."},
	CARAPESTE : {value: 50, name: "Cara de peste", descripcion: "El Lupino toma la apariencia de un leproso."},
	CICACTRICESABRASADORAS : {value: 51, name: "Cicatrices abrasadoras", descripcion: "Los Danzantes suelen hacerse heridas que en algunas ocasiones brillan con una energía malsana. Con este Don, esa energía se dirige hacia una víctima a la que parece ir comiendo por dentro."},
	CLARIDAD : {value: 52, name: "Claridad", descripcion: "El Hombre Lobo puede ver a través de la niebla o la oscuridad total. También reconoce ilusiones o incluso cosas invisibles."},
	COCINAR : {value: 53, name: "Cocinar", descripcion: "El Garou puede convertir en alimento cualquier tipo de objeto pequeño que se encuentre."},
	COGEROLVIDADO : {value: 54, name: "Coger lo olvidado", descripcion: "Este es un Don que usa cada Ragabash ladrón. Si logra robar algo, la víctima olvidará que alguna vez poseyó ese objeto."},
	COLAMONO : {value: 55, name: "Cola de mono", descripcion: "El Lupino es capaz de desarrollar una cola con la que puede colgarse, agarrar cosas o enlazarse a las ramas. "},
	COMPASION : {value: 56, name: "Compasión", descripcion: "Este Don permite al Hombre Lobo utilizar sus capacidades ancestrales en un duelo o en la batalla con la seguridad de que no matará al adversario."},
	COMPROMISO : {value: 57, name: "Compromiso", descripcion: "Este Don obliga a los destinatarios a cumplir con la voluntad del Garou en todo momento, a excepción de peticiones que vayan contra los instintos vitales de los obligados."},
	CONSCIENCIAPRETERNATURAL : {value: 58, name: "Consciencia preternatural", descripcion: "El Lupino es capaz de anticipar cada movimiento de un oponente, lo que le permite tener siempre ventaja en un combate."},
	CONTROLARARTEFACTOCOMPLEJO : {value: 59, name: "Controlar artefacto complejo", descripcion: "El Garou es capaz de llegar a un trato con Espíritus de maquinaria compleja, de modo que ésta funcione según su voluntad."},
	CONTROLARARTEFACTOSIMPLE : {value: 60, name: "Controlar artefacto simple", descripcion: "El Garou puede comunicarse con los Espíritus elementales de los artefactos y aparatos más sencillos haciendo que éstos funcionen o se estropeen según le convenga."},
	CONVOCARCACERIA : {value: 61, name: "Convocar la Cacería", descripcion: "El Garou puede invocar la Cacería Salvaje de la mitología celta para que hostigue y extermine al mal."},
	CORAZONFURIA : {value: 62, name: "Corazón de furia", descripcion: "El Hombre Lobo canaliza su ira evitando así caer en Frenesí."},
	CORAZONHIELO : {value: 63, name: "Corazón de hielo", descripcion: "El Garou puede convertir en hielo el corazón u otros órganos internos de una víctima."},
	CORDONUMBRAL : {value: 64, name: "Cordón umbral", descripcion: "El Garou teje una seda espiritual casi invisible gracias a la cual puede volver de la Umbra al mundo real en caso de que se pierda."},
	CORNAMENTAEMPALADOR : {value: 65, name: "Cornamenta del empalador", descripcion: "Don conocido por los temibles guerreros caídos en la Espiral Negra. El Garou desarrolla unos cuernos sobrenaturales que provocan gran daño."},
	CORRERCIELO : {value: 66, name: "Correr por el cielo", descripcion: "El Garou puede correr a gran velocidad por el aire."},
	CORRERNIEVE : {value: 67, name: "Correr por la nieve", descripcion: "El Garou puede desplazarse por la nieve o el hielo como si fuera un terreno sólido y estable."},
	CREARELEMENTO : {value: 68, name: "Crear Elemento", descripcion: "El Garou puede crear una pequeña cantidad de alguno de los elementos básicos: aire, agua, fuego o tierra."},
	CRIATURAGLASTO : {value: 69, name: "Criatura de Glasto", descripcion: "El Garou pinta algún tipo de criatura en su cuerpo que posteriormente podrá cobrar vida contra un oponente. "},
	CUERPOCACHORRO : {value: 70, name: "Cuerpo de cachorro", descripcion: "Este Don permite al Lupino maldecir de tal manera a un enemigo que el cuerpo de la víctima queda debilitado e incluso paralizado."},
	CURACIONCOMBATE : {value: 71, name: "Curación en combate", descripcion: "El Ahroun es capaz de curarse en medio de cualquier refriega sin necesidad ni de detenerse."},
	DAGAMENTE : {value: 72, name: "Daga de la mente", descripcion: "El Danzante puede hacer que una Perdición genere una determinada sensación en una víctima."},
	DEFECTOFATAL : {value: 73, name: "Defecto fatal", descripcion: "Permite al Lupino distinguir las habilidades y defectos físicos de un contrincante en el combate."},
	DESCORRERVELO : {value: 74, name: "Descorrer el Velo", descripcion: "Estos Garou legendarios son capaces de inmunizar a cualquier humano ante los efectos del Delirio que sufren al ver un Hombre Lobo en Crinos."},
	DESFIGURAR : {value: 75, name: "Desfigurar", descripcion: "El Señor de la Sombra puede provocar una cicatriz, herida, pústula o mancha deshonrosa e incluso humillante en un enemigo."},
	DESLUMBRAR : {value: 76, name: "Deslumbrar", descripcion: "El Garou abruma a su blanco con la pureza de Gaia, de modo que la víctima se queda atónita y callada."},
	DESTILAR : {value: 77, name: "Destilar", descripcion: "El Fianna es capaz de convertir cualquier líquido en una bebida alcohólica que suele producir embriaguez rápidamente."},
	DETENERFLUJOCORAZON : {value: 78, name: "Detener el flujo del corazón", descripcion: "Los Garou que conocen este Don lo utilizan de modo exclusivo contra los Vampiros, ya que impide que éstos puedan usar su Sangre para activar sus poderes o hacerse más fuertes. "},
	DETENERHUIDACOBARDE : {value: 79, name: "Detener la huida del cobarde", descripcion: "El Hombre Lobo puede impedir que un enemigo huya."},
	DIAGNOSTICO : {value: 80, name: "Diagnóstico", descripcion: "Con sólo una mirada, el Lupino sabe que es lo que no funciona en una máquina."},
	DIRIGIRALMA : {value: 81, name: "Dirigir el alma", descripcion: "El Hombre Lobo puede utilizar su Rabia o su Gnosis para lograr los efectos de la Fuerza de la Voluntad."},
	DIRIGIRTORMENTA : {value: 82, name: "Dirigir la tormenta", descripcion: "El Señor de la Sombra es capaz de controlar el Frenesí de otro Garou para que ataque a quien él considere."},
	DISTORSIONKAOS : {value: 83, name: "Distorsión del Kaos", descripcion: "La Garou puede invocar al Kaos, la fuerza primordial que mueve el mundo. Varios Espíritus seguidores del Kaos acuden en ayuda de la Furia."},
	DISTRACCIONES : {value: 84, name: "Distracciones", descripcion: "El Hombre Lobo aúlla y gruñe de modo que descentra a su oponente."},
	DOMINIO : {value: 85, name: "Dominio", descripcion: "Con este nivel, el Garou se convierte en un completo caudillo cuyas órdenes no desobedecerán otros Hombres Lobo, sean de la Tribu que sean."},
	DONSAL : {value: 86, name: "Don de la sal", descripcion: "El Lupino es capaz de conservar alimentos durante largo tiempo sin que se pudran."},
	DONSALAMANDRA : {value: 87, name: "Don de la salamandra", descripcion: "El Garou es inmune al daño que cause el fuego."},
	DONTOTEM : {value: 88, name: "Don del Tótem", descripcion: "El Garou tiene una comunicación directa y especial con el Tótem de su Tribu, a quien puede rogar ayuda y poderes. Cada Tótem otorga un poder determinado al Lupino que utilice este poder."},
	DONELEMENTAL : {value: 89, name: "Don Elemental", descripcion: "El Garou puede invocar la fuerza primordial de Gaia y dominar los espíritus de los elementos para que éstos reaccionen según sus deseos."},
	DOPPELGANGER : {value: 90, name: "Doppelganger", descripcion: "El Lupino puede tomar la apariencia exacta de otro ser, sea humano o Garou."},
	DUENDES : {value: 91, name: "Duendes", descripcion: "El Lupino es capaz de estropear cualquier aparato o dispositivo."},
	ALARIDOBANSHEE : {value: 92, name: "El alarido de la Banshee", descripcion: "El Hombre Lobo profiere un aullido que inquieta a todo aquel que lo escucha hasta el punto de que muchos huyen espantados."},
	BESOHELIOS : {value: 93, name: "El beso de Helios", descripcion: "El Garou se vuelve inmune al daño que provoca el fuego. Puede incluso hacer arder partes de su cuerpo durante un tiempo."},
	BOSQUEVIVIENTE : {value: 94, name: "El bosque viviente", descripcion: "El Garou logra la protección de los poderes del bosque. La naturaleza le refugiará e impedirá que sea perseguido o atacado."},
	DONMOFETA : {value: 95, name: "El Don de la mofeta", descripcion: "El Garou puede esparcir almizcle como lo hace una mofeta haciendo que el blanco vomite casi de inmediato."},
	DONTERMITA : {value: 96, name: "El Don de la termita", descripcion: "El Lupino puede hacer que la madera o el papel se descompongan con gran rapidez."},
	DONDUENDE : {value: 97, name: "El don del duende", descripcion: "El Garou puede crecer hasta el triple de su tamaño normal o encoger hasta ser poco más que un perrito."},
	DONPUERCOESPIN : {value: 98, name: "El Don del puercoespín", descripcion: "El pelaje del Garou se eriza y se afila con cientos de espinas."},
	GRANSALTO : {value: 99, name: "El gran salto", descripcion: "El Lupino puede cubrir grandes distancias con un sólo salto."},
	LOBOPUERTA : {value: 100, name: "El lobo en la puerta", descripcion: "Este Don provoca un miedo profundo en un humano sobre una determinada zona salvaje, de modo que no querrá acercarse nunca a ella."},
	MORDISCOFENRIS : {value: 101, name: "El mordisco de Fenris", descripcion: "El Garou con este poder tiene una mandíbula de tal potencia que puede amputar extremidades de cuajo con un mordisco."},
	PODERVOLUNTAD : {value: 102, name: "El poder de la voluntad", descripcion: "El Garou con este poder inspira a sus congéneres hasta tal punto de que le seguirán a la muerte si fuera necesario."},
	PULSOINVISIBLE : {value: 103, name: "El pulso de lo invisible", descripcion: "El Hombre Lobo con este poder es capaz de detectar en todo momento la actividad espiritual que hay a su alrededor, así como interactuar con ella o percibir cambios en la Umbra."},
	EMPATIA : {value: 104, name: "Empatía", descripcion: "El Colmillo Plateado alcanza una mayor comprensión de las necesidades y deseos de los que le rodean."},
	EQUILIBRIO : {value: 105, name: "Equilibrio", descripcion: "El Garou puede caminar por cualquier cuerda, alféizar o superficie similar sin problema, incluso aunque esté resbaladiza o helada."},
	ESCALOFRIODESESPERACION : {value: 106, name: "Escalofrío de desesperación", descripcion: "El Garou asume un aspecto aterrador, más amenazador y sombrío que genera pánico en quienes le vean."},
	ESCARCHAMADRUGADA : {value: 107, name: "Escarcha de la madrugada", descripcion: "El Lupino puede invocar una intensa helada mística que congela a quienes la sufran."},
	ESPIRITUAMIGO : {value: 108, name: "Espíritu amigo", descripcion: "Este Don permite al Lupino comunicarse con los Espíritus, que no ven en él ninguna amenaza."},
	ESPIRITUREFRIEGA : {value: 109, name: "Espíritu de la refriega", descripcion: "El Hombre Lobo siempre ataca en primer lugar en cualquier enfrentamiento."},
	ESPIRITUPAJARO : {value: 110, name: "Espíritu del pájaro", descripcion: "El Hombre Lobo puede elevarse y flotar en el aire."},
	ESPIRITUPEZ : {value: 111, name: "Espíritu del pez", descripcion: "El Garou puede respirar bajo el agua."},
	ESPIRITUMALEABLE : {value: 112, name: "Espíritu maleable", descripcion: "El Garou puede cambiar la forma o el objetivo de un Espíritu"},
	EVITARFATALIDAD : {value: 113, name: "Evitar fatalidad", descripcion: "El Contemplaestrellas es capaz de evitar un desastre o un giro malévolo del destino."},
	EXIGIRVENGANZA : {value: 114, name: "Exigir venganza", descripcion: "Cuando el Lupino aúlla un nombre elegido por él, todo Hombre Lobo que lo escucha sabe que es el nombre de un gran traidor y actuará en consecuencia."},
	EXORCISMO : {value: 115, name: "Exorcismo", descripcion: "El Garou es capaz de expulsar a un Espíritu de un lugar o de un objeto."},
	EXPRIMIRESPIRITU : {value: 116, name: "Exprimir espíritu", descripcion: "El Garou puede tomar el poder de un Espíritu para sus propios fines."},
	EXPULSARTOTEM : {value: 117, name: "Expulsar tótem", descripcion: "El Uktena logra que un Tótem de una manada no pueda comunicarse con ésta cortando los vínculos místicos que hay también entre ellos durante ese tiempo."},
	FALSODISPARO : {value: 118, name: "Falso disparo", descripcion: "Un Morador del Cristal es capaz de realizar proezas de puntería gracias a este Don, aunque el disparo no dañará directamente a una víctima."},
	FASCINACION : {value: 119, name: "Fascinación", descripcion: "El Hombre Lobo muestra una aureola de mando y señorío que le hace más convincente y poderoso."},
	FAVORELEMENTAL : {value: 120, name: "Favor del elemental", descripcion: "El Lupino se gana el favor de un Espíritu Elemental de la naturaleza, que le ayudará en alguna acción concreta que tenga que ver con el fuego, el agua, el aire o la tierra."},
	FELIZIGNORANCIA : {value: 121, name: "Feliz ignorancia", descripcion: "El Hombre Lobo puede volverse invisible a todos los sentidos, Espíritus o dispositivos de vigilancia."},
	FISGAR : {value: 122, name: "Fisgar", descripcion: "Observando a través de un espejo o superficie reflectante, el Uktena puede observar lugares alejados."},
	FLECHAARTEMISA : {value: 123, name: "Flecha de Artemisa", descripcion: "Con este poder, cualquier lanzamiento de una flecha de la Furia Negra tendrá éxito e impactará además con la fuerza de un rayo. "},
	FLUJODATOS : {value: 124, name: "Flujo de datos", descripcion: "Los Moradores del Cristal del siglo XXI son capaces de manejar un ordenador remoto que tenga a la vista en una habitación."},
	FORMATOTEM : {value: 125, name: "Forma del tótem", descripcion: "El Garou con este poder toma la apariencia y poderes del Tótem-Perdición de su manada. "},
	FORTALEZAMENSAJERO : {value: 126, name: "Fortaleza del mensajero", descripcion: "El Garou es capaz de correr durante tres días sin necesidad de parar a descansar, comer o beber. Después de que duren los efectos, deberá dormir durante una semana."},
	FUERZADOMINADOR : {value: 127, name: "Fuerza del dominador", descripcion: "El Garou alimenta su ira tomándola de la Rabia de otro."},
	FUERZAINTERIOR : {value: 128, name: "Fuerza interior", descripcion: "El Garou puede transformar su ira interior en una voluntad de hierro."},
	FURIAESPUMOSA : {value: 129, name: "Furia espumosa", descripcion: "El mordisco del Garou genera un líquido venenoso que incita la rabia o estados de gran alteración en quien lo sufre."},
	GARGANTA : {value: 130, name: "Garganta", descripcion: "El Garra Roja puede aumentar su Rabia, Gnosis o Fuerza de Voluntad para utilizarlas cuando sea necesario."},
	GARRAASTILLADA : {value: 131, name: "Garra astillada", descripcion: "Al clavar su garra en un contrincante, ésta deja multitud de astillas muy difíciles de curar y sacar. "},
	GARRAURRACALADRONA : {value: 132, name: "Garra de la urraca ladrona", descripcion: "El Garou es capaz de robar los poderes sobrenaturales de otra criatura para usarlos él mismo."},
	GARRASCUCHILLOS : {value: 133, name: "Garras como cuchillos", descripcion: "El Garou puede afilar sus garras hasta convertirlas en agudas navajas."},
	GARRASPLATA : {value: 134, name: "Garras de plata", descripcion: "Este Don convierte las garras del Hombre Lobo en plata, lo que le convierte en un enemigo casi invencible para otros Garou."},
	GARRASTOXICAS : {value: 135, name: "Garras tóxicas", descripcion: "Las garras de estos Lupinos pueden soltar veneno y sustancias semejantes."},
	GOLPEGRACIA : {value: 136, name: "Glope de gracia", descripcion: "La Lupina estudia a su enemigo de tal modo que su siguiente movimiento es un golpe devastador."},
	GOLPEDOLOROSO : {value: 137, name: "Golpe doloroso", descripcion: "El Hombre Lobo es capaz de dar un golpe tan preciso que aterroriza a quienes lo ven."},
	GOLPEPIADOSO : {value: 138, name: "Golpe piadoso", descripcion: "El Garou puede someter a un enemigo en combate sin dañarlo."},
	GOLPEARAIRE : {value: 139, name: "Golpear al aire", descripcion: "El Garou es incapaz de atacar a su adversario, pero éste tampoco podrá impactarle nunca por mucho que lo intente."},
	GRACIAUNICORNIO : {value: 140, name: "Gracia de Unicornio", descripcion: "Quienes conocen este Don son imperturbables. Es prácticamente imposible llevarlos hacia el Frenesí o la ira extrema."},
	GRITOGAIA : {value: 141, name: "Grito de Gaia", descripcion: "El Garou salta en medio de sus enemigos y genera un aullido terrible capaz de dañar a sus oponentes."},
	GRITOPRESA : {value: 142, name: "Grito de la presa", descripcion: "El Lupino puede emitir un sonido falso (el de alguien en apuros, un animal herido...) para atraer a alguien hacia él."},
	GRUNIDODEPREDADOR : {value: 143, name: "Gruñido del depredador", descripcion: "El Garou profiere un gruñido salvaje que aterroriza a sus oponentes hasta someterlos."},
	HABLAMENTAL : {value: 144, name: "Habla mental", descripcion: "El Garou es capaz de comunicarse con otro ser que esté a gran distancia mediante el pensamiento. No permite leer mentes."},
	HABLAONIRICA : {value: 145, name: "Habla onírica", descripcion: "El Garou puede entrar en los sueños de otro e interferir en ellos."},
	HABLARESPIRITUSVIENTO : {value: 146, name: "Hablar con los espíritus del viento", descripcion: "El Hombre Lobo puede comunicarse con los seres espirituales del aire que cabalgan los vientos del mundo."},
	HALITOAZUL : {value: 147, name: "Hálito azul", descripcion: "El Hombre Lobo puede exhalar un polvo mortífero que puede asfixiar a quien lo respire."},
	HALOSOL : {value: 148, name: "Halo del Sol", descripcion: "El Garou con este poder queda rodeado de una esfera resplandeciente semejante a la luz solar. Esta visión hace huir a ciertas criaturas del Wyrm."},
	HARANO : {value: 149, name: "Harano", descripcion: "El Wendigo puede inducir ese estado mental depresivo en una víctima."},
	HEDORREPULSIVO : {value: 150, name: "Hedor repulsivo", descripcion: "El Garou aumenta su olor corporal de tal modo que genera una fetidez abrumadora."},
	HERMOSAMENTIRA : {value: 151, name: "Hermosa mentira", descripcion: "Los Danzantes realizan acciones atroces que pueden provocar un Delirio todavía más potente en un testigo humano. Con este Don se logra que dicha persona genere todo tipo de excusas y murallas mentales ante lo que haya podido presenciar."},
	IGNORARGOLPEMORTAL : {value: 152, name: "Ignorar golpe mortal", descripcion: "El Colmillo es capaz de resistir un ataque inevitablemente letal."},
	ILUSION : {value: 153, name: "Ilusión", descripcion: "El Garou puede generar una ilusión que engaña a uno o varios sentidos."},
	IMANBASURA : {value: 154, name: "Imán de basura", descripcion: "Los residuos de una zona se convierten en aliados del Roehuesos, estorbando a su oponente hasta poder llegar a inmovilizarlo."},
	IMITACION : {value: 155, name: "Imitación", descripcion: "El Galliard es capaz de reproducir fielmente prácticamente cualquier sonido imaginable."},
	INCAUTARLIMITE : {value: 156, name: "Incautar el límite", descripcion: "Gracias a este Don, en un combate igualado hay un momento en el que la balanza cae del lado del Señor de la Sombra."},
	INFESTAR : {value: 157, name: "Infestar", descripcion: "El Garou puede llamar a una horda de babosas, cucharachas, ratas, insectos, etc. que invadirán una zona escogida por él."},
	INSIGNIASDIVINAS : {value: 158, name: "Insignias divinas", descripcion: "El Lupino se rodea una brillante armadura mística que da esperanza a sus congéneres y atemoriza a sus enemigos."},
	INSPIRACION : {value: 159, name: "Inspiración", descripcion: "Quienes poseen esta sabiduría son reconocidos de inmediato como líderes en el combate y los demás seguirán sus órdenes."},
	INTERFERIRTECNOLOGIA : {value: 160, name: "Interferir tecnología", descripcion: "El Hombre Lobo puede hacer que un aparato deje de funcionar."},
	INTRANQUILIZAR : {value: 161, name: "Intranquilizar", descripcion: "El Garou hace que la víctima sienta una terrible depresión o un proceso de ansiedad."},
	INVISIBILIDAD : {value: 162, name: "Invisibilidad", descripcion: "El Garou se hace invisible y es casi imposible detectarlo con ningún sentido."},
	INVOCARCUERVOTORMENTA : {value: 163, name: "Invocar al Cuervo de la Tormenta", descripcion: "El Garou puede hacer que los Cuervos de la Tormenta, animales místicos relacionados con el Tótem de la Tribu, acudan en su ayuda como espías y mensajeros."},
	INVOCARARANARED : {value: 164, name: "Invocar araña de la red", descripcion: "Obviamente, este Don suele puede ser utilizado en partidas modernas. El Garou invoca a uno de los extraños Espíritus de la Tejedora que habitan en Internet. El Garou puede entonces controlar parte de la Red, ordenadores a gran escala, etc."},
	INVOCARESPIRITUSTORMENTA : {value: 165, name: "Invocar los espíritus de la tormenta", descripcion: "El Garou puede crear prácticamente cualquier fenómeno metereológico que desee."},
	INVOCARTALISMAN : {value: 166, name: "Invocar talismán", descripcion: "El Caminante puede hacer que aparezca en su mano un Talismán concreto que conozca o haya visto, esté el objeto donde esté."},
	INVULNERABILIDADHIERRO : {value: 167, name: "Invulnerabilidad al hierro", descripcion: "El Fenrir puede hacerse inmune al hierro de las armas de sus enemigos. Las espadas y lanzas rebotan o se rompen al tocarle."},
	IRAGAIA : {value: 168, name: "Ira de Gaia", descripcion: "El Hombre Lobo se muestra como el guerrero escogido de Gaia, lo que provoca un terror instantáneo a las criaturas del Wyrm."},
	IRAPRIMARIA : {value: 169, name: "Ira primaria", descripcion: "El Hombre Lobo libera una cantidad mayor de Rabia a costa de herirse a sí mismo."},
	JUEGOSOMBRAS : {value: 170, name: "Juego de sombras", descripcion: "El Hombre Lobo puede otorgar vida a su sombra que actuará a sus órdenes."},
	JUEGOSCEREBRALES : {value: 171, name: "Juegos cerebrales", descripcion: "Este Don permite al Lupino manipular las emociones de aquellos con quienes habla de cualquier manera que desee."},
	FUERZADEBER : {value: 172, name: "La fuerza del deber", descripcion: "El Hombre Lobo logra una mayor determinación y eficacia en casos de necesidad."},
	HORDAVALHALLA : {value: 173, name: "La horda del Valhalla", descripcion: "El Garou puede pedir ayuda al Tótem tribal, que enviará desde la Umbra a espíritus-lobo del Valhalla vikingo."},
	LLAMADASELVA : {value: 174, name: "La llamada de la selva", descripcion: "El Lupino puede llamar a otros compañeros con sus aullidos. Este aullido se utiliza a menudo para convocar a los Hombres Lobo a un consejo."},
	LLAMADADEBER : {value: 175, name: "La llamada del deber", descripcion: "El Garou puede invocar Espíritus si conoce su nombre y puede darles una orden."},
	LLAMADAWYRM : {value: 176, name: "La llamada del Wyrm", descripcion: "Este es uno de los Dones más peligrosos y discutidos en la Nación Garou, ya que atrae a las criaturas del Wyrm. Es, por ello, valioso para tender una emboscada o sacar a un enemigo de su escondite."},
	MALDICIONDIONISIO : {value: 177, name: "La maldición de Dionisio", descripcion: "El Garou puede transformar en un lobo normal a cualquier humano u Hombre Lobo."},
	MENTIRAREYNARD : {value: 178, name: "La mentira de Reynard", descripcion: "El Lupino puede hacer cualquier mentira totalmente creíble."},
	MIRADABALOR : {value: 179, name: "La mirada de Balor", descripcion: "Uno de los ojos del Fianna comienza a brillar con una luz roja capaz de dañar y acobardar a cualquiera que le mire."},
	MIRADAGORGONA : {value: 180, name: "La mirada de la gorgona", descripcion: "Los ojos de una Furia Negra con este poder pueden convertir a un ser vivo en piedra."},
	PUERTALUNA : {value: 181, name: "La puerta de la Luna", descripcion: "Este poder funciona sólo de noche y cuando al menos parte de la luna sea visible. Permite al Garou abrir un Puente Lunar que básicamente le permite teletransportarse a otro lugar."},
	VENGANZAGAIA : {value: 182, name: "La venganza de Gaia", descripcion: "El Garra Roja con este poder puede hacer que los accidentes del terreno cobren vida y ataquen a sus enemigos. Las ramas les azotarán, las piedras volarán, la hiedra les enredará, etc."},
	LANZALLEU : {value: 183, name: "Lanza de Lleu", descripcion: "El Fianna imbuye de poder a una lanza, que se clava con mayor fuerza y precisión en el enemigo. "},
	LARGADISTANCIA : {value: 184, name: "Larga distancia", descripcion: "El Garou puede reducir la duración de un viaje largo."},
	LENGUAJEANIMAL : {value: 185, name: "Lenguaje animal", descripcion: "El Garou es capaz de comunicarse con los animales."},
	LENGUAJEMUNDO : {value: 186, name: "Lenguaje del mundo", descripcion: "El Garou es capaz de comunicarse en cualquier idioma con el que se encuentre."},
	LENGUAJEESPIRITUAL : {value: 187, name: "Lenguaje espiritual", descripcion: "El Garou puede comunicarse con los espíritus que encuentre."},
	LENGUAS : {value: 188, name: "Lenguas", descripcion: "El Caminante es capaz de comunicarse en cualquier idioma humano conocido."},
	LINEASPODER : {value: 189, name: "Líneas de poder", descripcion: "El Fianna es capaz de manipular las finas hebras de energía mística del mundo para variar su rastro y evitar ser perseguido y detectado."},
	LLAMAARDIENTE : {value: 190, name: "Llama ardiente", descripcion: "El Garou hace que una luz plateada se encienda alrededor de su cuerpo."},
	LLAMARELEMENTAL : {value: 191, name: "Llamar a elemental", descripcion: "El Lupino puede invocar a su presencia a uno de los cuatro elementos."},
	LLAMARELEMENTALWYRM : {value: 192, name: "Llamar a elemental del Wyrm", descripcion: "El Lupino puede invocar a su presencia a una de las versiones del Wyrm de los cuatro elementos."},
	LLAMARESPIRITUIGNEO : {value: 193, name: "Llamar a espíritu ígneo", descripcion: "El Lupino puede invocar a un Espíritu del Fuego para que realice alguna acción para él."},
	LLAMARBRISA : {value: 194, name: "Llamar a la brisa", descripcion: "Permite al Lupino crear una potente brisa fría que actúa según su voluntad."},
	LLAMARCORROSION : {value: 195, name: "Llamar a la corrosión", descripcion: "El Roehuesos puede debilitar y destruir el metal con su aliento."},
	LLAMARESPIRITUCANIBAL : {value: 196, name: "Llamar al espíritu canibal", descripcion: "El Garou puede invocar a un avatar de su Tótem Tribal que rastreará a una víctima escogida por el Garou para comerse su corazón."},
	LLAMASHESTIA : {value: 197, name: "Llamas de Hestia", descripcion: "La Furia Negra invoca una llama blanca que le permitirá purificar cuanto toque. Al mismo tiempo, resultará dañina para las criaturas del Wyrm. "},
	LOBOTOMIAFEROZ : {value: 198, name: "Lobotomía feroz", descripcion: "Con sólo un pensamiento, el Hombre Lobo puede dejar la mente de un oponente en un permanente estado vegetativo."},
	LOCURA : {value: 199, name: "Locura", descripcion: "El Hombre Lobo puede inducir la locura en los demás."},
	ALIADOSABAJO : {value: 200, name: "Los aliados de abajo", descripcion: "Conocido por los Danzantes Galliard. Se despierta a los espirítus subterráneos del Wyrm que provocan terremotos de distinta intensidad."},
	OIDOSMURCIELAGO : {value: 201, name: "Los oídos del murciélago", descripcion: "El Hombre Lobo puede detectar objetos y adversarios mediante el oído, como hacen los murciélagos."},
	LUZFEERICA : {value: 202, name: "Luz feérica", descripcion: "El Lupino puede invocar una llama espectral para ver en la más absoluta oscuridad."},
	MADRIGUERA : {value: 203, name: "Madriguera", descripcion: "El Hombre Lobo escarba un túnel dentro de la tierra. Así puede esconderse o recorrer distancias sin ser visto."},
	MAESTROFUEGO : {value: 204, name: "Maestro del fuego", descripcion: "El Lupino es capaz de curar más fácilmente el daño causado por el fuego."},
	MALDICIONEOLO : {value: 205, name: "Maldición de Eolo", descripcion: "La Garou invoca una niebla sobrenatural que provoca terror en quien la ve. Ella podrá ver a través del manto de niebla, algo que les costará mucho más a sus enemigos."},
	MALDICIONCORRUPCION : {value: 206, name: "Maldición de la corrupción", descripcion: "El Garou es capaz de sembrar la duda sobre cualquiera, de modo que ni los más firmes aliados de la víctima confían plenamente en ella."},
	MALDICIONCUERVO : {value: 207, name: "Maldición del cuervo", descripcion: "Cualquier arma arrojadiza se dirige sin poder ser detenida hacia el objetivo que desee el Garou."},
	MALDICIONODIO : {value: 208, name: "Maldición del odio", descripcion: "El Garou puede acobardar a un oponente al mostrarle el odio y la rabia que siente en su interior."},
	MANADASOMBRA : {value: 209, name: "Manada de sombras", descripcion: "El Garou invoca a una o varias sombras semejantes a él que le ayudan en el combate."},
	MANADAFANTASMA : {value: 210, name: "Manada fantasma", descripcion: "El Wendigo puede invocar a sus antepasados para que acudan en su ayuda en forma de grupo espectral."},
	MANDIBULACRISPADA : {value: 211, name: "Mandíbula crispada", descripcion: "El Lupino convierte su mandíbula en una prisión de la que ninguna presa puede soltarse."},
	MANOSENORTIERRA : {value: 212, name: "Mano de Señor de la Tierra", descripcion: "El Garou puede mover con su mente objetos o sustancias hasta un peso máximo de 250 kg."},
	MANSIONCARTON : {value: 213, name: "Mansión de cartón", descripcion: "El Roehuesos puede convertir una simple caja de cartón en un refugio viable."},
	MARCARENEMIGO : {value: 214, name: "Marcar al enemigo", descripcion: "El Fenrir es capaz de crear una señal mística sobre un enemigo que es reconocible para el resto de miembros de la Tribu."},
	MAESTROARMAS : {value: 215, name: "Maestro de armas", descripcion: "El Lupino es capaz de utilizar cualquier arma con máxima destreza. "},
	MECANISMOCAOTICO : {value: 216, name: "Mecanismo caótico", descripcion: "Con esta capacidad, el Lupino equilibra su parte mística y su mitad más primordial, pudiendo usar Gnosis y Rabia al mismo tiempo."},
	MENDIGAR : {value: 217, name: "Mendigar", descripcion: "Los Roehuesos con este don siempre logran despertar la compasión y la solidaridad de aquellos a quienes piden."},
	MENTEANIMAL : {value: 218, name: "Mente animal", descripcion: "El Garou es capaz de reducir las facultades mentales de un blanco a las de un animal durante un tiempo."},
	MILFORMAS : {value: 219, name: "Mil formas", descripcion: "El Lupino es capaz de adoptar la forma de cualquier animal de tamaño comprendido entre un pájaro y un bisonte con las características propias de tal animal."},
	MILVOCES : {value: 220, name: "Mil voces", descripcion: "El Garou puede disimular sus pasos generando una serie de sonidos ilusorios. Los Danzantes lo utilizan para generar falsos aullidos o pisadas fantasmales."},
	MIRADAINTIMIDATORIA : {value: 221, name: "Mirada intimidatoria", descripcion: "Mirando fijamente a los ojos de un humano o de un animal, la víctima huye aterrada."},
	MIRADAPARALIZANTE : {value: 222, name: "Mirada paralizante", descripcion: "El Lupino es capaz de inmovilizar a un blanco que queda aterrorizado por la mirada del Hombre Lobo."},
	MUDA : {value: 223, name: "Muda", descripcion: "El Garou es capaz de cambiar de piel casi inmediatamente, lo que dificulta mucho el poderlo apresar. "},
	MUNECOFETICHE : {value: 224, name: "Muñeco fetiche", descripcion: "El Garou puede dañar a un objetivo a distancia mutilando a una muñeca que elabora a imagen de la víctima."},
	MUROGRANITO : {value: 225, name: "Muro de granito", descripcion: "El Garou puede invocar un muro de tierra o piedra tras el que protegerse. Este muro se moverá con el Garou y le protegerá desde todos los ángulos."},
	NIEBLA : {value: 226, name: "Niebla", descripcion: "El Garou invoca una niebla sobrenatural que provoca terror en quien la ve. Él podrá ver a través del manto de niebla, algo que les costará mucho más a sus enemigos."},
	NOMBRARESPIRITU : {value: 227, name: "Nombrar al espíritu", descripcion: "El Hombre Lobo puede discernir de qué tipo es un Espíritu y cuáles son sus características principales."},
	OBEDIENCIA : {value: 228, name: "Obediencia", descripcion: "El Hombre Lobo con este poder se convierte en un líder supremo que obtiene la obediencia ciega de quien escuche sus órdenes."},
	OCULTARDEPREDADOR : {value: 229, name: "Ocultar al depredador", descripcion: "El Garou oculta su Rabia de modo que no asusta a los animales."},
	OCULARMANCHA : {value: 230, name: "Ocultar mancha", descripcion: "Con este poder, el Danzante puede esconder su vínculo con el Wyrm ante cualquier intento de descubrirlo."},
	OJOCOBRA : {value: 231, name: "Ojo de la cobra", descripcion: "Con sólo una mirada, el Garou puede atraer a cualquiera a su lado."},
	OJOHALCON : {value: 232, name: "Ojo del halcón", descripcion: "El Hombre Lobo ve a gran distancia como lo hace un ave de presa. "},
	OJONUBLADO : {value: 233, name: "Ojo nublado", descripcion: "Permite a un Ragabash convertirse en una mancha borrosa prácticamente imperceptible."},
	OJOSGATO : {value: 234, name: "Ojos de gato", descripcion: "El Hombre Lobo puede ver con total nitidez en medio de una oscuridad total. Los ojos del Garou brillan al utilizar este poder."},
	OLERMIEDO : {value: 235, name: "Oler miedo", descripcion: "El Lupino detecta si quienes le rodean se sienten amenazados por él."},
	OLORAGUACORRIENTE : {value: 236, name: "Olor a agua corriente", descripcion: "El Garou enmascara totalmente su olor corporal, con lo que es casi imposible de rastrear."},
	OLORHOMBRE : {value: 237, name: "Olor a Hombre", descripcion: "El Garou aumenta el olor humano alrededor de sí, haciendo que los animales se sientan nerviosos, pero ayudándole a pasar más desapercibido."},
	OLORMIELDULCE : {value: 238, name: "Olor a miel dulce", descripcion: "Permite al Lupino cubrir a un blanco de un olor dulzón que rápidamente se convierte en atractivo para todo tipo de bichos."},
	OLORAUTENTICAFORMA : {value: 239, name: "Olor de la auténtica forma", descripcion: "El Garou puede saber qué es realmente un sujeto. Esta información se transmite como una sensación olfativa que detecta la verdadera naturaleza del blanco."},
	OLORVISTA : {value: 240, name: "Olor de la vista", descripcion: "El Hombre Lobo consigue que su sentido del olfato tenga las capacidades del de la vista, de modo que puede atacar a criaturas invisibles o moverse en la oscuridad."},
	OLORMASALLA : {value: 241, name: "Olor del más allá", descripcion: "El Lupino puede concentrar sus sentidos de tal manera que puede ver, oír y sentir lo que sucede en un lugar distinto (incluso en la Umbra) con el que esté familiarizado."},
	ORDENARESPIRITU : {value: 242, name: "Ordenar al espíritu", descripcion: "El Hombre Lobo ahora puede manipular a los espíritus que se encuentre dándoles órdenes que espera que ellos cumplan."},
	ORDENARLLAMARADA : {value: 243, name: "Ordenar la llamarada", descripcion: "El Lupino puede controlar y dirigir un incendio."},
	ORIENTACIONCELESTIAL : {value: 244, name: "Orientación celestial", descripcion: "El Hombre Lobo puede orientarse de noche por cualquier terreno desconocido."},
	OSCURECERVERDAD : {value: 245, name: "Oscurecer la verdad", descripcion: "El Ragabash es capaz de decir cualquier mentira por extraña que sea y no despertará desconfianzas."},
	PALABRAHONOR : {value: 246, name: "Palabra de honor", descripcion: "Mientras el Lupino diga la verdad nadie pondrá en duda ni una sola de sus afirmaciones."},
	PALMADAATRONADORA : {value: 247, name: "Palmada atronadora", descripcion: "El Garou da una palmada cuya onda expansiva aturde a quienes se encuentren cerca de él."},
	PARAMOSINHUELLAS : {value: 248, name: "Páramo sin huellas", descripcion: "El Lupino puede variar la percepción que los demás tengan de un determinado territorio con el que esté familiarizado. Los humanos se perderán de modo automático."},
	PARENTELAFEERICA : {value: 249, name: "Parentela feérica", descripcion: "El Hombre Lobo puede llamar en su ayuda a una o varias hadas."},
	PARENTELAFEERICAOSCURA : {value: 250, name: "Parentela Feérica Oscura", descripcion: "Este Don permite al Garou invocar en su ayuda a hadas salvajes y oscuras."},
	PATAGIA : {value: 251, name: "Patagia", descripcion: "El Lupino tiene membranas de piel bajo sus brazos que le permiten planear en distancias cortas."},
	PEGARSE : {value: 252, name: "Pegarse", descripcion: "El Roehuesos se congracia con el Tótem de un Túmulo durante un tiempo, pudiendo pasar como miembro de una manada concreta o de una comunidad Lupina determinada."},
	PERCIBIRCULPA : {value: 253, name: "Percibir culpa", descripcion: "El Fenrir detectará si alguien se siente culpable por algún tipo de delito o de crimen."},
	PERDICIONPROTECTORA : {value: 254, name: "Perdición protectora", descripcion: "El Garou puede invocar a una Perdición para que le ayude."},
	PERSUASION : {value: 255, name: "Persuasión", descripcion: "Permite a un Homínido ser más persuasivo al hablar con los demás."},
	PICOORO : {value: 256, name: "Pico de oro", descripcion: "Todo cuanto el Garou dice es lo que su interlocutor quiere oír."},
	PIELHOMBRE : {value: 257, name: "Piel de hombre", descripcion: "La Furia Negra es un hombre a ojos de quien la observe."},
	PIELWYRM : {value: 258, name: "Piel del Wyrm", descripcion: "El Lupino genera una piel maloliente y llena de bultos que le da un aspecto horrendo, pero también una mayor resistencia al daño."},
	PIESGATO : {value: 259, name: "Pies de gato", descripcion: "Este Don otorga al Lupino la agilidad de un felino, lo que incluye una especial resistencia a las caídas o un equilibrio perfecto."},
	PIESMOSCA : {value: 260, name: "Pies de mosca", descripcion: "El Ragabash puede moverse por paredes verticales o adherirse a techos."},
	PODERIOTHOR : {value: 261, name: "Poderío de Thor", descripcion: "El Hombre Lobo aumenta su fuerza de modo exponencial, provocando estragos entre sus oponentes."},
	PONERBOCAARRIBA : {value: 262, name: "Poner boca arriba", descripcion: "El Garou con este Don impone su voluntad, haciendo que los humanos caigan de rodillas ante él y que los lobos admitan su poderío poniéndose boca arriba."},
	PONZONA : {value: 263, name: "Ponzoña", descripcion: "El Hombre Lobo desarrolla un veneno que puede paralizar e incluso matar a su víctima."},
	POSTURAHEROE : {value: 264, name: "Postura de héroe", descripcion: "El Lupino debe situarse en un alto y canalizar la energía de la tierra sobre él. En ese punto, cada acción que realice tendrá más posibilidad de éxito."},
	PRESAGIARSANGRE : {value: 265, name: "Presagiar sangre", descripcion: "Propio de los Theurge que hay entre los Danzantes. Al observar las vísceras de una víctima pueden tener visiones sobre el futuro."},
	PROTECCIONESPIRITUS : {value: 266, name: "Protección contra Espíritus", descripcion: "Este Don permite al Lupino protegerse de los espíritus que tenga a su alrededor."},
	PUENTESPERSONALES : {value: 267, name: "Puentes personales", descripcion: "El Garou con este Don puede crear Puentes Lunares que sólo él podrá recorrer. El Lupino recorre así distancias kilómetricas en segundos."},
	PUNTODEBIL : {value: 268, name: "Punto débil", descripcion: "El Hombre Lobo puede discernir los puntos débiles de un oponente."},
	QUEBRARHUESO : {value: 269, name: "Quebrar hueso", descripcion: "El Garou es capaz de romper un hueso determinado con un solo golpe. "},
	RASTRODOLOR : {value: 270, name: "Rastro de dolor", descripcion: "La Lupina puede detectar cuando alguien ha sido víctima de algún tipo de abuso."},
	RECICLAR : {value: 271, name: "Reciclar", descripcion: "El Lupino es capaz de destruir casi cualquier cosa construida por el hombre."},
	REMODELAROBJETO : {value: 272, name: "Remodelar", descripcion: "El Lupino puede modelar un material que antes estuviera vivo, de modo que un árbol puede convertirse en un refugio o la piel de un animal en una armadura."},
	RESISTIRDOLOR : {value: 274, name: "Resistir dolor", descripcion: "El Garou es capaz de ignorar el dolor de las heridas y seguir adelante mediante su propia voluntad."},
	RESISTIRTOXINA : {value: 275, name: "Resistir toxina", descripcion: "El Garou no sufre daños por venenos ni enfermedades."},
	REVUELTA : {value: 276, name: "Revuelta", descripcion: "El Garou invoca a una horda de Espíritus malvados que hará que los vagabundos, animales callejeros, desamparados o bandas callejeras sientan una oleada de rabia e ira contra un objetivo concreto."},
	REYBESTIAS : {value: 277, name: "Rey de las bestias", descripcion: "El Lupino puede invocar a animales con los que esté familiarizado, los cuales actuarán bajo sus órdenes."},
	ROCEABUELA : {value: 278, name: "Roce de la abuela", descripcion: "El Lupino es capaz ahora de curar sus propias heridas sean del tipo que sean."},
	ROCEANGUILA : {value: 279, name: "Roce de la anguila", descripcion: "Propio de los Danzantes Ragabash. Provoca una descarga eléctrica en quien toque algún material conductor en concreto."},
	ROCEDERRIBO : {value: 280, name: "Roce del derribo", descripcion: "El Lupino puede mandar a tierra a su rival con sólo tocarlo."},
	ROCEMATERNO : {value: 281, name: "Roce materno", descripcion: "El Lupino es capaz de curar las heridas de los demás, sean Agravadas o no, solamente con rozarlas con las manos."},
	ROER : {value: 282, name: "Roer", descripcion: "El Garou fortalece sus mandíbulas hasta el punto de ser capaz de destruir cualquier material royéndolo. Además, el daño que causa su mordisco es mayor."},
	ROMPERCADENASHOMBRE : {value: 283, name: "Romper las cadenas del hombre", descripcion: "Con su aullido, el Garra Roja puede hacer que los animales domésticos se rebelen furiosos contra sus amos."},
	ROSTROFENRIS : {value: 284, name: "Rostro de Fenris", descripcion: "El Lupino parece más grande y más temible de lo que es realmente."},
	SABIDURIAANTIGUOCAMINO : {value: 285, name: "Sabiduría del antiguo camino", descripcion: "Este Don facilita el contacto que todo Hombre Lobo tiene con sus antepasados, de modo que puede recordar hechos y conocimientos de tiempos remotos."},
	SABIDURIAVIDENTE : {value: 286, name: "Sabiduría del vidente", descripcion: "El Garou puede formular una pregunta, del tipo y complicación que sea, y obtendrá una respuesta verdadera."},
	SALTOCANGURO : {value: 287, name: "Salto de Canguro", descripcion: "Invocando este Don, los Garou pueden saltar a distancias increíbles."},
	SANGREVENENOSA : {value: 288, name: "Sangre venenosa", descripcion: "Este Don permite al Garou convertir su sangre en una sustancia negra y viscosa que daña a cualquiera que entre en contacto con ella."},
	SECRETOS : {value: 289, name: "Secretos", descripcion: "Si el Garou hace una pregunta a alguien que sabe la respuesta, aunque éste no la quiera decir la solución saltará a la mente del Garou."},
	SELECCIONARREBANO : {value: 290, name: "Seleccionar del rebaño", descripcion: "El Garra Roja es capaz de detectar a los enemigos más débiles."},
	SENDAESPIRITUAL : {value: 291, name: "Senda espiritual", descripcion: "El Lupino es capaz de perseguir a un espíritu por los territorios siempre variables de la Umbra."},
	SENDERODESPENSA : {value: 292, name: "Sendero de la despensa", descripcion: "El Roehuesos puede detectar dónde hay alimentos de más que él pueda robar (graneros, despensas, escondites...)"},
	SENTIDOPRESA : {value: 293, name: "Sentido de la presa", descripcion: "El personaje puede rastrear a su presa casi sin posibilidad de fallo, mostrando una orientación perfecta y una velocidad máxima. No sólo sirve para rastrear presas en el mundo real, sino también Espíritus en la Umbra. "},
	SENTIDOSAGUDIZADOS : {value: 294, name: "Sentidos Agudizados", descripcion: "El Garou aumenta en gran medida su capacidad de ver, oler o escuchar durante un breve espacio de tiempo."},
	SENTIDOSMECANICOS : {value: 295, name: "Sentidos mecánicos", descripcion: "El Hombre Lobo asemeja su percepción sensorial a la de una máquina, de modo que podrá convertir sus oídos en un sónar o cambiar sus ojos para detectar rayos ultravioleta, por ejemplo."},
	SENTIRWYRM : {value: 296, name: "Sentir al Wyrm", descripcion: "El Lupino es capaz de detectar manifestaciones del Wyrm cerca de él. Es un sentido místico, una intuición que le permite detectar por ejemplo a Perdiciones o Vampiros."},
	SENTIREQUILIBRIO : {value: 297, name: "Sentir equilibrio", descripcion: "El Philodox es capaz de detectar si el Wyrm, el Kaos o la Tejedora es predominante en un terreno o sobre un sujeto."},
	SENTIRANTINATURAL : {value: 298, name: "Sentir lo antinatural", descripcion: "El Garou es capaz de detectar a una criatura antinatural y determinar de modo aproximado su fuerza y tipo."},
	SENTIRMAGIA : {value: 299, name: "Sentir magia", descripcion: "El Garou es capaz de detectar el uso de los Dones, de la Magia o de Disciplinas de Vampiros como los Tremere y otros hechiceros."},
	SENTIRPLATA : {value: 300, name: "Sentir plata", descripcion: "El Garou es capaz de detectar la plata cerca de él."},
	SENTIRPRESA : {value: 301, name: "Sentir presa", descripcion: "El lupus detecta las presas suficientes para alimentar a la manada."},
	SERENIDAD : {value: 302, name: "Serenidad", descripcion: "El Lupino puede controlar la rabia de los demás hasta el punto de conducir a un Garou fuera del Frenesí."},
	SILENCIO : {value: 303, name: "Silencio", descripcion: "El Caminante puede atenuar cualquier sonido que realice y escapar sin ser advertido."},
	SOBRETENSION : {value: 304, name: "Sobretensión", descripcion: "El Garou puede provocar un apagón sobre una zona amplia de terreno."},
	SOMBRASHOGUERA : {value: 305, name: "Sombras de la hoguera", descripcion: "El Lupino obliga a los demás en participar en relatos, historias o consejos incluso aunque la víctima no quiera."},
	SOSIA : {value: 306, name: "Sosia", descripcion: "El Garou puede adoptar la forma exacta de otro humano o lobo concreto."},
	SUDARIO : {value: 307, name: "Sudario", descripcion: "Permite al Lupino crear una zona de oscuridad total."},
	SUPERVIVIENTE : {value: 308, name: "Superviviente", descripcion: "El Hombre Lobo con este poder ser´á inmune a las enfermedades, las temperaturas extremas, los venenos, los cambios de presión o los efectos de la corrupción del Wyrm. No necesitará descansar, ni comer ni beber, mientras que las heridas apenas le dolerán."},
	SUPLICIOVISCERAL : {value: 309, name: "Suplicio visceral", descripcion: "La Garou convierte sus garras en espolones con púas que gotean veneno negro el cual genera un dolor atroz."},
	TEJIDOMENTAL : {value: 310, name: "Tejido mental", descripcion: "El Garou puede invocar seres oníricos o imaginarios que cobran vida según sus deseos."},
	TOMARVERDADERAFORMA : {value: 311, name: "Tomar la verdadera forma", descripcion: "El Philodox puede obligar a otro Garou a volver a su forma de Raza natural."},
	TOQUEMUERTE : {value: 312, name: "Toque de muerte", descripcion: "El Caminante es capaz de paralizar de miedo a un contrincante al mostrarle el momento de su futura muerte. "},
	TRAGOGUERRERO : {value: 313, name: "Trago del guerrero", descripcion: "El Garou deja caer parte de su sangre en un líquido. Quien lo beba caerá en un Frenesí furioso."},
	VASIJAESPIRITUAL : {value: 314, name: "Vasija espiritual", descripcion: "Uno de los grandes secretos de los Theurge es su capacidad para convertirse en un híbrido Lupino-Espíritu con una entidad Umbral. Tendrá las capacidades de ambos seres. "},
	VELOCIDADVERTIGO : {value: 315, name: "Velocidad de Vértigo", descripcion: "El Garou duplica su velocidad en tierra."},
	VELOCIDADRAYO : {value: 316, name: "Velocidad del rayo", descripcion: "Este Don permite al Lupino correr a una velocidad diez veces mayor de lo normal."},
	VENENORASTRERO : {value: 317, name: "Veneno rastrero", descripcion: "El Garou con este Don recubre sus colmillos y garras con una toxina que impide que otros seres curen sus heridas con rapidez."},
	VENGADORSELENE : {value: 318, name: "Vengador de Selene", descripcion: "El Garou puede transformar todo su cuerpo (esté en la forma en que esté) en plata pura."},
	VERDADGAIA : {value: 319, name: "Verdad de Gaia", descripcion: "Quienes conocen este secreto pueden distinguir la verdad de la mentira."},
	VERDADEROTEMOR : {value: 320, name: "Verdadero temor", descripcion: "El Lupino exhibe su poderío de modo que un enemigo queda aterrorizado."},
	VESTIRCAMISAOSO : {value: 321, name: "Vestir la camisa de oso", descripcion: "El Garou jamás entrará en Frenesí Cobarde, por lo que nunca huirá del peligro."},
	VIAJECULPA : {value: 322, name: "Viaje de culpa", descripcion: "El Lupino puede inducir a otro a realizar un acto que en un principio no desea hacer por temor, culpabilidad u orgullo."},
	VIDAANIMAL : {value: 323, name: "Vida animal", descripcion: "El Lupino no sólo es capaz de comunicarse con otros animales, sino que estos acudirán a su convocatoria y le obedecerán."},
	VIENTOCORTANTE : {value: 324, name: "Viento cortante", descripcion: "El Garou puede crear una ráfaga de viento penetrante y dolorosa."},
	VIOLACION : {value: 325, name: "Violación", descripcion: "Este poder obliga al Garou a tener contacto físico con su víctima. Una vez que ha sucedido, dicha víctima quedará abrumada con sensaciones de profanación y debilidad."},
	VISIONMASALLA : {value: 326, name: "Visión del más allá", descripcion: "Cuando un peligro o una gran preocupación acechan al Garou, las visiones abordan al Lupino sin previo aviso. Estas visiones le darán pistas y/o ayudas."},
	VISIONUMBRAL : {value: 327, name: "Visión umbral", descripcion: "El Theurge es capaz de ver la Penumbra mirando desde el mundo físico."},
	ZARPASLOBEZNO : {value: 328, name: "Zarpas del lobezno recién nacido", descripcion: "El Hombre Lobo con este poder logra que un enemigo no utilice ningún poder sobrenatural o ataque especial que pudiera conocer."}
}

var TNaturaleza = {
	NONE : {value: 0, name: "No asignada", descripcion: ""},
    ARQUITECTO : {value: 1, name: "Arquitecto", descripcion: "intentas dejar logros duraderos."},
    BRAVUCON : {value: 2, name: "Bravucón", descripcion: "eres un protector...o un matón."},
    BUFON : {value: 3, name: "Bufón", descripcion: "ayudas a los demás a ver el chiste en todo."},
    CONFABULADOR : {value: 4, name: "Confabulador", descripcion: "lo más conveniente para los demás es que te ayuden...¡ en serio !"},
    CONFORMISTA : {value: 5, name: "Conformista", descripcion: "eres un jugador de equipo"},
    CRITICO : {value: 6, name: "Crítico", descripcion: "las cosas siempre pueden ser mejores. Señala cómo."},
    DIRECTOR : {value: 7, name: "Director", descripcion: "la estabilidad precisa orden. Imponlo."},
    FANATICO : {value: 8, name: "Fanático", descripcion: "tu causa lo es todo para ti."},
    HOSCO : {value: 9, name: "Hosco", descripcion: "¿ escéptico tu ? No, solo ves el mundo tal y como es."},
    JUEZ : {value: 10, name: "Juez", descripcion: "buscas justicia para todos."},
    MARTIR : {value: 11, name: "Mártir", descripcion: "cualquier causa que merezca la pena conseguir merece morir por ella."},
    PERVERTIDO : {value: 12, name: "Pervertido", descripcion: "las reglas existen para romperlas."},
    PROTECTOR : {value: 13, name: "Protector", descripcion: "debes ayudar a aliviar los sufrimientos."},
    REBELDE : {value: 14, name: "Rebelde", descripcion: "luchas contra la opresión allá donde aparezca."},
    SOLITARIO : {value: 15, name: "Solitario", descripcion: "nunca encajas ni encajarás."},
    SUPERVIVIENTE : {value: 16, name: "Superviviente", descripcion: "nada te detiene, quizás te frene, pero siempre sobrevives."},
    TRADICIONALISTA : {value: 17, name: "Tradicionalista", descripcion: "los caminos viejos son los mejores."},
    VANGUARDISTA : {value: 18, name: "Vanguardista", descripcion: "debes ser el primero en hacer cualquier cosa."},
    VISIONARIO : {value: 19, name: "Visionario", descripcion: "la verdad oculta es tu mayor búsqueda y tu mayor don."},
    VIVIDOR : {value: 20, name: "Vividor", descripcion: "la vida es demasiado importante como para no disfrutarla."}
}

var TConducta = {
	NONE : {value: 0, name: "No asignada", descripcion: ""},
	ARQUITECTO : {value: 1, name: "Arquitecto", descripcion: "intentas dejar logros duraderos."},
    BRAVUCON : {value: 2, name: "Bravucón", descripcion: "eres un protector...o un matón."},
    BUFON : {value: 3, name: "Bufón", descripcion: "ayudas a los demás a ver el chiste en todo."},
    CONFABULADOR : {value: 4, name: "Confabulador", descripcion: "lo más conveniente para los demás es que te ayuden...¡ en serio !"},
    CONFORMISTA : {value: 5, name: "Conformista", descripcion: "eres un jugador de equipo"},
    CRITICO : {value: 6, name: "Crítico", descripcion: "las cosas siempre pueden ser mejores. Señala cómo."},
    DIRECTOR : {value: 7, name: "Director", descripcion: "la estabilidad precisa orden. Imponlo."},
    FANATICO : {value: 8, name: "Fanático", descripcion: "tu causa lo es todo para ti."},
    HOSCO : {value: 9, name: "Hosco", descripcion: "¿ escéptico tu ? No, solo ves el mundo tal y como es."},
    JUEZ : {value: 10, name: "Juez", descripcion: "buscas justicia para todos."},
    MARTIR : {value: 11, name: "Mártir", descripcion: "cualquier causa que merezca la pena conseguir merece morir por ella."},
    PERVERTIDO : {value: 12, name: "Pervertido", descripcion: "las reglas existen para romperlas."},
    PROTECTOR : {value: 13, name: "Protector", descripcion: "debes ayudar a aliviar los sufrimientos."},
    REBELDE : {value: 14, name: "Rebelde", descripcion: "luchas contra la opresión allá donde aparezca."},
    SOLITARIO : {value: 15, name: "Solitario", descripcion: "nunca encajas ni encajarás."},
    SUPERVIVIENTE : {value: 16, name: "Superviviente", descripcion: "nada te detiene, quizás te frene, pero siempre sobrevives."},
    TRADICIONALISTA : {value: 17, name: "Tradicionalista", descripcion: "los caminos viejos son los mejores."},
    VANGUARDISTA : {value: 18, name: "Vanguardista", descripcion: "debes ser el primero en hacer cualquier cosa."},
    VISIONARIO : {value: 19, name: "Visionario", descripcion: "la verdad oculta es tu mayor búsqueda y tu mayor don."},
    VIVIDOR : {value: 20, name: "Vividor", descripcion: "la vida es demasiado importante como para no disfrutarla."}
}

var TModo = {
	FREE : {value: 0, name: "Libre"},
	BASE : {value: 1, name: "Puntos base"},
	GRATUITOS : {value : 2, name : "Puntos gratuítos"},
	EXPERIENCIA : {value: 3, name: "Puntos de experiencia"}
}

//el camino indica si viene por ninguno[0], raza[1], auspicio[2] o tribu[3]
var TCamino = {
	NONE : {value: 0, name: "No asignado"},
	RAZA : {value: 1, name: "Raza"},
	AUSPICIO : {value: 2, name: "Auspicio"},
	TRIBU : {value : 3, name : "Tribu"}
}

//funciones para obtener un tipo según el valor
function getAtributoByValue(aValue){
	var result = null;
	
	for (var dat in TAtributo) {
	var atributo = TAtributo[dat];
		if (atributo.value == aValue){
			result = atributo;
		}
	}
	
	return result;
}

function getHabilidadByValue(aValue){
	var result = null;
	
	for (var dat in THabilidad) {
	var habilidad = THabilidad[dat];
		if (habilidad.value == aValue){
			result = habilidad;
		}
	}
	
	return result;
}

function getRazaByValue(aValue){
	var result = null;
	
	for (var dat in TRaza) {
	var raza = TRaza[dat];
		if (raza.value == aValue){
			result = raza;
		}
	}
	
	return result;
}

function getAuspicioByValue(aValue){
	var result = null;
	
	for (var dat in TAuspicio) {
	var auspicio = TAuspicio[dat];
		if (auspicio.value == aValue){
			result = auspicio;
		}
	}
	
	return result;
}

function getTribuByValue(aValue){
	var result = null;
	
	for (var dat in TTribu) {
	var tribu = TTribu[dat];
		if (tribu.value == aValue){
			result = tribu;
		}
	}
	
	return result;
}

function getTrasfondoByValue(aValue){
	var result = null;
	
	for (var dat in TTrasfondo) {
	var trasfondo = TTrasfondo[dat];
		if (trasfondo.value == aValue){
			result = trasfondo;
		}
	}
	
	return result;
}

function getRangoByValue(aValue){
	var result = null;
	
	for (var dat in TRango) {
	var rango = TRango[dat];
		if (rango.value == aValue){
			result = rango;
		}
	}
	
	return result;
}

function getDonByValue(aValue){
	var result = null;
	
	for (var dat in TDon) {
	var don = TDon[dat];
		if (don.value == aValue){
			result = don;
		}
	}
	
	return result;
}

function getNaturalezaByValue(aValue){
	var result = null;
	
	for (var dat in TNaturaleza) {
	var naturaleza = TNaturaleza[dat];
		if (naturaleza.value == aValue){
			result = naturaleza;
		}
	}
	
	return result;
}

function getConductaByValue(aValue){
	var result = null;
	
	for (var dat in TConducta) {
	var conducta = TConducta[dat];
		if (conducta.value == aValue){
			result = conducta;
		}
	}
	
	return result;
}

function getModoByValue(aValue){
	var result = null;
	
	for (var dat in TModo) {
	var modo = TModo[dat];
		if (modo.value == aValue){
			result = modo;
		}
	}
	
	return result;
}

function getCaminoByValue(aValue){
	var result = null;
	
	for (var dat in TCamino) {
	var camino = TCamino[dat];
		if (camino.value == aValue){
			result = camino;
		}
	}
	
	return result;
}