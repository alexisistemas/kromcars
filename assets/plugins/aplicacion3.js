$(function() {
 $("input,snapValues").jqBootstrapValidation({
 preventSubmit: true,
 submitError: function($form, event, errors) {
 // additional error messages or events
 },
 submitSuccess: function($form, event) {
 event.preventDefault(); // prevent default submit behaviour
 // get values from FORM
 var name = $("input#nombre").val();
 var lastname = $("input#apellido").val();
 var inic = $("input#iniciales").val();
 var fechanac = $("input#fechanacimiento").val();
 var ssid = $("input#seguro").val();
 var phonehome = $("input#casa").val();
 var phonecell = $("input#celular").val();
 var driverl = $("input#Licencia").val();
 var low = $("snapValues#slider-snap-value-lower").value-lower();
 var up = $("snapValues#slider-snap-value-upper").value-upper();
 var email = $("input#correo").val();
 var tipo1 = $("input#customRadioInline1").val();
 var tipo2 = $("input#customRadioInline2").val();
 var address = $("input#dirección").val();
 
 
 /*var phone = $("input#user-phone").val();
 var subject = $("input#user-subject").val();
 var message = $("textarea#user-message").val();*/
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
 name: name,
 lastname: lastname,
 email: email
 /*phone: phone,
 subject: subject,
 message: message*/
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
