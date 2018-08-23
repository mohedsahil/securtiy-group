document.createElement("article");
document.createElement("aside");
document.createElement("audio");
document.createElement("canvas");
document.createElement("command");
document.createElement("datalist");
document.createElement("details");
document.createElement("embed");
document.createElement("figcaption");
document.createElement("figure");
document.createElement("footer");
document.createElement("header");
document.createElement("hgroup");
document.createElement("keygen");
document.createElement("mark");
document.createElement("meter");
document.createElement("nav");
document.createElement("output");
document.createElement("progress");
document.createElement("rp");
document.createElement("rt");
document.createElement("ruby");
document.createElement("section");
document.createElement("source");
document.createElement("summary");
document.createElement("time");
document.createElement("video");


$(document).ready(function(){
	$("#submit").click(function(){					   				   
		var hasError = false;
		var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
		
		var emailToVal = 'sahilkratos@gmail.com';
		
		var emailFromVal = $("#emailFrom").val();
		if(emailFromVal == '') {
			$("#emailFrom").after('<span class="error">You forgot to enter the email address to send from.</span>');
			hasError = true;
		} else if(!emailReg.test(emailFromVal)) {	
			$("#emailFrom").after('<span class="error">Enter a valid email address to send from.</span>');
			hasError = true;
		}
		
		var subjectVal = $("#subject").val();
		if(subjectVal == '') {
			$("#subject").after('<span class="error">You forgot to enter the subject.</span>');
			hasError = true;
		}
		
		var messageVal = $("#message").val();
		if(messageVal == '') {
			$("#message").after('<span class="error">You forgot to enter the message.</span>');
			hasError = true;
		}
		
		
		if(hasError == false) {
			$(this).hide();
			$("#sendEmail li.buttons").append('<img src="/wp-content/themes/default/images/template/loading.gif" alt="Loading" id="loading" />');
			
			$.post("/wp-content/uploads/2008/01/sendemail.php",
   				{ emailTo: emailToVal, emailFrom: emailFromVal, subject: subjectVal, message: messageVal },
   					function(data){
						$("#sendEmail").slideUp("normal", function() {				   
							
							$("#sendEmail").before('<h1>Success</h1><p>Your email was sent.</p>');											
						});
   					}
				 );
		}
		
		return false;
	});						   
});


$.post("/play/jqueryajaxform/sendEmail.php",
   { emailTo: emailToVal, emailFrom: emailFromVal, subject: subjectVal, message: messageVal },
    function(data){
  $("#sendEmail").slideUp("normal", function() {

   $("#sendEmail").before('<h1>Success</h1><p>Your email was sent.</p>');
  });
 }
); 