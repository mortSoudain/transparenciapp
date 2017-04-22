var senadoresBase = require('senadores-base')
var senadoresAsistencia = require('senadores-asistencia')
var senadoresDetalle = require('senadores-detalle')
var senadoresElecciones = require('senadores-elecciones')

//Si no hay senadores en la colección
if (Senadores.find().count() === 0) {
	//Llamar a la API senadoresBase, y por cada resultado(senador)
	senadoresBase().forEach(function (senador) {
		//Insertarlo en la colección
		Senadores.insert(senador);
	});
}

//Si no hay datos de asistencias en la coleccion
if (SenadoresAsistencias.find().count() === 0) {
	//Recorrer a todos los senadores
	Senadores.find().forEach(function (senador) {
		//LLamar a la API senadoresAsistencia entregando el nombre y buscando
		//Todas(comisiones y salas) las asistencias del período 487
		//Devuelve una promesa
		//senadoresAsistencia(senador.nombre, { tipo: 'todas', incluyeSenador: true, periodo:487 })

		senadoresAsistencia(senador.nombre, { tipo: 'todas', periodo:487 })
    		.then(result => {
    			//Si todo sale bien con la promesa, se insertan los datos de asistencias en la colección
    			SenadoresAsistencias.insert({
    				senador : senador,
    				asistencias : result
    			})
    		 })
    	
	});
}

//Si no hay senadores en la colección
if (SenadoresDetalle.find().count() === 0) {
	senadoresBase().forEach(function (senador) {
		senadoresDetalle(senador.nombre)
			.then(result => {
	    		//Si todo sale bien con la promesa, se insertan los datos de asistencias en la colección
	    		SenadoresDetalle.insert({
	    			senador: senador,
	    			detalle:result
	    		})
	    	})
	});
}

//Si no hay senadores en la colección
if (SenadoresElecciones.find().count() === 0) {
	SenadoresElecciones.insert(senadoresElecciones())
}