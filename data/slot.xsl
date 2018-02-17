<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="2.0">

<xsl:template match="garou">
	<html>
		<head>
			<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
			<title>Impresión Garou</title>
		</head>
		<body>
			<table id="p_plantilla">
				<tr>
					<td colspan="6"><h1><xsl:value-of select="nombre"/></h1></td>
				</tr>
				<tr>
					<td colspan="6"><hr /></td>
				</tr>
				<tr>
					<td>Conducta</td>
					<td><xsl:value-of select="conducta"/></td>
					<td>Raza</td>
					<td><xsl:value-of select="raza"/></td>
					<td>Manada</td>
					<td><xsl:value-of select="manada"/></td>
				</tr>
				<tr>
					<td>Naturaleza</td>
					<td><xsl:value-of select="naturaleza"/></td>
					<td>Auspicio</td>
					<td><xsl:value-of select="auspicio"/></td>
					<td>Tótem</td>
					<td><xsl:value-of select="totem"/></td>
				</tr>
				<tr>
					<td>Conducta</td>
					<td><xsl:value-of select="conducta"/></td>
					<td>Tribu</td>
					<td><xsl:value-of select="tribu"/></td>
					<td>Crónica</td>
					<td><xsl:value-of select="cronica"/></td>
				</tr>
				<tr>
					<td colspan="6"><hr /></td>
				</tr>
				<tr>
					<td colspan="6"><h2>Atributos</h2></td>
				</tr>
				<tr>
					<td colspan="6"><hr /></td>
				</tr>
				<tr>
					<td colspan="2"><h3>Físicos</h3></td>
					<td colspan="2"><h3>Sociales</h3></td>
					<td colspan="2"><h3>Mentales</h3></td>
				</tr>
				<tr>
				<td colspan="6"><hr /></td>
				</tr>
				<tr>
					<td>Fuerza</td>
					<td>
						<xsl:call-template name="generarCirculos">
							<xsl:with-param name="num" select="1" />
							<xsl:with-param name="paint" select="atributos/fisicos/fuerza" />
							<xsl:with-param name="max" select="5" />
						</xsl:call-template>
					</td>
					<td>Carisma</td>
					<td>
						<xsl:call-template name="generarCirculos">
							<xsl:with-param name="num" select="1" />
							<xsl:with-param name="paint" select="atributos/sociales/carisma" />
							<xsl:with-param name="max" select="5" />
						</xsl:call-template>
					</td>
					<td>Percepción</td>
					<td>
						<xsl:call-template name="generarCirculos">
							<xsl:with-param name="num" select="1" />
							<xsl:with-param name="paint" select="atributos/mentales/percepcion" />
							<xsl:with-param name="max" select="5" />
						</xsl:call-template>
					</td>
				</tr>
				<tr>
					<td>Destreza</td>
					<td>
						<xsl:call-template name="generarCirculos">
							<xsl:with-param name="num" select="1" />
							<xsl:with-param name="paint" select="atributos/fisicos/destreza" />
							<xsl:with-param name="max" select="5" />
						</xsl:call-template>
					</td>
					<td>Manipulación</td>
					<td>
						<xsl:call-template name="generarCirculos">
							<xsl:with-param name="num" select="1" />
							<xsl:with-param name="paint" select="atributos/sociales/manipulacion" />
							<xsl:with-param name="max" select="5" />
						</xsl:call-template>
					</td>
					<td>Inteligencia</td>
					<td>
						<xsl:call-template name="generarCirculos">
							<xsl:with-param name="num" select="1" />
							<xsl:with-param name="paint" select="atributos/mentales/inteligencia" />
							<xsl:with-param name="max" select="5" />
						</xsl:call-template>
					</td>
				</tr>
				<tr>
					<td>Resistencia</td>
					<td>
						<xsl:call-template name="generarCirculos">
							<xsl:with-param name="num" select="1" />
							<xsl:with-param name="paint" select="atributos/fisicos/resistencia" />
							<xsl:with-param name="max" select="5" />
						</xsl:call-template>
					</td>
					<td>Apariencia</td>
					<td>
						<xsl:call-template name="generarCirculos">
							<xsl:with-param name="num" select="1" />
							<xsl:with-param name="paint" select="atributos/sociales/apariencia" />
							<xsl:with-param name="max" select="5" />
						</xsl:call-template>
					</td>
					<td>Astucia</td>
					<td>
						<xsl:call-template name="generarCirculos">
							<xsl:with-param name="num" select="1" />
							<xsl:with-param name="paint" select="atributos/mentales/astucia" />
							<xsl:with-param name="max" select="5" />
						</xsl:call-template>
					</td>
				</tr>
				<tr>
					<td colspan="6"><hr /></td>
				</tr>
				<tr>
					<td colspan="6"><h2>Habilidades</h2></td>
				</tr>
				<tr>
					<td colspan="6"><hr /></td>
				</tr>
				<tr>
					<td colspan="2"><h3>Talentos</h3></td>
					<td colspan="2"><h3>Técnicas</h3></td>
					<td colspan="2"><h3>Conocimientos</h3></td>
				</tr>
				<tr>
				<td colspan="6"><hr /></td>
				</tr>
				<tr>
					<td>Alerta</td>
					<td>
						<xsl:call-template name="generarCirculos">
							<xsl:with-param name="num" select="1" />
							<xsl:with-param name="paint" select="habilidades/talentos/alerta" />
							<xsl:with-param name="max" select="5" />
						</xsl:call-template>
					</td>
					<td>Armas C.C.</td>
					<td>
						<xsl:call-template name="generarCirculos">
							<xsl:with-param name="num" select="1" />
							<xsl:with-param name="paint" select="habilidades/tecnicas/armasCC" />
							<xsl:with-param name="max" select="5" />
						</xsl:call-template>
					</td>
					<td>Ciencias</td>
					<td>
						<xsl:call-template name="generarCirculos">
							<xsl:with-param name="num" select="1" />
							<xsl:with-param name="paint" select="habilidades/conocimientos/ciencias" />
							<xsl:with-param name="max" select="5" />
						</xsl:call-template>
					</td>
				</tr>
				<tr>
					<td>Atletismo</td>
					<td>
						<xsl:call-template name="generarCirculos">
							<xsl:with-param name="num" select="1" />
							<xsl:with-param name="paint" select="habilidades/talentos/atletismo" />
							<xsl:with-param name="max" select="5" />
						</xsl:call-template>
					</td>
					<td>Armas de Fuego</td>
					<td>
						<xsl:call-template name="generarCirculos">
							<xsl:with-param name="num" select="1" />
							<xsl:with-param name="paint" select="habilidades/tecnicas/armasFuego" />
							<xsl:with-param name="max" select="5" />
						</xsl:call-template>
					</td>
					<td>Enigmas</td>
					<td>
						<xsl:call-template name="generarCirculos">
							<xsl:with-param name="num" select="1" />
							<xsl:with-param name="paint" select="habilidades/conocimientos/enigmas" />
							<xsl:with-param name="max" select="5" />
						</xsl:call-template>
					</td>
				</tr>
				<tr>
					<td>Callejeo</td>
					<td>
						<xsl:call-template name="generarCirculos">
							<xsl:with-param name="num" select="1" />
							<xsl:with-param name="paint" select="habilidades/talentos/callejeo" />
							<xsl:with-param name="max" select="5" />
						</xsl:call-template>
					</td>
					<td>Conducir</td>
					<td>
						<xsl:call-template name="generarCirculos">
							<xsl:with-param name="num" select="1" />
							<xsl:with-param name="paint" select="habilidades/tecnicas/conducir" />
							<xsl:with-param name="max" select="5" />
						</xsl:call-template>
					</td>
					<td>Informática</td>
					<td>
						<xsl:call-template name="generarCirculos">
							<xsl:with-param name="num" select="1" />
							<xsl:with-param name="paint" select="habilidades/conocimientos/informatica" />
							<xsl:with-param name="max" select="5" />
						</xsl:call-template>
					</td>
				</tr>			
				<tr>
					<td>Empatía</td>
					<td>
						<xsl:call-template name="generarCirculos">
							<xsl:with-param name="num" select="1" />
							<xsl:with-param name="paint" select="habilidades/talentos/empatia" />
							<xsl:with-param name="max" select="5" />
						</xsl:call-template>
					</td>
					<td>Etiqueta</td>
					<td>
						<xsl:call-template name="generarCirculos">
							<xsl:with-param name="num" select="1" />
							<xsl:with-param name="paint" select="habilidades/tecnicas/etiqueta" />
							<xsl:with-param name="max" select="5" />
						</xsl:call-template>
					</td>
					<td>Investigación</td>
					<td>
						<xsl:call-template name="generarCirculos">
							<xsl:with-param name="num" select="1" />
							<xsl:with-param name="paint" select="habilidades/conocimientos/investigacion" />
							<xsl:with-param name="max" select="5" />
						</xsl:call-template>
					</td>
				</tr>
				<tr>
					<td>Esquivar</td>
					<td>
						<xsl:call-template name="generarCirculos">
							<xsl:with-param name="num" select="1" />
							<xsl:with-param name="paint" select="habilidades/talentos/esquivar" />
							<xsl:with-param name="max" select="5" />
						</xsl:call-template>
					</td>
					<td>Interpretación</td>
					<td>
						<xsl:call-template name="generarCirculos">
							<xsl:with-param name="num" select="1" />
							<xsl:with-param name="paint" select="habilidades/tecnicas/interpretacion" />
							<xsl:with-param name="max" select="5" />
						</xsl:call-template>
					</td>
					<td>Leyes</td>
					<td>
						<xsl:call-template name="generarCirculos">
							<xsl:with-param name="num" select="1" />
							<xsl:with-param name="paint" select="habilidades/conocimientos/leyes" />
							<xsl:with-param name="max" select="5" />
						</xsl:call-template>
					</td>
				</tr>
				<tr>
					<td>Expresión</td>
					<td>
						<xsl:call-template name="generarCirculos">
							<xsl:with-param name="num" select="1" />
							<xsl:with-param name="paint" select="habilidades/talentos/expresion" />
							<xsl:with-param name="max" select="5" />
						</xsl:call-template>
					</td>
					<td>Liderazgo</td>
					<td>
						<xsl:call-template name="generarCirculos">
							<xsl:with-param name="num" select="1" />
							<xsl:with-param name="paint" select="habilidades/tecnicas/liderazgo" />
							<xsl:with-param name="max" select="5" />
						</xsl:call-template>
					</td>
					<td>Lingüística</td>
					<td>
						<xsl:call-template name="generarCirculos">
							<xsl:with-param name="num" select="1" />
							<xsl:with-param name="paint" select="habilidades/conocimientos/linguistica" />
							<xsl:with-param name="max" select="5" />
						</xsl:call-template>
					</td>
				</tr>
				<tr>
					<td>Impulso Primario</td>
					<td>
						<xsl:call-template name="generarCirculos">
							<xsl:with-param name="num" select="1" />
							<xsl:with-param name="paint" select="habilidades/talentos/impulsoPrimario" />
							<xsl:with-param name="max" select="5" />
						</xsl:call-template>
					</td>
					<td>Reparaciones</td>
					<td>
						<xsl:call-template name="generarCirculos">
							<xsl:with-param name="num" select="1" />
							<xsl:with-param name="paint" select="habilidades/tecnicas/reparaciones" />
							<xsl:with-param name="max" select="5" />
						</xsl:call-template>
					</td>
					<td>Medicina</td>
					<td>
						<xsl:call-template name="generarCirculos">
							<xsl:with-param name="num" select="1" />
							<xsl:with-param name="paint" select="habilidades/conocimientos/medicina" />
							<xsl:with-param name="max" select="5" />
						</xsl:call-template>
					</td>
				</tr>
				<tr>
					<td>Intimidación</td>
					<td>
						<xsl:call-template name="generarCirculos">
							<xsl:with-param name="num" select="1" />
							<xsl:with-param name="paint" select="habilidades/talentos/intimidacion" />
							<xsl:with-param name="max" select="5" />
						</xsl:call-template>
					</td>
					<td>Sigilo</td>
					<td>
						<xsl:call-template name="generarCirculos">
							<xsl:with-param name="num" select="1" />
							<xsl:with-param name="paint" select="habilidades/tecnicas/sigilo" />
							<xsl:with-param name="max" select="5" />
						</xsl:call-template>
					</td>
					<td>Ocultismo</td>
					<td>
						<xsl:call-template name="generarCirculos">
							<xsl:with-param name="num" select="1" />
							<xsl:with-param name="paint" select="habilidades/conocimientos/ocultismo" />
							<xsl:with-param name="max" select="5" />
						</xsl:call-template>
					</td>
				</tr>
				<tr>
					<td>Pelea</td>
					<td>
						<xsl:call-template name="generarCirculos">
							<xsl:with-param name="num" select="1" />
							<xsl:with-param name="paint" select="habilidades/talentos/pelea" />
							<xsl:with-param name="max" select="5" />
						</xsl:call-template>
					</td>
					<td>Supervivencia</td>
					<td>
						<xsl:call-template name="generarCirculos">
							<xsl:with-param name="num" select="1" />
							<xsl:with-param name="paint" select="habilidades/tecnicas/supervivencia" />
							<xsl:with-param name="max" select="5" />
						</xsl:call-template>
					</td>
					<td>Política</td>
					<td>
						<xsl:call-template name="generarCirculos">
							<xsl:with-param name="num" select="1" />
							<xsl:with-param name="paint" select="habilidades/conocimientos/politica" />
							<xsl:with-param name="max" select="5" />
						</xsl:call-template>
					</td>
				</tr>
				<tr>
					<td>Subterfugio</td>
					<td>
						<xsl:call-template name="generarCirculos">
							<xsl:with-param name="num" select="1" />
							<xsl:with-param name="paint" select="habilidades/talentos/subterfugio" />
							<xsl:with-param name="max" select="5" />
						</xsl:call-template>
					</td>
					<td>Trato con Animales</td>
					<td>
						<xsl:call-template name="generarCirculos">
							<xsl:with-param name="num" select="1" />
							<xsl:with-param name="paint" select="habilidades/tecnicas/tratoAnimales" />
							<xsl:with-param name="max" select="5" />
						</xsl:call-template>
					</td>
					<td>Rituales</td>
					<td>
						<xsl:call-template name="generarCirculos">
							<xsl:with-param name="num" select="1" />
							<xsl:with-param name="paint" select="habilidades/conocimientos/rituales" />
							<xsl:with-param name="max" select="5" />
						</xsl:call-template>
					</td>
				</tr>
				<tr>
					<td colspan="6"><hr /></td>
				</tr>
				<tr>
					<td colspan="6"><h2>Ventajas</h2></td>
				</tr>
				<tr>
					<td colspan="6"><hr /></td>
				</tr>
				<tr>
					<td colspan="2"><h3>Trasfondos</h3></td>
					<td colspan="4"><h3>Dones</h3></td>
				</tr>
				<tr>
				<td colspan="6"><hr /></td>
				</tr>
				<xsl:call-template name="generarVentajas"></xsl:call-template>
				<tr>
					<td colspan="6"><hr /></td>
				</tr>
				<tr>
					<td colspan="6"><h2>Toques Finales</h2></td>
				</tr>
				<tr>
					<td colspan="6"><hr /></td>
				</tr>
				<tr>
					<td colspan="3"><h3>Renombre</h3></td>
					<td colspan="3"></td>
				</tr>
				<tr>
					<td colspan="3"><hr /></td>
					<td colspan="3"></td>
				</tr>
				<tr>
					<td>Gloria</td>
					<td colspan="2">
						<xsl:call-template name="generarCirculos">
							<xsl:with-param name="num" select="1" />
							<xsl:with-param name="paint" select="renombre/gloria" />
							<xsl:with-param name="max" select="10" />
						</xsl:call-template>
					</td>
					<td>Rabia</td>
					<td colspan="2">
						<xsl:call-template name="generarCirculos">
							<xsl:with-param name="num" select="1" />
							<xsl:with-param name="paint" select="rabia" />
							<xsl:with-param name="max" select="10" />
						</xsl:call-template>
					</td>
				</tr>
				<tr>
					<td>Honor</td>
					<td colspan="2">
						<xsl:call-template name="generarCirculos">
							<xsl:with-param name="num" select="1" />
							<xsl:with-param name="paint" select="renombre/honor" />
							<xsl:with-param name="max" select="10" />
						</xsl:call-template>
					</td>
					<td>Gnosis</td>
					<td colspan="2">
						<xsl:call-template name="generarCirculos">
							<xsl:with-param name="num" select="1" />
							<xsl:with-param name="paint" select="gnosis" />
							<xsl:with-param name="max" select="10" />
						</xsl:call-template>
					</td>
				</tr>
				<tr>
					<td>Sabiduría</td>
					<td colspan="2">
						<xsl:call-template name="generarCirculos">
							<xsl:with-param name="num" select="1" />
							<xsl:with-param name="paint" select="renombre/sabiduria" />
							<xsl:with-param name="max" select="10" />
						</xsl:call-template>
					</td>
					<td>Fuerza de Voluntad</td>
					<td colspan="2">
						<xsl:call-template name="generarCirculos">
							<xsl:with-param name="num" select="1" />
							<xsl:with-param name="paint" select="fuerzaVoluntad" />
							<xsl:with-param name="max" select="10" />
						</xsl:call-template>
					</td>
				</tr>
				<tr>
					<td>Rango</td>
					<td><xsl:value-of select="rango"/></td>
					<td colspan="4"></td>
				</tr>
			</table>
		</body>
	</html>
</xsl:template>

<xsl:template name="generarVentajas">
	<xsl:variable name="maxTrasfondos" select="count(trasfondos/trasfondo)" />
	<xsl:variable name="maxDones" select="count(dones/don)" />
	<xsl:variable name="middleDones" select="($maxDones + 1) div 2" />
	
	<xsl:call-template name="generarLineaVentajas">
		<xsl:with-param name="numTrasfondo" select="1" />
		<xsl:with-param name="numDon" select="1" />
		<xsl:with-param name="maxTrasfondos" select="$maxTrasfondos" />
		<xsl:with-param name="maxDones" select=" $maxDones" />
	</xsl:call-template>
</xsl:template>

<xsl:template name="generarLineaVentajas">
	<xsl:param name="maxTrasfondos" />
	<xsl:param name="maxDones" />
	<xsl:param name="numTrasfondo" />
	<xsl:param name="numDon" />
	
	<xsl:if test="($numTrasfondo &lt;= $maxTrasfondos) or ($numDon &lt;= $maxDones) or (($numDon + 1) &lt;= $maxDones)">
		<tr>
			<xsl:if test="$numTrasfondo &lt;= $maxTrasfondos">
				<td><xsl:value-of select="trasfondos/trasfondo[position() = $numTrasfondo]/nombre"/></td>
				<td>
					<xsl:call-template name="generarCirculos">
						<xsl:with-param name="num" select="1" />
						<xsl:with-param name="paint" select="trasfondos/trasfondo[position() = $numTrasfondo]/valor" />
						<xsl:with-param name="max" select="5" />
					</xsl:call-template>
				</td>
			</xsl:if>
			<xsl:if test="$numTrasfondo &gt; $maxTrasfondos">
				<td colspan="2"></td>
			</xsl:if>
		
			<xsl:if test="$numDon &lt;= $maxDones">
				<td colspan="2"><xsl:value-of select="dones/don[position() = $numDon]/nombre"/></td>
			</xsl:if>
			<xsl:if test="$numDon &gt; $maxDones">
				<td colspan="2"></td>
			</xsl:if>
			
			<xsl:if test="($numDon + 1) &lt;= $maxDones">
				<td colspan="2"><xsl:value-of select="dones/don[position() = ($numDon + 1)]/nombre"/></td>
			</xsl:if>
			<xsl:if test="($numDon + 1) &gt; $maxDones">
				<td colspan="2"></td>
			</xsl:if>
		</tr>
		
		<xsl:call-template name="generarLineaVentajas">
			<xsl:with-param name="maxTrasfondos" select="$maxTrasfondos" />
			<xsl:with-param name="maxDones" select="$maxDones" />
			<xsl:with-param name="numTrasfondo" select="$numTrasfondo + 1" />
			<xsl:with-param name="numDon" select="$numDon + 2" />
		</xsl:call-template>
	</xsl:if>
</xsl:template>

<xsl:template name="generarCirculos">
	<xsl:param name="num" />
	<xsl:param name="paint" />
	<xsl:param name="max" />
	<xsl:if test="$num &lt;= $max">
		<xsl:if test="$num &lt;= $paint">
			<input type="radio" checked="checked" />
		</xsl:if>
		<xsl:if test="$num > $paint">
			<input type="radio" />
		</xsl:if>
		
		<xsl:call-template name="generarCirculos">
			<xsl:with-param name="num" select="$num + 1" />
			<xsl:with-param name="paint" select="$paint" />
			<xsl:with-param name="max" select="$max" />
		</xsl:call-template>
	</xsl:if>
</xsl:template>

</xsl:stylesheet>