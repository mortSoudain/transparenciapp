import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {

	/*
	Senadores = new Promise(function(done){
		done(asistencia('Allamand'))
	}).then(function(result) {
		console.log(result);
	}).catch(function(err) {
		console.log("ERROR_BM");
	})*/

//efewfwefewefwef
/*
	var hola = asistencia('Allamand')

	hola.then(function(result) {
		console.log(result);
	}).catch(function(err) {
		console.log("ERROR_BM");
	})
*/
//okjweofijewofi


////////////////////////////OK//////////////////
/*
	var p1 = new Promise(function(resolve, reject) {
	  resolve(senadoresBase('Allamand')[0]);
	});

	p1.then(function(value) {
	  console.log(value); // "Success!"
	}).catch(function(error) {
	  console.log(error); // "oh, no!"
	})
*/
/////////////////////////////////////////////////

/*
	var p1 = new Promise(function(resolve, reject) {
	  resolve(
			async t => {
			  const result = await asistencia()
			  console.log(result)
			}
	  	);
	});

	p1.then(function(value) {
	  console.log(value()); // "Success!"
	}).catch(function(error) {
	  console.log("error"); // "oh, no!"
	})
	*/

/*
	var p1 = new Promise(function(resolve, reject) {
	  resolve(
			async t => {
			  const result = await asistencia()
			}
	  	);
	});

	p1.then(function(value) {
	  console.log(value()); // "Success!"
	}).catch(function(error) {
	  console.log("error"); // "oh, no!"
	})
	*/
//////////OOOOOOOKKKKKKKKKKKKKK//////////////
/*
	asistencia('Allamand', { periodo: 486 })
	    .then(result => { console.log(result) })
	    */
//////////OOOOOOOKKKKKKKKKKKKKK//////////////

// Asistencias a salas senadores x periodo
/*
asistencia('Allamand', { tipo: 'sala', periodo:486 })
    .then(result => { console.log(result) })
*/

// TODAS las asistencias de senadores x periodo
/*
asistencia('Allamand', { tipo: 'todas', periodo:364 })
    .then(result => { console.log(result) })
*/



	//asistencia('Allende', { tipo: 'todas', periodo:486 })
    //.then(result => { console.log(result) })

/*
    asistencia({ partido: 'P.S.' }, { tipo: 'comision' })
    .then(result => { console.log(result) })
*/



/*
    Detalle de todas las sesiones de sala a las que falto el senador
    Orpis en el periodo actual
 */

/*
asistencia('Orpis', { tipo: 'sala' })
    .then(result => {
      const sesionesFaltadas = result[0].detalle.filter(sesion => !sesion.asiste)
      sesionesFaltadas.forEach(sesion => {
        const fecha = `${sesion.fecha.getDate()}/${sesion.fecha.getMonth() + 1}/${sesion.fecha.getFullYear()}`
      })
    })
*/



});
 