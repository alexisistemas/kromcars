$(function() {
 $("input,textarea,snapValues").jqBootstrapValidation({
 preventSubmit: true,
 submitError: function($form, event, errors) {
 // additional error messages or events
 },
 submitSuccess: function($form, event) {
 event.preventDefault(); // prevent default submit behaviour
 // get values from FORMS
 //Contact Form
 var name = $("input#user-name").val();
 var lastname = $("input#user-lastname").val();
 var email = $("input#user-email").val();
 var phone = $("input#user-phone").val();
 var subject = $("input#user-subject").val();
 var message = $("textarea#user-message").val();
 var firstName = name; // For Success/Failure Message
 //Suscribe Form
 var email2 = $("input#suscrip").val();
 //Search Car Form
 var typec = $("input#type-car").val();
 var brand2 = $("input#brand").val();
 var model2 = $("input#model").val();
 var year2 = $("input#year").val();
 var name3 = $("input#name2").val();
 var phone3 = $("input#phone2").val();
 var mail4 = $("input#mail3").val();
 //var low = $("span#slider-snap-value-lower").val();
 var low = $("snapValues#slider-snap-value-lower").value-lower();
 var up = $("snapValues#slider-snap-value-upper").value-upper();
 //var up = $("span#slider-snap-value-upper").val();
 var firstName2 = name3; // For Success/Failure Message

 // Check for white space in name for Success/Fail message
 if (firstName.indexOf(' ') >= 0) {
 firstName = name.split(' ').slice(0, -1).join(' ');
 }
 if (firstName2.indexOf(' ') >= 0) {
 firstName2 = name3.split(' ').slice(0, -1).join(' ');
 }
 
 ///////////Contact Form///////////
 if(name!=""){$.ajax({
 url: "././mail/contact_me.php",
 type: "POST",
 dataType: 'json',
 data: {
 name: name,
 lastname: lastname,
 email: email,
 phone: phone,
 subject: subject,
 message: message
 },
 cache: false,
 success: function(data) {
 
 if(data.error){
 // Fail message
 $('#success').html("<div class='alert alert-danger'>");
 $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;").append("</button>");
 $('#success > .alert-danger').append("<strong>Lo sentimos " + firstName + ", Algo no salió bien. Por favor intentelo nuevamente.");
 $('#success > .alert-danger').append('</div>');
 //clear all fields
 $('#contactForm').trigger("reset");
 $('#subscribeForm').trigger("reset");
 $('#searchForm').trigger("reset"); 
 }
 else if(data.success){
 // Success message
 $('#success').html("<div class='alert alert-success'>");
 $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;").append("</button>");
 $('#success > .alert-success').append("<strong>Su mensaje ha sido enviado.</strong>");
 $('#success > .alert-success').append('</div>');
 //clear all fields
 $('#contactForm').trigger("reset");
 $('#subscribeForm').trigger("reset");
 $('#searchForm').trigger("reset");
 }
 }
 });}
 
  ///////////Search Form///////////

 if(name3!=""){$.ajax({
 url: "././mail/busqueda.php",
 type: "POST",
 dataType: 'json',
 data: {
  typec: typec,
  brand: brand2,
  model: model2,
  year: year2, 
  name: name3,
  phone: phone3,
  email: mail4,
  low: low,
  up: up 	 
 },
 cache: false,
 success: function(data) {
 
 if(data.error){
 // Fail message
 $('#success3').html("<div class='alert alert-danger'>");
 $('#success3 > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;").append("</button>");
 $('#success3 > .alert-danger').append("<strong>Lo sentimos " + firstName + ", Algo no salió bien. Por favor intentelo nuevamente.");
 $('#success3 > .alert-danger').append('</div>');
 //clear all fields
 $('#contactForm').trigger("reset");
 $('#subscribeForm').trigger("reset");
 $('#searchForm').trigger("reset"); 
 }
 else if(data.success){
 // Success message
 $('#success3').html("<div class='alert alert-success'>");
 $('#success3 > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;").append("</button>");
 $('#success3 > .alert-success').append("<strong>Su mensaje ha sido enviado.</strong>");
 $('#success3 > .alert-success').append('</div>');
 //clear all fields
 $('#contactForm').trigger("reset");
 $('#subscribeForm').trigger("reset");
 $('#searchForm').trigger("reset");
 }
 }
 });}
 
  ///////////Subscribe Form///////////

 if(email2!=""){$.ajax({
 url: "././mail/newsletter.php",
 type: "POST",
 dataType: 'json',
 data: {
 email: email2
 },
 cache: false,
 success: function(data) {
 if(data.error){
 // Fail message
 $('#success2').html("<div class='alert alert-danger'>");
 $('#success2 > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;").append("</button>");
 $('#success2 > .alert-danger').append("<strong>Lo sentimos " + email2 + ", Algo no salió bien. Por favor intentelo nuevamente.");
 $('#success2 > .alert-danger').append('</div>');
 //clear all fields
 $('#contactForm').trigger("reset");
 $('#subscribeForm').trigger("reset");
 $('#searchForm').trigger("reset");
 }
 else if(data.success){
 // Success message
 $('#success2').html("<div class='alert alert-success'>");
 $('#success2 > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;").append("</button>");
 $('#success2 > .alert-success').append("<strong>Su mensaje ha sido enviado.</strong>");
 $('#success2 > .alert-success').append('</div>');
 //clear all fields
 $('#contactForm').trigger("reset");
 $('#subscribeForm').trigger("reset");
 $('#searchForm').trigger("reset");
 }
 }
 });}
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
