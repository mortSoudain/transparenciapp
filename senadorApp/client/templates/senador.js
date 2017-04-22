Template.senador.helpers({

	asistencias: function() {
		var hola = 	SenadoresAsistencias.find({},{fields:{'asistencias.sala.detalle':true}}).count()
		console.log(hola);
		return hola;
  	}

});