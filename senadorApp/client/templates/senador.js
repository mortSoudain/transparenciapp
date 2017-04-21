  Template.senador.helpers({

	asitencia: function(senador) {
		console.log(senador.nombre);
    	return Asistencias.find({'senador.nombre':"Chahuán Chahuán, Francisco"});
  	}

});