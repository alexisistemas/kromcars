$(function() {
 $("input,snapValues").jqBootstrapValidation({
 preventSubmit: true,
 submitError: function($form, event, errors) {
 // additional error messages or events
 },
 submitSuccess: function($form, event) {
 event.preventDefault(); // prevent default submit behaviour
 // get values from FORM
 //INFORMACION PERSONAL
 var name = $("input#nombre").val();
 var lastname = $("input#apellido").val();
 var inic = $("input#iniciales").val();
 var fechanac = $("input#fechanacimiento").val();
 var ssid = $("input#seguro").val();
 var phonehome = $("input#casa").val();
 var phonecell = $("input#celular").val();
 var driverl = $("input#Licencia").val();
 //var low1 = $("snapValues#slider-snap-value-lower").value-lower();
 //var up1 = $("snapValues#slider-snap-value-upper").value-upper();
 var email = $("input#correo").val();
 //var radio1 = $("input#customRadioInline1").val();
 //var radio2 = $("input#customRadioInline2").val();
 var address = $("input#direccion").val();
 //INFORMACION LABORAL
 var namelab = $("input#nombreempleador").val();
 var cargolab = $("input#cargo").val();
 var tiempolab = $("input#tiempo").val();
 var phonelab = $("input#oficina").val();
 var addresslab = $("input#direccionempleador").val();
 var ciudadlab = $("input#ciudad").val();
 var estadolab = $("input#estado").val();
 var ziplab = $("input#zip").val();
 var ingresobrutolab = $("input#ingresobruto").val();
 var otroingresolab = $("input#otroingreso").val();
 var fuentelab = $("input#fuente").val();
 //INTERCAMBIO
 var marcai = $("input#marca").val();
 var moeloi = $("input#modelo").val();
 var anoi = $("input#ano").val();
 var millasi = $("input#millas").val();
 var salari = $("input#saldar").val();
 var pagomensuali = $("input#pagomensual").val();
 //var radio3 = $("input#customRadioInline3").val();
 //var radio4 = $("input#customRadioInline4").val();
//VEHÍCULO NUEVO
 var marcavn = $("input#marca2").val();
 var modelovn = $("input#modelo2").val();
 var asientosvn = $("input#asientos").val();
 var pagoinicialvn = $("input#pagoinicial").val();
 var colorevn = $("input#colore").val();
 var colorivn = $("input#colori").val();
 //var radio5  = $("input#customRadioInline5").val();
 //var radio6 = $("input#customRadioInline6").val();
//FIRMA
 var firma = $("input#customFileLang").val();
 var namef = $("input#nombre2").val();
 var fechaf = $("input#fecha2").val();
 var check1 = $("input#defaultCheck1").val();
 var check2 = $("input#defaultCheck2").val();
 var check3 = $("input#defaultCheck3").val();
 var check4 = $("input#defaultCheck4").val();
 var check5 = $("input#defaultCheck5").val();
 var check6 = $("input#defaultCheck6").val();
 var check7 = $("input#defaultCheck7").val();
 var check8 = $("input#defaultCheck8").val();
 var check9 = $("input#defaultCheck9").val();
//FIN DEL FORM

 var firstName = name; // For Success/Failure Message
 // Check for white space in name for Success/Fail message
 if (firstName.indexOf(' ') >= 0) {
 firstName = name.split(' ').slice(0, -1).join(' ');
 }
 $.ajax({
 url: "././mail/aplicacion.php",
 type: "POST",
 dataType: 'json',
 data: {
/////INFORMACION PERSONAL/////
 name: name,
 lastname: lastname,
 inic: inic,
 fechanac: fechanac,
 ssid: ssid,
 phonehome: phonehome,
 phonecell: phonecell,
 driverl: driverl,
 //low1: low1,
 //up1: up1,
 email: email,
 //radio1: radio1,
 //radio2: radio2,
 address: address,
/////INFORMACION LABORAL/////
 namelab: namelab,
 cargolab: cargolab,
 tiempolab: tiempolab, 
 phonelab: phonelab,
 addresslab: addresslab,
 ciudadlab: ciudadlab,
 estadolab: estadolab,
 ziplab: ziplab,
 ingresobrutolab: ingresobrutolab,
 otroingresolab: otroingresolab,
 fuentelab: fuentelab,
/////INTERCAMBIO/////
 marcai: marcai,
 moeloi: moeloi,
 anoi: anoi,
 millasi: millasi,
 salari: salari,
 pagomensuali: pagomensuali,
 //radio3: radio3,
 //radio4: radio4,
/////VEHÍCULO NUEVO/////
 marcavn: marcavn,
 modelovn: modelovn,
 asientosvn: asientosvn,
 pagoinicialvn: pagoinicialvn,
 colorevn: colorevn,
 colorivn: colorivn
 //radio5: radio5,
 //radio6: radio6
/////FIRMA/////
 //firma: firma,
 //namef: namef,
 //fechaf: fechaf,
 //check1: check1,
 //check2: check2,
 //check3: check3,
 //check4: check4,
 //check5: check5,
 //check6: check6,
 //check7: check7,
 //check8: check8,
 //check9: check9
 },
 cache: false,
 success: function(data) {
 if(data.error){
 // Fail message
 $('#success').html("<div class='alert alert-danger'>");
 $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;").append("</button>");
 $('#success > .alert-danger').append("<strong>Sorry " + firstName + ", Something is not right. Please try again.");
 $('#success > .alert-danger').append('</div>');
 //clear all fields
 $('#aplicacionForm').trigger("reset");
 }
 else if(data.success){
 // Success message
 $('#success').html("<div class='alert alert-success'>");
 $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;").append("</button>");
 $('#success > .alert-success').append("<strong>Your message has been sent. </strong>");
 $('#success > .alert-success').append('</div>');
 //clear all fields
 $('#aplicacionForm').trigger("reset");
 }
 }
 })
 },
 filter: function() {
 return $(this).is(":visible");
 },
 });
});


/*When clicking on Full hide fail/success boxes */
$('#name').focus(function() {
 $('#success').html('');
});
