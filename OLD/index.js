

function sendMail(formEmail){
 var data = formEmail;
 var  status = null;

 emailjs.sendForm('default_service', 'email_hopper_codes', data);
 
 alert('Obrigada por entrar em contato comigo. Sua mensagem foi enviada!');

  return false;
}