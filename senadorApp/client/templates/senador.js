
Template.senador.helpers({
	detalle: function(){ 
		return SenadoresDetalle.findOne({'senador.nombre':this.nombre}); 
	},
	asistencia: function(){ 
		return SenadoresAsistencias.findOne({'senador.nombre':this.nombre}); 
	},
	asistenciaComisiones: function(){
		var asistenciasSenador = SenadoresAsistencias.findOne({'senador.nombre':this.nombre})
		return asistenciasSenador;
	}

});
